const express = require('express')
const router = express.Router()
const request = require('request')
const axios = require('axios')
const City = require('../models/City')

/*
A get route to /city
This route should take a cityName parameter
This should be the route that makes a calls to your external API
A get route to /cities
This route should find all of the city data saved in your DB, and send it to the client
A post route to /city
This route should take some data from the body, and save it as a new City to your DB
A delete route to /city
This route should take a cityName parameter
This route should find the city's data in your DB and remove it from your DB
*/


// router.get('/city/:cityName', (req, res) => {
//     url = 'http://api.weatherstack.com/current'
//     key = '0c8851258f930371ab58bdc125e0bd8c'
//     city = req.params.cityName
//     request(`${url}?access_key=${key}&query=${city}`, function (error, resp, body) {
//         const data = JSON.parse(body)
//         console.log(data.current.temperature)
//         res.send(data)
//     })
// })

router.get('/city/:cityName', (req, res) => {
    const params = {
        access_key: '0c8851258f930371ab58bdc125e0bd8c',
        query: req.params.cityName
    }
    axios.get('http://api.weatherstack.com/current', { params })
        .then(resp => {
            const wData = resp.data
            //console.log(wData)
            console.log(`Current temparture in ${wData.location.name} is ${wData.current.temperature}ºC`)

            // const city = new City({
            //     updatedAt: wData.location.localtime,
            //     temperature: wData.current.temperature,
            //     condition: wData.current.weather_descriptions[0],
            //     conditionPic: wData.current.weather_icons[0]
            // })
            // city.save()
            exports = wData

            res.send(wData)
        }).catch(error => {
            console.log(error)
        })
})

router.get('/cities', (req, res) => {
    console.log("wData", wData)
})

router.post('/city', (req, res) => {

})

router.delete('/city/:cityName', (req, res) => {

})

module.exports = router