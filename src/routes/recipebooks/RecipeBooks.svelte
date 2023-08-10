<script lang="ts">
  import { recipeBooks } from './recipesbooks';
</script>

<h2>Your recipe books</h2>
<button on:click={recipeBooks.reset} disabled={$recipeBooks.length === 0}>
  Delete All Recipe Books
</button>
<ol>
  {#each $recipeBooks as recipeBook}
    <li>
      <a
        target="_new"
        href="https://docs.google.com/spreadsheets/d/e/{recipeBook.id}/pub?output=csv"
      >
        {recipeBook.name}
      </a>
    </li>
  {/each}
</ol>
