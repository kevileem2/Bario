import { BASE_URL } from './env'

/**
 * Helper function to get public ip
 */
const getPublicIp = async () => {
  try {
    const response = await fetch('https://api.ipify.org');
    const ip = response.text();
    return ip;
  } catch (e) {
    throw new Error(`No IP adress found.: ${e}`);
  }
};

/**
 * API configuration
 */
export const baseUrl = BASE_URL

/**
 * Fetch helper
 * @param {string} endpoint 
 */

export const useFetch = async endpoint => {
    try {
        const data = await fetch(baseUrl + endpoint).then(res => res.json())
        return data.data;
    } catch(e) {
        throw new Error(`Could not get data: ${e}`)
    }
}