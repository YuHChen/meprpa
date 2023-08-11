export function getAsString(data: FormData, key: string): string {
  const val = data.get(key)!;
  if (typeof val === 'string') {
    return val;
  } else {
    throw Error(`Expected string for \`${key}\` in form data.`);
  }
}
