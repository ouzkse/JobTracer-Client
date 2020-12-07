
export function removeDialect(value: string): string {
  return value.toString()
    .replace('ş', 's')
    .replace('ç', 'c')
    .replace('ğ', 'g')
    .replace('ö', 'o')
    .replace('ü', 'u')
    .replace('ı', 'i');
}
