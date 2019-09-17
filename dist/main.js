const dataTest = [{
    city: "Mexico City",
    condition: "Moderate or heavy rain shower",
    conditionPic: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0026_heavy_rain_showers_night.png",
    country: "Mexico",
    temperature: 22,
    updatedAt: "2019-09-16 22:42"
},
{
    city: "Moscow",
    condition: "Partly cloudy",
    conditionPic: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png",
    country: "Russia",
    temperature: 9,
    updatedAt: "2019-09-17 07:03",
}]



const input = document.getElementById("input")
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("button").click()
    }
})

const loadPage = async function () {
    tempManager.getDataFromDB()
    let input = $("#input").val()
    let dataDB = await $.get(`city/${input}`)
    renderer.renderData('#city-template', '.container', dataTest)
    console.log("loadPage: ", dataDB)
}

const handleSearch = function () {

}