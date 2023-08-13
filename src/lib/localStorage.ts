/**
 * Used to avoid clashing with other apps deployed to GitHub Pages
 */
function transformKey(key: string): string {
  return `yuhchen.github.io/meprpa::${key}`;
}

export function wrapLocalStorage(s: Storage = localStorage) {
  return {
    getItem: (key: string): string | null => {
      return s.getItem(transformKey(key));
    },
    setItem: (key: string, val: string): void => {
      s.setItem(transformKey(key), val);
    },
  };
}
