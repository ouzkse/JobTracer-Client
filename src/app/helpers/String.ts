
export function removeDialect(value: string): string {
  return value.toString()
    .replace('ş', 's')
    .replace('ç', 'c')
    .replace('ğ', 'g')
    .replace('ö', 'o')
    .replace('ü', 'u')
    .replace('ı', 'i');
}

export function getGraduationYearArray(): Array<string> {
  const retArray = Array<string>();
  const start = 1970;
  const end = 2025;

  for (let i = start; i <= end; i++) {
    retArray.push(i.toString());
  }

  return retArray.reverse();
}
