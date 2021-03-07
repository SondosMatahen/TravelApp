const dotenv = require('dotenv');
dotenv.config();

const express = require('express')

// Body paser middle wire
// cors for web communcation
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
// fetch is not defined in NodeJS; installed via npm 
const fetch = require('node-fetch');
const axios = require('axios');

app.use((cors()));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'))

console.log(__dirname)



// **Routs**
//get route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

let city, lat, lon, country;


// geonames ->route
const geoURL = 'http://api.geonames.org/searchJSON?q'
const user = process.env.USERNAME
console.log(`Your username for geonames is ${user}`);

app.post('/city', async function (req, res) {
    city = req.body.city;
    // fetch data from API's endpoint
    const fetchGeo = await axios.get(`${geoURL}=${city}&maxRows=1&username=${user}`)
        .then((data) => {
            // console.log('fetchGeo',data)
            let result = data.data;
            country = result.geonames[0].countryName;
            lat = result.geonames[0].lat;
            lon = result.geonames[0].lng;
            console.log('fetchGeo', lat, lon)
            res.send(result) // and send it to the client
        })

})


// weatherbit ->route
const weatherBaseURL = 'https://api.weatherbit.io/v2.0/forecast/daily?'
const weatherKey = process.env.key
console.log(`Your API key for weatherbit is ${weatherKey}`)

// POST sent from the client
app.post('/weather', async function (req, res) {
    const fetchWeather = await fetch(`${weatherBaseURL}&lat=${lat}&lon=${lon}&days=3&key=${weatherKey}`)
        .then(data => {
            data.json().then(result=>{
                res.send(result)
            })
        })
})


//pixabay
const pixabayBaseURL = 'https://pixabay.com/api/?'
const piKey = process.env.pixKEY
console.log(`Your API key for pixabay is ${piKey}`)

// to receive the POST sent from the client
app.post('/pic', async function (req, res) {

    //fetch the url with keyword
    try {
        const fetchPic1 = await fetch(`${pixabayBaseURL}key=${piKey}&q=${city}&image_type=photo&orientation=horizontal&per_page=3&pretty=true`)
            .then(data => {
                data.json()
                    .then(result => {
                        //console.log('result', result)
                        if (result.totalHits > 0) {
                            return res.send(result);
                        } else {
                            return res.send()
                        }
                    })
            })
    } catch (error) {
        console.log(error)
    }
    // try {
    //     const pic = await fetchPic1.json()

    //     //check if the image  exist 
    //     if (pic.totalHits > 0) {
    //         res.send(pic)
    //         console.log('Image found')
    //     } else {
    //         console.log(`No image found for the keyword: ${req.body.country}`)
    //         try {
    //             //looking for image related to countryName
    //             const fetchPic2 = await fetch(`${pixabayBaseURL}key=${piKey}&q=${country}&image_type=photo&orientation=horizontal&per_page=3&pretty=true`)
    //             const pic2 = await fetchPic2.json()
    //             res.send(pic2)
    //             console.log('Image found')
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // } catch (error) {
    //     console.log(error)
    // }
    // console.log(pic)

})


// Setup Server
const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

