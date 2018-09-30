/*
 * Utility to convert string
 * to camelCase
*/

interface StringToCamelCase {
  title?: string;
  replace: any;
}

export function convertStringToCamelCase(string: StringToCamelCase) {
  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match: string, index: number) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

interface StringToHyphenated {
  title?: string;
  replace: any;
}

export function convertStringToHyphenated(string: StringToHyphenated) {
  return string.replace(/\s/g, "-").toLowerCase();
}