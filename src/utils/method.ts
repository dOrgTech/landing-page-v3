/** @format */

type SafeSanitize<T> = {
  [P in keyof T]: T[P] extends string ? string : T[P];
};

export const sanitizeInput = (input: string): string => {
  const map: { [char: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };
  const reg = /[&<>"'/]/gi;
  return input.replace(reg, (match) => map[match] || match);
};

export const safeSanitize = <T extends { [key: string]: any }>(
  data: T
): SafeSanitize<T> => {
  const sanitizedData: any = {};

  for (const key in data) {
    const value = data[key];
    sanitizedData[key] =
      typeof value === "string" ? sanitizeInput(value) : value;
  }

  return sanitizedData as SafeSanitize<T>;
};
