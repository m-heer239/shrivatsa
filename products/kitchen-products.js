const queryString = window.location.search;
            
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('products');

import data from './data.json' assert { type: 'json' };
console.log(data);