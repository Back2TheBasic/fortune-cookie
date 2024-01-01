export const replaceSpacesWithHyphens = (str: string) => {
  return str.replace(/ /g, '-');
};

export const replaceHyphensWithSpaces = (str: string) => {
  return str.replace(/-/g, ' ');
};
