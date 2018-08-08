# Building Serverless RESTful Web APIs with Cloud Functions, Firestore, Express and JavaScript ES6

## Setup 
Install heroku cli

```
$ brew install heroku/brew/heroku
```

##Install your dependencies 

```
npm install 
```


##Inititalise Git

```
$ git init
$ git add .
$ git commit -m "init"
```

##Create Heroku app

```
heroku create your-app-name
```

##Deploy on Heroku

```
$ git push heroku master
```

##Run server

```
$ heroku ps:scale web=1
```

##Checking if server is up and running

```
$ heroku ps
```

##Api Endpoint URL
```
$ heroku open
```

###Test
http://your-app-name.herokuapp.com/


