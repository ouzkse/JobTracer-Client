import {MatPaginatorIntl} from '@angular/material/paginator';

const rangeLabel = (page: number, pageSize: number, length: number) => {
  if (length === 0 || pageSize === 0) { return `0 / ${length}`; }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
    Math.min(startIndex + pageSize, length) :
    startIndex + pageSize;

  return `${startIndex + 1} / ${length}`;
};

export function getTurkishPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Gösterilen Eleman Sayısı';
  paginatorIntl.nextPageLabel = 'Sonraki Sayfa';
  paginatorIntl.previousPageLabel = 'Önceki Sayfa';
  paginatorIntl.getRangeLabel = rangeLabel;

  return paginatorIntl;
}
