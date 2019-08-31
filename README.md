# Backend-Music-App

![](https://img.shields.io/badge/Dependencies-Express-green.svg)

<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>


## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.  

## Installation
### Clone
```
$ git clone https://github.com/Khusnijafar/Backend-Music-App.git
$ cd musicgameserver
$ npm install
```

### Create Environment Variable
```
$ touch .env
```
Fill in the code below into .env file
```
DB_HOST="Your_Host"
DB_USER="Your_Username"
DB_PASS="Your_Password"
DB_NAME="Your_Table"


SECRET_KEY = "Your_key"
REQUEST_HEADERS = "Your_headers"

```
### Start Development Server
```
$ npm install
```
```
$ npm i nodemon
```
```
$ npm start
```

 ## Routes
  
### User Routes

   - ` / ` -> index of main REST

  
 ### PATCH Method for updating data
    
    - ` /:id_user`

 ### POST Method for inserting data

    - ` / `

 ### DELETE Method for deleting data

    - ` /:id_user `


### License
----

© [Khusni Jafar](https://github.com/Khusnijafar)
