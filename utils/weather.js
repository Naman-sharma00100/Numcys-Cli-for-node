const axios = require('axios')

// let config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+location+'.json?access_token=pk.eyJ1IjoibnVtY3lzIiwiYSI6ImNsb2lrOGlpejFwcXoyam12d3FrMno4dGwifQ.1-NFOTgiKMgKQx2HuvQx-w',
//     headers: { }
//   };
  
//   axios.request(config)
//   .then((response) => {

//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// latitude = response.data.features[0].center[0]
// longitude = response.data.features[0].center[1]


module.exports = async (location) => {
    const results = await axios({
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://api.weatherapi.com/v1/current.json?key=5c5310f66a7d4f6f8f1121218230311&q='+location+'&aqi=no',
        headers: { 
                'Content-Type': 'application/json'
            },
        
    })

    return results.data
}