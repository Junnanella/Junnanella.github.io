---
title: "SF Street Cleaning Notifications"
description: "Lorem ipsum dolor sit amet"
featured_image_on_page: True
featured_image: "/images/project_stills/sfstreetparking-still.jpg"
featured_gif: "/images/gifs/sfstreetparking.gif"
imageDescription: "Image of SF Street Cleaning home page"
repo: "Github Repository"
repo_link: "https://github.com/Junnanella/Street-Cleaning-Notifications"
deployed: "Deployed Site"
deployed_link: "http://www.sfstreetparking.com/"
tags: ["Typescript", "Html", "Courier", "CSS", "Express.js", "React", "Mailgun", "Twilio", "Heroku", "Node.js"]
weight: 1
draft: false
featured: true
orgStructure: "Team of 2"
role: "Backend Engineer in a team of 2. Integrated Courier and Twilio to send user notifications."
technology: "Micro-site, Express.js, Node.js"
industry: 
impact: "<insert>"
---

### About Application
As a San Franciscan that has to use street parking at their residence and works remotely, I can go days without moving my car, so it can be difficult to stay on top of when street cleaning is. This can result in unexpected citations, costing $85.00 each time. 

To counter this, we built a micro-site using ExpressJS and React that takes the user's inputs for the weekday and occurence of cleaning for the street they parked on. They are then provided with how many days are left before the next street cleaning. If the user chooses to subscribe, they will also receive this information via an initial notification via SMS or e-mail. With the subscription, the user will also receive a notification one-day before they need to move their car, as well as the day of.

*sfstreetparking.com is an entry for the  hackathon. It's non-commercial and we don't share your data with anyone.*

### Contributions

- Set up Mailgun and Twilio integrations with Courier API to send notifications to users via SMS and e-mail.
- Used date mathematics and Typescript to calculate the number of days until the next street cleaning based on the user's inputs.