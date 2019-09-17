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

    saveCity() {
        /* sends a city's data as POST request to the /city post route on your server
        The method should take a parameter of cityName
        It should find that city's data object from the class' cityData array
        Then it should pass it as the body of the post request */
    }

    removeCity() {
        /* which sends a DELETE request to the /city delete route on your server
        The method should take a parameter of cityName */
    }
}
