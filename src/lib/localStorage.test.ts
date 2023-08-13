import { wrapLocalStorage } from './localStorage';

describe('wrapLocalStorage', () => {
  const mockGetItem = vi.fn<[string], string | null>(() => null);
  const mockSetItem = vi.fn<[string, string], void>();
  const mockLocalStorage: Storage = {
    ...localStorage,
    getItem: mockGetItem,
    setItem: mockSetItem,
  };

  describe('getItem', () => {
    test('given key, then uses transformed key to get item from underlying storage', () => {
      const s = wrapLocalStorage(mockLocalStorage);
      s.getItem('foo');
      expect(mockGetItem).toBeCalledTimes(1);
      expect(mockGetItem).toBeCalledWith('yuhchen.github.io/meprpa::foo');
    });
  });

  describe('setItem', () => {
    test('given key and value, then uses transformed key to set item in underlying storage', () => {
      const s = wrapLocalStorage(mockLocalStorage);
      s.setItem('foo', 'bar');
      expect(mockSetItem).toBeCalledTimes(1);
      expect(mockSetItem).toBeCalledWith('yuhchen.github.io/meprpa::foo', 'bar');
    });
  });
});
