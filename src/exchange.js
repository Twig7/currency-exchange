export default class Exchange {
  static async exchangeRate() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/129122c745a5a4361f586ed0/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      return error;
    }
  }
}