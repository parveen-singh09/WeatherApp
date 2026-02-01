const apikey = "96ea9ec16a1c529ae31d1f8402a7b927";
const apiurl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;
const searchbox = document.querySelector(".search input");
const btn = document.querySelector(".search button");
async function check(city){

    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

}
btn.addEventListener("click", ()=>{
    const val = searchbox.value;
    check(val);
})