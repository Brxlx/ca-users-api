import { format } from 'date-fns';

import { DateProviderContract } from './DateProviderContract';

class DateFnsProvider implements DateProviderContract {
  public formatToString(date: Date, stringFormat: string): string {
    return format(date, stringFormat);
  }
}

export { DateFnsProvider };
