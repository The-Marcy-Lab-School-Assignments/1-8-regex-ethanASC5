const helloWorldRegex = (str) => {
  
const pattern = /hello world/i;

return pattern.test(str);
}

const hasAVowel = (str) => {
  const pattern = /[aeiou]/i;

  return pattern.test(str);
}

const hasCatsOrDogs = (str) => {
  const pattern = /cats|dogs/i;

  return pattern.test(str);

 };

const hasVowelStart = (str) => {
  const pattern = /^[aeiou]/i;
  return pattern.test(str)
}

const hasPunctuationEnd = (str) => /[!.?]$/.test(str);

const hasNothingOrDigits = (str) => { 
  const pattern = /^(\d*)$/;

  return pattern.test(str);
};

const hasNoFlippers = (str) => !/[clikoxBCDEHIKOX]/.test(str)

const isValidEmail = (str) => {}

const isValidPhoneNumber = (str) => { };

const matchAllNumbers = (str) => { 
  const pattern = /\d+/g;

const matches = str.match(pattern);

return matches === null ? [] : matches;};

const matchAllNumbersAsNumbers = (str) => (str.match(/\d+/g) || []).map(Number);

const matchAllWords = (str) => {
  const pattern = /[a-zA-Z']+/g;

const matches = str.match(pattern);

return matches || [];
};

const replaceAllNumbers = (str) => str.replace(/\d+/g, "???")

const fixFileName = (str) => {
  const pattern = /\s+/g;

  const fixedStr = str.replace(pattern, '_');

  return fixedStr;

 };

const nameRedacter = (str) => str.replace(/\b[A-Z]{2,}\b/g, 'REDACTED' )

const camelToSnakeCase = (str) => { 
  const pattern = /[A-Z]/g;

  const snakeCaseString = str.replace(pattern, (match) => '_' + match.toLowerCase());

  return snakeCaseString.replace(/^_/, '');

};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
