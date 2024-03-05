export const MIN_TEXTAREA_HEIGHT = 112;
export const MAX_INPUT_LENGTH = 65;
export const MIN_INPUT_LENGTH = 3;
export const INITIAL_REDUX_STATE = {
  tasks: {},
  columns: {
    to_do: {
      id: 'to_do',
      taskIds: []
    },
    in_progress: {
      id: 'in_progress',
      taskIds: []
    },
    done: {
      id: 'done',
      taskIds: []
    }
  },
  columnOrder: ['to_do', 'in_progress', 'done'],
  search: null,
  searchTerm: ''
};
export const COLOR_PALETTE = {
  to_do: {
    primary: '#0096e0',
    secondary: '#08b4e9',
    tertiary: '#b3e5f8'
  },
  in_progress: {
    primary: '#f70058',
    secondary: '#fc5f78',
    tertiary: '#ffbfc2'
  },
  done: {
    primary: '#032742',
    secondary: '#446076',
    tertiary: '#b9c3cc'
  }
};
export const MAP_DIACRITICAL_LETTERS = {
  a: '[aàáâãäåāăą]',
  à: '[aàáâãäåāăą]',
  á: '[aàáâãäåāăą]',
  â: '[aàáâãäåāăą]',
  ã: '[aàáâãäåāăą]',
  ä: '[aàáâãäåāăą]',
  å: '[aàáâãäåāăą]',
  ā: '[aàáâãäåāăą]',
  ă: '[aàáâãäåāăą]',
  ą: '[aàáâãäåāăą]',
  æ: '[æ]',
  c: '[cçćč]',
  ç: '[cçćč]',
  ć: '[cçćč]',
  č: '[cçćč]',
  e: '[eèéêëēęě]',
  è: '[eèéêëēęě]',
  é: '[eèéêëēęě]',
  ê: '[eèéêëēęě]',
  ë: '[eèéêëēęě]',
  ē: '[eèéêëēęě]',
  ę: '[eèéêëēęě]',
  ě: '[eèéêëēęě]',
  g: '[gğ]',
  ğ: '[gğ]',
  i: '[iìíîïīĩįı]',
  ì: '[iìíîïīĩįı]',
  í: '[iìíîïīĩįı]',
  î: '[iìíîïīĩįı]',
  ï: '[iìíîïīĩįı]',
  ī: '[iìíîïīĩįı]',
  ĩ: '[iìíîïīĩįı]',
  į: '[iìíîïīĩįı]',
  ı: '[iìíîïīĩįı]',
  n: '[nñńň]',
  ñ: '[nñńň]',
  ń: '[nñńň]',
  ň: '[nñńň]',
  o: '[oòóôõöøōőœ]',
  ò: '[oòóôõöøōőœ]',
  ó: '[oòóôõöøōőœ]',
  ô: '[oòóôõöøōőœ]',
  õ: '[oòóôõöøōőœ]',
  ö: '[oòóôõöøōőœ]',
  ø: '[oòóôõöøōőœ]',
  ō: '[oòóôõöøōőœ]',
  ő: '[oòóôõöøōőœ]',
  œ: '[oòóôõöøōőœ]',
  s: '[sśš]',
  ś: '[sśš]',
  š: '[sśš]',
  u: '[uùúûüūůű]',
  ù: '[uùúûüūůű]',
  ú: '[uùúûüūůű]',
  û: '[uùúûüūůű]',
  ü: '[uùúûüūůű]',
  ū: '[uùúûüūůű]',
  ů: '[uùúûüūůű]',
  ű: '[uùúûüūůű]',
  y: '[yýÿ]',
  ý: '[yýÿ]',
  ÿ: '[yýÿ]',
  z: '[zżž]',
  ż: '[zżž]',
  ž: '[zżž]',
  d: '[dđ]',
  đ: '[dđ]',
  l: '[lł]',
  ł: '[lł]'
};
export const DIACRITICAL_LETTERS_KEY_STRING = `
  aàáâãäåāăąàáâãäåāăą
  cçćčçćč
  eèéêëēęěèéêëēęě
  gğgğ
  iìíîïīĩįıìíîïīĩįı
  nñńňnñńň
  oòóôõöøōőœòóôõöøōőœ
  sśšsśš
  uùúûüūůűùúûüūůű
  yýÿyýÿ
  zżžzżž
  dđdđ
  lłlł
`;
