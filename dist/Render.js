class Renderer {

    renderData(tmp, elm, allCityData) {
        const source = $(tmp).html()
        const template = Handlebars.compile(source)
        let newHTML = template({ allCityData })
        $(elm).append(newHTML)
        console.log("renderData(allCityData):", allCityData)
    }
}


