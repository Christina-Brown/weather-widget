# Weather Widget

The widget uses geolocation if enabled to show you your current weather in your location.
if not enabled it defaults to London weather
You can type in any city to receive the weather for that city and you can specify a country code after if the city name occurs in other countries (eg "London, CA" or "London, GB")

It has been deployed on Heroku at:
[https://weather-widget.herokuapp.com/](https://weather-widget.herokuapp.com/)

The widget is currently at full size as I took widget to mean a small app that another website could render in an iframe etc
But it could easily be made smaller if not embedding it and instead just having it as a component within the app by adjusting the width and height of the app class.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `yarn` installed globally on your machine.

Installation:

`yarn install`

To Run Test Suite:

`yarn test`

To Start Server:

`yarn start`

To Visit App:

`localhost:3000/`

## What I would do given more time:

I would've liked to have implemented a dynamic background that changed based on the time. The assets (royalty free from Adobe Stock) are there for that purpose as is the getTime function but I didn't have enough time to implement it. I would've used the getTime to check if time was before midday, after midday, after evening etc to assign a class name to choose the background.

The temp and other weather data could easily be added to the 5 day forecast to add more information. The time could be added too by using my getTime function
I think having the forecast rail with an open close for the current weather data could have been cool if I had more time
I also would've liked to have added more tests to functionality.

The geolocation takes a while to either succeed or fail and call the default
