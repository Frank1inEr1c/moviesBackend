const request = require('request');

class OmdbService {
  constructor() {
    this.apiKey = process.env.API_KEY;
  }

  async searchMovies(query) {
    const url = `https://www.omdbapi.com/?i=${query}&apikey=${this.apiKey}`;
    const response = await request.get(url);
    const data = await response.json();
    return data;
  }
}

module.exports = OmdbService;