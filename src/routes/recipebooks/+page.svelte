<script lang="ts">
  import AddRecipeBook from './AddRecipeBook.svelte';
  import RecipeBooks from './RecipeBooks.svelte';
</script>

<div>
  <h1>Manage Recipe Books</h1>

  <AddRecipeBook />

  <RecipeBooks />
</div>

<style>
  div {
    margin: auto 1rem;
  }
</style>
