
const express = require('express')
const router = express.Router()
const request = require('request')
const axios = require('axios')
const City = require('../models/City')

router.get('/city/:cityName', function (req, res) {
    const urlApi = 'http://api.weatherstack.com/current'
    const params = {
        access_key: '0c8851258f930371ab58bdc125e0bd8c',
        query: req.params.cityName
    }
    axios.get(urlApi, { params })
        .then(resp => {
            const wData = resp.data
            console.log(`Current temparture in ${wData.location.name} is ${wData.current.temperature}ºC`)
            const cityData = {
                city: wData.location.name,
                country: wData.location.country,
                updatedAt: wData.location.localtime,
                temperature: wData.current.temperature,
                condition: wData.current.weather_descriptions[0],
                conditionPic: wData.current.weather_icons[0]
            }
            res.send(cityData)
        }).catch(error => {
            console.log(error)
        })
})

router.get('/cities', function (req, res) {
    City.find({}, function (err, resp) {
        console.log("citiesCollection:\n", resp)
        res.send(resp)
    })
})

router.post('/city', function (req, res) {
    console.log("req.body:", req.body)
    const wCity = new City(req.body)
    wCity.save()
    res.send("POST COMPLETE")
})

router.delete('/city/:cityName', function (req, res) {
    cityN = req.params.cityName
    console.log("cityN:", req.params.cityName)
    City.deleteOne({
        city: cityN
    }, function (err, res) {
        console.log(res)
    })
    res.send("DELETE COMPLETE")
})

module.exports = router