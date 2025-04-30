let input = document.getElementById('input')
let btn = document.getElementById('btn')
let cname = document.getElementById('name')
let temp = document.getElementById('temp')
let lat = document.getElementById('lat')
let time = document.getElementById('time')

async function getData(cityName){    
    const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=e4a23b73add04f2c97042140240711&q=${cityName}&aqi=yes`)
    
    const data = await result.json()
    console.log(data)

    cname.innerText += data.location.name
    time.innerText += data.location.localtime
    lat.innerText += data.location.lat
    temp.innerText += data.current.temp_c;
}

btn.addEventListener('click', function(){
    const city = input.value

    getData(city);
})