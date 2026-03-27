const axios = require('axios');

async function getGithubUser(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
}
getGithubUser('dhruvikp').then(user => console.log(user));