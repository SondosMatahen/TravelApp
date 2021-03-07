import axios from "axios";

const handleSubmit = async (event) => {

    event.preventDefault();
    // check what text was put into the form field
    let city = document.getElementById('city').value
    let startDate = document.getElementById('start').value
    let endDate = document.getElementById('end').value
    let today = new Date()
    let start = new Date(startDate)
    let end = new Date(endDate)
    // put dates in object 
    let dates = { startDate, endDate }

    // check if the user sumbit city values
    if (city === "") {
        alert('Please enter a city name.')
        return
    }

    // check if a user enter a valid date
    if (start < today || end < start) {
        alert('Invalid date: either you select past date as start date or set end date earlier than start date.')
        return
    }

    console.log("::: Form Submitted :::")

    // to make each fetched data be accessible from everywhere
    let LatAndLon = {}
    let receivedWeather = {}
    let receivedPic = {}

    const geo = await axios.post('http://localhost:8000/city', {city: city })
    .then(data => {
        console.log('dataaaaaa', LatAndLon);
        LatAndLon=data.data.geonames[0]
        console.log('LatAndLon', LatAndLon);
    })

    const weather = await axios.post('http://localhost:8000/weather')
    .then(data => {
        console.log('weather', data.data);
        receivedWeather=data.data;
    })

    const pic = await axios.post('http://localhost:8000/pic')
    .then(data => {
        console.log('pic', data.data);
        receivedPic=data.data;
    })


    const main = document.querySelector('main')
    const div = document.createElement('div')
    div.setAttribute('class', 'detailsPane')
    div.innerHTML = Client.updateUI(dates, receivedPic, LatAndLon, receivedWeather);
    main.appendChild(div);

}

export { handleSubmit }