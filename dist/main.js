/*
YOUR CONTROLLER - MAIN.JS


Your controller should have the following:

A loadPage function, which should render any saved data
It should call getDataFromDB from an instance of your TempManager
It should then render the city data from your TempManager
This function should run when the page loads
A handleSearch function, which should call to the server and render new weather data
It should take the city-input from your html
It should call the getCityData method from an instance of your TempManager, and send the city-input as the parameter
It should then render the data you get back from the server
This function needs to be async to work
An on click for your search button, which calls your handleSearch function as it's callback function
An on click for each of the save buttons that:
Takes the name of the city from the DOM
Calls the saveCity method from an instance of the TempManager, sending the cityName as a parameter
An on click for each of the remove buttons that:
Takes the name of the city from the DOM
Calls the removeCity method from an instance of the TempManager, sending the cityName as a parameter
*/

$.get('/city/:cityName')