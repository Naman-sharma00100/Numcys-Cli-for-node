const getWeather = require('../utils/weatherforecast')
const getLocation = require('../utils/location')

module.exports = async (args) => {
  try {
    const location = args.location || args.l 
    const weather = await getWeather(location)

    console.log(`Forecast for ${location}:`)
    weather.forecast.forecastday.forEach(item =>
      console.log(`\t${item.date} - Low: ${item.day.mintemp_c}° | High: ${item.day.maxtemp_c}° | ${item.day.condition.text}`))
  } catch (err) {

    console.error(err)
  }
}