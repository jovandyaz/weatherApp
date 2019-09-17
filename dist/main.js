const tempManager = new TempManager()
const renderer = new Renderer()

//javascript (intro)
const inputIntro = document.getElementById("city-input")
inputIntro.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("button").click()
    }
})

const loadPage = async function () {
    await tempManager.getDataFromDB()
    renderer.renderData('#city-template', '.container', tempManager.cityData)
    console.log("loadPage(tempManager.cityData): ", tempManager.cityData)
}

const handleSearch = async function () {
    let inputCity = $("#city-input").val()
    let newCity = await tempManager.getCityData(inputCity)
    console.log("newCity", newCity)
    renderer.renderData('#city-template', '.container', [newCity])
}