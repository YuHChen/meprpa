<script lang="ts">
  import { page } from '$app/stores';
</script>

<div>
  <h1>Edit recipe book</h1>
  <p>Spreadsheet ID: {$page.url.searchParams.get('id')}</p>
</div>

<style>
  div {
    margin: auto 1rem;
  }
</style>
