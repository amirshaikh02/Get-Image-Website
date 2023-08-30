import React from 'react'
import axios from 'axios';


const API_URL= 'https://pixabay.com/api' ;
const API_KEY= '20259577-c93c75abc878a636931b34317';

const ApiKey =async(text,count)=> {
      try {
        return await axios.get(`${API_URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`);
        
      } catch (error) {
        console.log('error', error.message);
      }
    

}

export default ApiKey
