Simple Node Express API
Allows add/delete/query of 3 plant types.

Plant types leverage prototypes, this is building on the example lesson.

#Technology stack:
###Backend - written in JS
* Node JS
* Express JS
* Swagger - not implemented
* Database - SQLite3

Environment variables can be set in backend/.env
* APP_PORT - backend API port

To run backend

    cd into backend end dir and run
    node src/main.ts

Available endpoints

####GET
*localhost:3000/api/plant

*localhost:3000/api/shrub

*localhost:3000/api/tree

*localhost:3000/api/herb

###POST
*localhost:3000/api/shrub

*localhost:3000/api/tree

*localhost:3000/api/herb

    {
      "id": int, 
      "name": string, 
      "species": string, 
      "age": int, 
      "location": string, 
      "mood": string, 
      "remedy" : string <- IF Herb
      "swimStyle" : string <- IF Shrub
      "danceStyle": string <- IF Dance
    }   

#Below not implemented

###Frontend - written in TS
* Angular

##Nginx - might implement
*Used to serve static files

#Deployment options
###Docker
Spin up the whole project locally with Docker

    docker-compose up 

###Manual
Front end - cd into front end dir and run 
    
    npm run start 


