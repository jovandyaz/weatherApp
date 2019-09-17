class TempManager {
    constructor() {
        this.cityData = []
    }

    async getDataFromDB() {
        let cities = await $.get('/cities')
        this.cityData = cities
        console.log("getDataFromDB...get/cities", cities)
    }

    async getCityData(cityName) {
        let newCity = await $.get(`/city/${cityName}`)
        this.cityData.push(newCity)
        console.log("this.cityData:", this.cityData)
        return newCity
    }

    saveCity(cityName) {
        console.log("saveCity(cityName)", cityName)
        this.cityData.forEach(c => {
            if (c.city == cityName) {
                $.post('/city', c, function (response) {
                    console.log("saveCity(c):", c)
                    console.log("response", response)
                })
            }
        })
    }

    removeCity(cityName) {
        console.log("removeCity(cityName)", cityName)
        $.ajax({
            url: `/city/${cityName}`,
            method: "DELETE",
            success: function (response) {
                console.log("removeCity(cityName)", cityName)
                console.log("response", response)
                loadPage()
            }
        })
    }
}
