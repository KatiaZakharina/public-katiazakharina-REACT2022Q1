export const formatYmd = (date: Date) => date.toISOString().split('T')[0];

export const dateAfter = (date: Date, offset: number) =>
  new Date(date.setDate(date.getDate() + offset));
