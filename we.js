function search() {
    let place = cName.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`)
        .then((result) => {
            result.json()
                .then((obj) => {
                   displayData(obj)
                })
        })
}
function selsearch(placev) {
    let place = placev
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placev}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`)
        .then((result) => {
            result.json()
                .then((obj) => {
                   displayData(obj)
                })
        })
}
function displayData(data) {
    plcname.innerHTML = data.name
    let curFaren = data.main.temp
    let curCel = Math.floor(5 / 9 * (curFaren - 32));
    degree.innerHTML = `${curCel}&#176;`
    winds.innerHTML= `${data.wind.speed} km/h`
    humid.innerHTML= `${data.main.humidity} %`
    cloudper.innerHTML= `${data.clouds.all} %`
    weathstatus.innerHTML= `${data.weather[0].main}`
    countries.innerHTML = data.sys.country
    pressure.innerHTML = data.main.pressure


 if(data.weather[0].main=='Clear'){
    weaths.innerHTML=`<img src="./sun.png"  alt="icon" width="50" height="50">`
    document.getElementById("weather-app").style.backgroundImage="url('./sky.jpg')"
}
else{
    weaths.innerHTML=`<img src="./cloudy.png"  alt="icon" width="50" height="50">`
    document.getElementById("weather-app").style.backgroundImage="url('./clouds.jpg')"
}


}
