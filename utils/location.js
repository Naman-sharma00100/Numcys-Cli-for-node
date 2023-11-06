// const { networkInterfaces } = require('os');
// const axios = require('axios')

// const interfaces = networkInterfaces();
// const ips = [];

// Object.keys(interfaces).forEach((iface) => {
//     interfaces[iface].forEach((addressInfo) => {
//         if (addressInfo.family === 'IPv4' && !addressInfo.internal) {
//             ips.push(addressInfo.address);
//         }
//     });
// });

// const getLocation = async () => {
//     try {
//       const ipAddress = ips[0];
//       if (ipAddress) {
//         const response = await axios.get(`https://ipinfo.io/${ipAddress}`);
//         const data = response.data;
//         return data.loc.split(',');
//       }
//     } catch (error) {
//       console.error('Error fetching location:', error);
//       return null;
//     }
//   };
  
// getLocation().then(coords => {
//     if (coords) {
//       return coords
//     } else {
//       console.log('Could not retrieve location.');
//     }
//   });