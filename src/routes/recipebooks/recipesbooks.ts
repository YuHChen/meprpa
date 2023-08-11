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
    push: (recipeBook: RecipeBook) =>
      update((recipeBooks) => {
        const { id } = recipeBook;
        if (recipeBooks.some((r) => r.id === id)) {
          throw new Error(`Recipe book with id \`${id}\` already exists.`);
        } else {
          return [...recipeBooks, recipeBook];
        }
      }),
    remove: (id: string) =>
      update((recipeBooks) => {
        const index = recipeBooks.findIndex((r) => r.id === id);
        if (index > -1) {
          recipeBooks.splice(index, 1);
        }
        return recipeBooks;
      }),
    reset: () => set([]),
  };
})();

// wire up store to write to localStorage
recipeBooks.subscribe((val) => localStorage.setItem('recipeBooks', JSON.stringify(val)));
