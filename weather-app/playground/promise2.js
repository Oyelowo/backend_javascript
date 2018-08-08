const request = require('request');

let geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address)
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAr1xwsViJwAjAwTEMIjxbCRjdg-6LkEdw`,
            json: true
        }, (error, response, body) => {

            if (error) {
                reject('unable to connect to google servers');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('unable to find the address. Recheck and try again');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            }
        })


    });
}

geocodeAddress('helsinki').then((location) => {
    console.log(JSON.stringify(location, null, 2))
}, (errorMessage) => {
    console.log(errorMessage);
})