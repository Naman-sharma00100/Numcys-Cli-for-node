const axios = require('axios');

module.exports = async (location) => {
    const results = await axios({
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://api.weatherapi.com/v1/forecast.json?key=5c5310f66a7d4f6f8f1121218230311&q=London&days=5&aqi=no&alerts=no',
        headers: { 
                'Content-Type': 'application/json'
            }
    })

    return results.data
}