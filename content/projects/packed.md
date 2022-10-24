---
title: "Packed"
description: "Lorem ipsum dolor sit amet"
featured_image_on_page: True
featured_image: "/images/main_page.png"
imageDescription: "Image of packed home page"
repo: "Gitlab Repository"
repo_link: "https://gitlab.com/packed-module-3/packed"
deployed: "Deployed Site"
deployed_link: "https://packed-module-3.gitlab.io/packed/"
tags: ["Django", "React", "Python", "JavaScript", "PostgreSQL", "FastAPI", "Docker", "Django REST framework", "SimpleJWT auth", "Heroku"]
weight: 1
draft: false
featured: true
---

### About Application
Users input an origin city and country, destination city and country, as well as travel dates. They are presented with the following:

 - An empty packing list, which they can fill out with their own inputs and/or add catered item suggestions based on the anticipated weather of their destination and items on their previous lists. There are also suggestions for general items needed for any trip, like phone charger or passport.
- Expected temperatures of their desitination for the duration of their trip are provided from an external API.
- The current currency exchange rate between the origin country and destination country is provided from an external API call. The user can also change the input amount for the origin rate and get live updates with the amount in the destination's currency.

This web application uses JWTs stored in local storage to handle user authentication. Account holders can visit their saved packing lists and navigate to the detail page for each of them to view, print or make further updates.

### Contributions
- Led the design development for the front end of a Django/ React web application for a traveler to build and keep their packing lists in one spot.
- Built user-friendly interface with React and Bootstrap that takes user’s selected location and travel dates, then provides relevant weather and currency data through the integration of third-party APIs. 
- Implemented test-driven development to ensure that front end and back end work seamlessly 
