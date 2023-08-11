<script lang="ts">
  import { recipeBooks } from './recipesbooks';

  function removeRecipeBook() {}
</script>

<div>
  <h2>Your recipe books</h2>
  <button on:click={recipeBooks.reset} disabled={$recipeBooks.length === 0}>
    Remove All Recipe Books
  </button>
  <ul>
    {#each $recipeBooks as recipeBook (recipeBook.id)}
      <li>
        <form on:submit|preventDefault={removeRecipeBook}>
          <input type="hidden" name="id" value={recipeBook.id} />
          <span>{recipeBook.name}</span>
          <button aria-label="Remove recipe book" />
        </form>
      </li>
    {/each}
  </ul>
</div>

<style>
  div {
    max-width: 30em;
  }

  button {
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  :is(button:hover):enabled {
    opacity: 1;
  }

  div button {
    padding: 0.5rem;
    border: 1px solid hsl(210, 5%, 15%);
    border-radius: 4px;
    box-sizing: border-box;
    background: hsl(0, 10%, 90%);
  }

  ul:has(li):has(form) {
    list-style: none;
    padding: 0;
  }

  ul li form {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5em 0.5em 0.5em 1em;
    margin: 0 0 0.5em 0;
    gap: 0.5em;
    border-radius: 5px;
    user-select: none;
    background: hsl(0, 10%, 90%);
    filter: drop-shadow(2px 3px 6px rgba(0, 0, 0, 0.1));
    transition:
      filter 0.2s,
      opacity 0.2s;
  }

  form span {
    flex: 1;
  }

  form button {
    border: none;
    background: url(./remove.svg) no-repeat 50% 50%;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 1rem 1rem;
    cursor: pointer;
    width: 3em;
    height: 3em;
    margin: -0.5em -0.5em -0.5em 0;
    aspect-ratio: 1;
  }
</style>
