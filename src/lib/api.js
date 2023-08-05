const axios = require("axios");

const api = [
  {
    apiKey: "70dd43d8391d38c534d1b2cf515ffee7",
    auth: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGRkNDNkODM5MWQzOGM1MzRkMWIyY2Y1MTVmZmVlNyIsInN1YiI6IjY0Y2UyYmJjNGQ2NzkxMDBhY2YwMmQ4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7Wklv2nYhOQMI4McD2udii48w9TQ3ksS7MH2ZwnjQw",
    username: "pardeepkumar",
    email: "19bcs1896@gmail.com",
    password: "akm12345",
  },
];

const request = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {},
  params: {
    api_key: api[0].apiKey,
  },
});

export default request;
