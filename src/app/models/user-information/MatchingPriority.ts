export enum MatchingPriority {
  NONE = 'NONE',
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  HIGHEST = 'HIGHEST'
}

export function getNumberValueOfMatchingPriority(priority): number {
  switch (priority) {
    case MatchingPriority.NONE:
      return 1;
    case MatchingPriority.LOW:
      return 2;
    case MatchingPriority.MEDIUM:
      return 3;
    case MatchingPriority.HIGH:
      return 4;
    case MatchingPriority.HIGHEST:
      return 5;
    default:
      return priority;
  }
}

export function getValueOfMatchingPriority(priority): string {
  switch (priority) {
    case '1':
      return MatchingPriority.NONE;
    case '2':
      return MatchingPriority.LOW;
    case '3':
      return MatchingPriority.MEDIUM;
    case '4':
      return MatchingPriority.HIGH;
    case '5':
      return MatchingPriority.HIGHEST;
    default:
      return priority;
  }
}

export function getStringValueOfMatchingPriority(priority): string {
  switch (priority) {
    case 1:
    case MatchingPriority.NONE:
      return 'Çok Düşük';
    case 2:
    case MatchingPriority.LOW:
      return 'Düşük';
    case 3:
    case MatchingPriority.MEDIUM:
      return 'Orta';
    case 4:
    case MatchingPriority.HIGH:
      return 'Yüksek';
    case 5:
    case MatchingPriority.HIGHEST:
      return 'Çok Yüksek';
  }
}
