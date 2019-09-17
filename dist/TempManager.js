class TempManager {
    constructor() {
        this.cityData = []
    }

    getDataFromDB() {
        $.get('/cities', function (err, res) {
            console.log("getDataFromDB...get/cities", res)
            this.cityData = res
        })
        /*which sends a GET request to the /cities route on your server
        If any data comes back, set the class' cityData array equal to it*/
    }

    getCityData() {
        /* which sends a GET request to the /city route on your server
        This should have a parameter of cityName
        This method needs to be async
        When the data comes back, add an object to the class' cityData array. It should have these properties:
        City name
        Temperature
        Conditions
        Condition icon
        time last updated
        Any other data you fancy*/

        $.get('/city/:cityData')
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

const tempManager = new TempManager()



// class Image {
//     constructor(url, width, height, db) {
//         this.url = url
//         this.width = width || 150
//         this.height = height || 150
//         this.db = db
//     }

//     save() {
//         this.db.save(JSON.stringify(this))
//     }
// }

// class SQL_DB {
//     constructor() { }
//     save(str) {
//         //wicked code that saves to SQL database
//     }
// }

// class Mongo_DB {
//     constructor() { }
//     save(str) {
//         //wicked code that saves to Mongo database
//     }
// }

// const sqlDB = new SQL_DB()
// const mongoDB = new Mongo_DB()
// const pic = new Image("https://a3.amazon.com/93112/ist.png", null, null, sqlDB)

// pic.save()