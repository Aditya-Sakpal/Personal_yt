import React from "react";
import axios from "axios";
// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://youtube138.p.rapidapi.com/auto-complete/',
//   params: {
//     q: 'cars',
//     hl: 'en',
//     gl: 'US'
//   },
//   headers: {
//     'content-type': 'application/octet-stream',
//     'X-RapidAPI-Key': '3681c8f3efmsh11ac6209d59afacp12ec74jsne596c49207ec',
//     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//   }
// };
export const fetchDataFromApi = async(query)=>{

  const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/search/?q=',
    params: {
      q: `${query}`,
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'f557096a20msh93122ad4c507b84p16535cjsnaef54371e7cc',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

try {
	const response = await axios.request(options);
	// console.log(response.data);

  return response.data;
} catch (error) {
	console.error(error);
}
}



const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
            process.env.REACT_APP_YOUTUBE_API_KEY || "YOUR_API_KEY",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchVideoDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};

