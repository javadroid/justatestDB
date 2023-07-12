axios.interceptors.request.use(config => {
  config.timeout = 5000; // Wait for 5 seconds before timing out
  return config;
});
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
      console.log('Request timed out');
    }
    return Promise.reject(error);
  }
);
axios.get('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', {
  headers: {
    'X-RapidAPI-Key': 'your-rapid-api-key',
    'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
  }
})
.then(response => console.log(response.data))
.catch(error => console.log(error));