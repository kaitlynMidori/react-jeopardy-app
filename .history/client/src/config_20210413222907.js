// export default {
//     API_ENDPOINT: 'https://susans-jeopardy-app.herokuapp.com/api'
//   }
  const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://susans-jeopardy-app.herokuapp.com/api'
    : 'http://localhost:5000';