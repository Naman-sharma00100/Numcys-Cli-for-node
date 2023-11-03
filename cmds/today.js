const ora = import('ora')
const getWeather = require('../utils/weather')
const getLocation = require('../utils/location')

module.exports = async (args) => {
    const spinner = ora.start

    try{
        const location = args.location || args.l 
        const weather = await getWeather(location)

        

        console.log(`Current conditions in ${location}:`)
        console.log(`\t${weather.current.temp_c}° ${weather.current.condition.text}`)
    }catch(err){
        

        console.log(err)
    }
}