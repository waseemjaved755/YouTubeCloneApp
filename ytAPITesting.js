const fetch = require('node-fetch');

const url = 'https://simple-youtube-search.p.rapidapi.com/search?query=never%2Bgonna%2Bgive%2Byou%2Bup&safesearch=false';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd07795fb2bmsh34913cfc8a8fa82p17b938jsn441bd594f91e',
    'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
  }
};
async function youtubeSearch()
{
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
youtubeSearch();