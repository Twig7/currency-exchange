export default class Exchange {
  static async exchangeRate() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      return error;
    }
  }
}