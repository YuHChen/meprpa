<script lang="ts">
  import Papa, { type ParseResult } from 'papaparse';

  let spreadsheetId = '';
  $: url = `https://docs.google.com/spreadsheets/d/e/${spreadsheetId}/pub?output=csv`;
  let recipes: string;

  interface Recipe {
    name: string;
    ingredients: string;
  }

  interface Ingredient {
    name: string;
    amount: string;
    unit: string;
  }

  function fetchSpreadsheet(e: Event) {
    e.preventDefault();
    if (spreadsheetId) {
      Papa.parse<Recipe>(url, {
        download: true,
        header: true,
        complete: loadRecipes,
      });
    }
    return false;
  }

  function loadRecipes(results: ParseResult<Recipe>) {
    const data = results.data;
    recipes = data.map(recipeToHtml).join('\n');
    console.log(data);
  }

  function recipeToHtml(recipe: Recipe) {
    return [`<h3>${recipe.name}</h3>`, ingredientsToHtml(recipe.ingredients)].join('\n');
  }

  function ingredientsToHtml(ingredients: string) {
    console.log(JSON.parse(ingredients));
    const html = [
      '<ol>',
      ...JSON.parse(ingredients).map((i: Ingredient) => `<li>${i.amount} ${i.unit} ${i.name}</li>`),
      '</ol>',
    ];
    console.log(html);
    return html.join('\n');
  }
</script>

<form on:submit={fetchSpreadsheet}>
  <label>
    Spreadsheet ID:
    <input bind:value={spreadsheetId} required />
  </label>

  <input type="submit" value="Fetch Spreadsheet" disabled={spreadsheetId === ''} />
</form>

{#if recipes === undefined}
  <p>
    You can find the spreadsheet ID in a Google Sheets URL:
    <code>https://docs.google.com/spreadsheets/d/<strong>spreadsheetId</strong>/edit#gid=0</code>.
    Learn more
    <a target="_new" href="https://developers.google.com/sheets/api/guides/concepts">here</a>.
  </p>
{:else}
  <p>
    The published spreadsheet is located at
    <a target="_new" href={url}> {url} </a>
  </p>

  <div>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html recipes}
  </div>
{/if}
