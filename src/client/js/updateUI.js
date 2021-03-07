function updateUI(date, img, LatAndLon, weather) {
    console.log('up',date, img, LatAndLon, weather);
    return `
            <section id="img">
                <img src="${img.hits[0].webformatURL}" alt="">
            </section >

            <section id="two>
               <div id="dest">
                <p>Trip To:${LatAndLon.name}, ${LatAndLon.countryName} </p>
               </div>

               <div id="dates">
                <p>Dates: ${date.startDate} - ${date.endDate}</p>
               </div>

               <div id="forecast">
                <p> Weather Forecast:</p>
               </div>

               <div id="CardWeather">
                 <div id="card">
                    <p>${weather.data[0].datetime}</p>
                    <img src="../media/${weather.data[0].weather.icon}.png" alt="${weather.data[0].weather.description}">
                    <p>H:${weather.data[0].max_temp}° | L:${weather.data[0].min_temp}°</p>
                    <p">${weather.data[0].pop}%</p>
                 </div>
                 <div id="card">
                    <p>${weather.data[1].datetime}</p>
                    <img src="../media/${weather.data[1].weather.icon}.png" alt="${weather.data[1].weather.description}">
                    <p>H:${weather.data[1].max_temp}° | L:${weather.data[1].min_temp}°</p>
                    <p>${weather.data[1].pop}%</p>
                 </div>
                 <div id="card">
                    <p>${weather.data[2].datetime}</p>
                    <img src="../media/${weather.data[2].weather.icon}.png" alt="${weather.data[2].weather.description}">
                    <p>H:${weather.data[2].max_temp}° | L:${weather.data[2].min_temp}°</p>
                    <p>${weather.data[2].pop}%</p>
                 </div>
                </div>

            </section>
            `
 }


export { updateUI }