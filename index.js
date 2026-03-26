// const axios = require('axios');

// const apiKey = '78440dc2c43cba6e2ca0e18ffddca0c4';
// const audioUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

// async function recognizeSong() {
//   try {
//     const response = await axios.post('https://api.audd.io/', null, {
//       params: { api_token: apiKey, url: audioUrl }
//     });

//     console.log('Song info:', response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// recognizeSong();
console.log("Starting script...");

async function recognizeSong() {
  try {
    console.log("Calling API...");
    const response = await axios.post('https://api.audd.io/', null, {
      params: { api_token: apiKey, url: audioUrl }
    });
    console.log("API responded!");
    console.log('Song info:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

recognizeSong();