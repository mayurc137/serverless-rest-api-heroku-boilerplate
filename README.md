# Building Serverless RESTful Web APIs with Cloud Functions, Firestore, Express and JavaScript ES6

## Setup 
Install heroku cli

```
$ brew install heroku/brew/heroku
```

## Clone this repository

```
git clone git@github.com:mayurc137/serverless-rest-api-boilerplate.git .
```

## Install your dependencies 

```
npm install 
```

## Inititalise Git

```
$ git init
$ git add .
$ git commit -m "init"
```
 
## Create Heroku app

```
heroku create your-app-name
```

## Update your buildpack to heroku/nodejs
```
heroku buildpacks:set heroku/nodejs
```

## Deploy on Heroku

```
$ git push heroku master
```

## Run server

```
$ heroku ps:scale web=1
```

## Checking if server is up and running

```
$ heroku ps
```

## Api Endpoint URL
```
$ heroku open
```

## Test
http://your-app-name.herokuapp.com/


