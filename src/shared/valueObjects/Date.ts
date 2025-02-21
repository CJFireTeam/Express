export default class Date {
    public value: globalThis.Date;
    constructor(value: string | globalThis.Date) {
      if (!value) {
        throw new Error('date is required');
      }
      // Si el valor es un string, se intenta convertir a Date
      const parsedDate = value instanceof globalThis.Date ? value : new globalThis.Date(value);
      if (isNaN(parsedDate.getTime())) {
        throw new Error('invalid date');
      }
      this.value = parsedDate;
    }
  }
  