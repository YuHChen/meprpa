import { localStorage } from '$lib/localStorage';
import { writable } from 'svelte/store';

export interface RecipeBook {
  id: string;
  name: string;
}

export const recipeBooks = (() => {
  // wire up store to read from localStorage
  const locallyStored = JSON.parse(localStorage.getItem('recipeBooks') ?? '[]');
  const { subscribe, set, update } = writable<RecipeBook[]>(locallyStored);

  return {
    subscribe,
    push: (recipeBook: RecipeBook) => update((recipeBooks) => [...recipeBooks, recipeBook]),
    reset: () => set([]),
  };
})();

// wire up store to write to localStorage
recipeBooks.subscribe((val) => localStorage.setItem('recipeBooks', JSON.stringify(val)));
