# mr_dog

## Description

Web app for pet owners who want to find pet friendy places so they can do their daily routine with their pet.
 
 ## User Stories

 - **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
 - **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
 - **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
 - **sign up** - As a user I want to sign up on the webpage so that I can see all the pet friendly places that I could attend or offer
 - **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
 - **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
 - **places create** - As a user I want to create a new pet friendly place so that I can offer others to attend 
 - **places list** - As a user I want to see all the places available so that I can choose which ones I want to attend
 - **places detail** - As a user I want to see more information regarding one place so that I can decide if I want to attend 


## Backlog

List of other features outside of the MVPs scope

User profile:
- see my profile
- list of my favorites stores
- list of stores created by the user
- list stores the user have attend

Store Location
- add geolocation to stores when creating
- show store in a map in store detail page
- show a carrusel of pictures in store detail page
- show all stores in a map in the store list page


## ROUTES:
```

## INDEX
GET / --> Show the list of available places types

## AUTH
GET /auth/signup
POST auth/signup - POST Body: username, password
GET /auth/login
POST /auth/login - POST Body: username, password
POST auth/logout - POST Body: nothing

## PLACES
GET /places?type=type_of_place  --> List all the places of a certain type
GET /places/:id --> show a place
GET /places/new --> show the form for adding a new place
POST /places --> Add the place

## PROFILE
GET /profile --> Show the profile of the current user
GET /profile/edit

```

## MODELS

```
Places
 - name: 
    type: String, 
    required:true
 - type:
    type: String,
    enum:['bar', 'accomodation','store', 'beach']
 - description: 
    type: String, 
    required: true
 - location:
    type: String, 
    required: true
 - imgUrl: 
    type: String, 
    default: 'images/dog-default.jpg' 
```    
 
```
User
 - username:
    type: String, 
    required: true
 - email: 
    type: String,
    required: true
 - password:
    type: String,
    required: true
 - favorites:
    type: ObjectId,
    ref: 'Places'
 - myplaces:
    type: ObjectId,
    ref: 'Places'
```

## Links

### Trello

https://trello.com/b/JJ6SkRli/mrdog

### Git

The url to your repository and to your deployed project

http://github.com/CaballeroLaporta/mr_dog

[Deploy Link](http://heroku.com)

### Slides.com

The url to your presentation slides

[Slides Link](http://slides.com)
