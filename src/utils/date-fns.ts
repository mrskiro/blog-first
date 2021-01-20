import { format } from 'date-fns';

export const yyyyMMMMdd = (date: string | number | Date) => {
  return format(new Date(date), 'yyyy/MM/dd');
};
