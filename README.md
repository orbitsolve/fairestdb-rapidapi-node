# Nodejs wrapper to call FaiRESTdb API using RapidAPI account
This code shows you how to call FaiRESTdb API endpoints from server code using your RapidAPI subscription. 

# Pre-requisites
1. Create your account with [RapidAPI](https://rapidapi.com) 
2. Subscribe [FaiRESTdb](https://rapidapi.com/orbitsolve/api/fairestdb)
    - It's free to use this API with a quota of 500 requests per month free.
3. Get your API-Key  
    - You can find API-Key from the Endpoints section or settings


# To run this code
    npm install
    npm run serve

## Configure API Key
You can create .env file and add your RapidAPI-Key as given below

    API_KEY="xxxx"

# Endpoints
Following are the endpoints to execute all functionalities of FaiRESTdb

Create database **library**

    POST: http://localhost:3000/_create-database
    Body: {
        "name": "library"
    }

Create Model **book** in **library**

    POST: http://localhost:3000/library/_create-model
    Body: {
        "title": "book",
        "type": "object",
        "properties": {
            "title": {
                "type": "string"
            },
            "author": {
                "type": "string"
            },
            "rating": {
                "type": "number"
            }
        }
    }

Add new Entity in **book**

    POST: http://localhost:3000/library/book
    Body: {
        "title": "A Promised Land",
        "author": "Barack Obama",
        "rating": 4.5
    }


Get all Databases

    GET: http://localhost:3000

Get all Models in **library**

    GET: http://localhost:3000/library
    
Get all Entities in **book**

    GET: http://localhost:3000/library/book

Get Entity by Id in **book**

    GET: http://localhost:3000/library/book/_id/book1610945692322

Update an existing Entity in **book**

    PUT: http://localhost:3000/library/book
    Body: {
        "_id": "book1610945692322",
        "title": "A Promised Land",
        "author": "Barack Obama",
        "rating": 4.8
    }

Delete an Entity by Id

    DELETE: http://localhost:3000/library/book/_id/book1610945692322

Delete Model **book**

    DELETE: http://localhost:3000/library/book

Delete Database **library**

    DELETE: http://localhost:3000/library
