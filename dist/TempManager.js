/*
YOUR MODEL - TempManager


Here's what should go inside your TempManager class:

An array of cityData. This will be empty to start with
A getDataFromDB method, which sends a GET request to the /cities route on your server
If any data comes back, set the class' cityData array equal to it
A getCityData method , which sends a GET request to the /city route on your server
This should have a parameter of cityName
This method needs to be async
When the data comes back, add an object to the class' cityData array. It should have these properties:
City name
Temperature
Conditions
Condition icon
time last updated
Any other data you fancy
A saveCity method, sends a city's data as POST request to the /city post route on your server
The method should take a parameter of cityName
It should find that city's data object from the class' cityData array
Then it should pass it as the body of the post request
A removeCity method, which sends a DELETE request to the /city delete route on your server
The method should take a parameter of cityName
*/