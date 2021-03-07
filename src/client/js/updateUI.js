function updateUI(date, img, LatAndLon, weather) {
    console.log('up',date, img, LatAndLon, weather);
    return `
            <section id="img">
                <img src="${img.hits[0].webformatURL}" alt="">
            </section >

            <section id="two>
              <div id="det">
               <p>Trip To:${LatAndLon.name}, ${LatAndLon.countryName} </p>
               <p>Dates: ${date.startDate} - ${date.endDate}</p>
               <p> Weather for this trip</p>
              </div>

               <div id="CardWeather">
                 <div >
                    <p>${weather.data[0].datetime}</p>
                    <img src="../media/${weather.data[0].weather.icon}.png">
                    <p>H:${weather.data[0].max_temp}° & L:${weather.data[0].min_temp}°</p>
                    <p">precipitation:${weather.data[0].pop}%</p>
                 </div>
                 <div >
                    <p>${weather.data[1].datetime}</p>
                    <img src="../media/${weather.data[1].weather.icon}.png">
                    <p>H:${weather.data[1].max_temp}° & L:${weather.data[1].min_temp}°</p>
                    <p>precipitation:${weather.data[1].pop}%</p>
                 </div>
                 <div >
                    <p>${weather.data[2].datetime}</p>
                    <img src="../media/${weather.data[2].weather.icon}.png">
                    <p>H:${weather.data[2].max_temp}° & L:${weather.data[2].min_temp}°</p>
                    <p>precipitation:${weather.data[2].pop}%</p>
                 </div>
                </div>

            </section>
            `
 }


export { updateUI }