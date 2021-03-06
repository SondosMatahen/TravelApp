function updateUI(date, img, LatAndLon, weather) {
    console.log('up',date, img, LatAndLon, weather);
    return `
            <div id="img">
                <img src="${img.hits[0].webformatURL}" alt="">
            </div >

            <div  id="divtwo">
            <div id="dest">
                <p>Trip To:${LatAndLon.city}, ${LatAndLon.country} </p>
            </div>
            <div id="dates">
                <p>Dates: ${date.startDate} - ${date.endDate}</p>
            </div>
            <div id="forecast">
                <p> Weather Forecast:</p>
            </div>

            <div id="CardWeather">
                <div id="card">
                    <div id="date">${weather.data[0].datetime}</div>
                    <div id="icon"><img src="../media/${weather.data[0].weather.icon}.png" alt="${weather.data[0].weather.description}"></div>
                    <div id="temp">H:${weather.data[0].max_temp}° | L:${weather.data[0].min_temp}°</div>
                    <div id="pop">${weather.data[0].pop}%</div>
                </div>
                <div id="card">
                    <div id="date">${weather.data[1].datetime}</div>
                    <div id="icon"><img src="../media/${weather.data[1].weather.icon}.png" alt="${weather.data[1].weather.description}"></div>
                    <div id="temp">H:${weather.data[1].max_temp}° | L:${weather.data[1].min_temp}°</div>
                    <div id="pop">${weather.data[1].pop}%</div>
                </div>
                <div id="card">
                    <div id="date">${weather.data[2].datetime}</div>
                    <div id="icon"><img src="../media/${weather.data[2].weather.icon}.png" alt="${weather.data[2].weather.description}"></div>
                    <div id="temp">H:${weather.data[2].max_temp}° | L:${weather.data[2].min_temp}°</div>
                    <div id="pop">${weather.data[2].pop}%</div>
                </div>
            </div>
            </div>
            `
 }


export { updateUI }