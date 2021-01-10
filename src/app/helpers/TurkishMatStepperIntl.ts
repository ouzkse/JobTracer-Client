import {MatStepperIntl} from '@angular/material/stepper';

export function getTurkishStepperIntl() {
  const stepperIntl = new MatStepperIntl();

  stepperIntl.optionalLabel = 'İsteğe Bağlı';
  return stepperIntl;
}
