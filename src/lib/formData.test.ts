import { getAsString } from './formData';

describe('getAsString', () => {
  test('given key is not present, then throws', () => {
    const formData = new FormData();
    expect(() => getAsString(formData, 'doesNotExist')).toThrow();
  });

  test('given value is not string, then throws', () => {
    const formData = new FormData();
    formData.append('foo', new File(['bar'], 'foo.txt'));
    expect(() => getAsString(formData, 'foo')).toThrow();
  });

  test('given value is string, then returns value', () => {
    const formData = new FormData();
    formData.append('foo', 'bar');
    expect(getAsString(formData, 'foo')).toEqual('bar');
  });
});
