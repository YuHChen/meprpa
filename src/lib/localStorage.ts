/**
 * Used to avoid clashing with other apps deployed to GitHub Pages
 */
function transformKey(key: string): string {
  return `yuhchen.github.io/meprpa::${key}`;
}

const _localStorage = {
  getItem: (key: string): string | null => {
    return localStorage.getItem(transformKey(key));
  },
  setItem: (key: string, val: string): void => {
    localStorage.setItem(transformKey(key), val);
  },
};
export { _localStorage as localStorage };
