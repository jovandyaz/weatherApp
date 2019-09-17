class Renderer {

    renderData(tmp, elm, allCityData) {
        const source = $(tmp).html()
        const template = Handlebars.compile(source)
        let newHTML = template({ allCityData })
        $(elm).empty().append(newHTML)
        console.log("renderData(allCityData):", allCityData)
    }
}

const renderer = new Renderer()

// class Renderer {
//     constructor(tmp, elm, data) {
//         this.tmp = tmp
//         this.elm = elm
//         this.data = data
//     }

//     renderData() {
//         let source = $(this.tmp).html()
//         let template = Handlebars.compile(source)
//         let newHTML = template(this.data)
//         $(this.elm).append(template(newHTML))
//         console.log("renderData:", this.data)
//     }
// }