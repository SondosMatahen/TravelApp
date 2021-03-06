const handleSubmit = async (event) => {

    event.preventDefault();
    // check what text was put into the form field
    let city = document.getElementById('city').value
    let startDate = document.getElementById('start').value
    let endDate = document.getElementById('end').value
    let today = new Date()
    let tripStart = new Date(startDate)
    let tripEnd = new Date(endDate)
    let diffInTime = tripStart.getTime() - today.getTime()
    // rounded up to the nearest integer 
    let diffInDays = Math.round(diffInTime / (1000 * 3600 * 24))
    // put dates in object to be accessible from everywhere
    let dates = { startDate, endDate, diffInDays }

    // check if the user sumbit city values
    if (city === "") {
        alert('Please enter a city name.')
        return
    }

    // check if a user enter a valid date
    if (tripStart < today || tripEnd < tripStart) {
        alert('Invalid date: either you select past date as start date or set end date earlier than start date.')
        return
    }

    console.log("::: Form Submitted :::")

    // to make each fetched data be accessible from everywhere
    let LatAndLon = {}
    let receivedWeather = {}
    let receivedPic = {}

    console.log('Fetching geonames:', { city: city });

    // get the response geo
    const resGeo = await fetch('http://localhost:8000/city', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city: city })
    });
    try {
        const receivedGeo = await resGeo.json(); // receive res from the server side and transform into json
        LatAndLon = {
            city: receivedGeo.geonames[0].name,
            country: receivedGeo.geonames[0].countryName,
            lat: receivedGeo.geonames[0].lat,
            lon: receivedGeo.geonames[0].lng
        }
        console.log('Data received from geonames:', LatAndLon)
    } catch (error) {
        console.log('error', error);
    }

    console.log('Fetching weatherbit:', { LatAndLon });

    // get the response lat and lon
    const resWeather = await fetch('http://localhost:8000/weather', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(LatAndLon)
    });
    try {
        receivedWeather = await resWeather.json();
        console.log('Data received from weatherbit:', receivedWeather)

    } catch (error) {
        console.log('error', error);
    }

    console.log('Fetching  pixabay:', { LatAndLon });

    // get the response image
    const resPic = await fetch('http://localhost:8000/pic', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(LatAndLon)
    });
    try {
        receivedPic = await resPic.json();
        console.log('Data received from pixabay:', receivedPic)
    } catch (error) {
        console.log('error', error);
    }

    const main = document.querySelector('main')
    const div = document.createElement('div')
    div.setAttribute('class', 'detailsPane')
    div.innerHTML = Client.updateUI(dates, receivedPic, LatAndLon, receivedWeather);
    main.appendChild(div);

}

export { handleSubmit }