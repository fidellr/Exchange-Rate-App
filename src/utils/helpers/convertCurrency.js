const convertCurrencyName = (name) => {
  switch (name) {
    case 'AUD':
      return 'Australian Dollar';
    case 'BGN':
      return 'Bulgarian Lev';
    case 'BRL':
      return 'Brazilian Real';
    case 'CAD':
      return 'Canadian Dollar';
    case 'CHF':
      return 'Swiss Franc';
    case 'CNY':
      return 'Chinese Yuan';
    case 'CZK':
      return 'Czech Koruna';
    case 'DKK':
      return 'Danish Krone';
    case 'EUR':
      return 'Euro';
    case 'GBP':
      return 'British Pound';
    case 'HKD':
      return 'Hong Kong Dollar';
    case 'HRK':
      return 'Croatian Kuna';
    case 'HUF':
      return 'Hungarian Forint';
    case 'IDR':
      return 'Indonesian Rupiah';
    case 'ILS':
      return 'Israeli New Shekel';
    case 'INR':
      return 'Indian Rupee';
    case 'ISK':
      return 'Icelandic Króna';
    case 'JPY':
      return 'Japanese Yen';
    case 'KRW':
      return 'South Korean Won';
    case 'MXN':
      return 'Mexican Peso';
    case 'MYR':
      return 'Malaysian Ringgit';
    case 'NOK':
      return 'Norwegian Krone';
    case 'NZD':
      return 'New Zealand Dollar';
    case 'PHP':
      return 'Philipine Peso';
    case 'PLN':
      return 'Polish Złoty';
    case 'RON':
      return 'Romanian Leu';
    case 'RUB':
      return 'Russian Ruble';
    case 'SEK':
      return 'Swedish Krona';
    case 'SGD':
      return 'Singapore Dollar';
    case 'THB':
      return 'Thai Baht';
    case 'TRY':
      return 'Turkish Lira';
    case 'USD':
      return 'United States Dollar';
    case 'ZAR':
      return 'South African Rand';
    default: return '';
  }
}

export {
  convertCurrencyName,
}