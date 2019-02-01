import axios from 'axios';
import { EXCHANGE_RATE_API } from './constant';

export const fetchExchangeRate = (
  baseCurrency = 'USD',
) => {
  const resp = axios.get(`${EXCHANGE_RATE_API}?base=${baseCurrency.toUpperCase()}`);
  return resp;
}