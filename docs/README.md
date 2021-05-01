# Order Food (OF)
[Click to visit the site.](https://www.google.com/)
<br>
`OrderFood` is an api built to speed up food ordering in restaurants.
<br>

>When going to a restaurant, most customers face the same issue: they want to order food, and the waiter/tress is nowhere to be seen. With Order Food, customers will be able to quickly relay their orders to the kitchen!
 
 
# Data

## Tables

Tables are the center-piece of restaurants, they allow the staff to place orders and have a reference point as to where they should bring an order once it's done cooking. In this API, the tables endpoint will convey the location of the table as well as the order associated with it.

### Endpoints

 Request | Endpoint | Description
 ----------- | ----------- | -----------
 `GET` | /tables | Returns a list of all the tables and their orders.
 `GET` | /tables/:id | Returns a single table and its associated order.
 `POST` | /tables/:id | Creates a new table.
 `PUT` | /tables/:id | Updates a table.
 `DELETE` | /tables/:id | Deletes a table.



### View ALL Tables

GET`http://localhost:3000/tables`<br><br>

```javascript
Response: Success (200)
{ 
    "table": 
        {
        "tableId": "2", 
        "awaiting": "False", 
        "order": [
            ###
            ###
            ### ]
        
        },
    "table": 
        {
        "tableId": "3", 
        "awaiting": "True", 
        "order": [
            ###
            ###
            ### ]
        
        },
    
}
```

### View Table Status + Order

GET`http://localhost:3000/table/:number`<br><br>

*> number is the STRING that indicates the table's number.*

```javascript
Response: Success (200)
{ 
    "table": 
        {
        "tableId": "2", 
        "awaiting": "False", 
        "order": [
            ###
            ###
            ###
        ]
        }
}
```

### Create New Table

POST`http://localhost:3000/table/:number`<br><br>

Data | Key | Type
---- | --- | ----
Table number | `"number"` | str

> Returns the number of the new table to confirm its creation

### Update Table

PUT`http://localhost:3000/table/:number`<br><br>

*> number is the STRING that indicates the table's number.*

Data | Key | Type
---- | --- | ----
Table number | `"number"` | str

> Returns the new table number to confirm its creation

### Delete Table

DELETE`http://localhost:3000/table/:number`<br><br>

Data | Key | Type
---- | --- | ----
Table number | `"number"` | str

> Returns "Table Deleted"

## Menus


Menus allow the customers to look for what they want to consume inside the restaurant - whether it be food or drinks; as well as the description and price of said items.

### Endpoints

 Request | Endpoint | Description
 ----------- | ----------- | -----------
 `GET` | /menus | Returns a list of all the menus
 `GET` | /menu/:name | Returns a single menu.
 `POST` | /menu/:name | Creates a new menu.
 `PUT` | /menu/:name| Updates the name of a menu.
 `PUT` | /menu/:name/add| Allows for the addition of new items into a pre-existing menu.
 `DELETE` | /menu/:name | Deletes a menu.



### View ALL Menus

GET`http://localhost:3000/menus`<br><br>

```javascript
Response: Success (200)
{ 
    "menu": 
        {
        "name": "Breakfast", 
        "drinks": [
            {"Water", 2},
            {"Orange Juice", 3}
        ], 
        "food":  [
            {"Chicken", 2},
            {"Meat", 3}
        ]
        },
    "menu": 
        {
        "name": "Lunch", 
        "drinks": [
            {"Water", 2},
            {"Orange Juice", 3}
        ], 
        "food":  [
            {"Chicken", 2},
            {"Meat", 3}
        ]
        },
    
}
```
### View ONE Menu

GET`http://localhost:3000/menu/:name`<br><br>

*> name is the unique STRING that identifies a menu in the database.*

```javascript
Response: Success (200)
{ 
    "menu": 
        {
        "name": "Breakfast", 
        "drinks": [
            {"Water", 2},
            {"Orange Juice", 3}
        ], 
        "food":  [
            {"Chicken", 2},
            {"Meat", 3}
        ]
        }
}
```

### Create Menu

POST `http://site.com/menu/`<br><br>
 
Data | Key | Type
---- | --- | ----
Name | `"name"` | str
Food | `"food"` | NOT SURE YET
Drinks | `"drinks"` | NOT SURE YET 

> Returns NOT SURE YET

### Update Menu

PUT `http://localhost:3000/menu/`<br><br>
 
Data | Key | Type
---- | --- | ----
Name | `"name"` | str
Food | `"food"` | NOT SURE YET
Drinks | `"drinks"` | NOT SURE YET 

> Returns NOT SURE YET


### Delete Menu
DELETE`http://localhost:3000/menu/:name`<br><br>
*> name is the unique STRING that identifies a menu in the database.*


## Orders

### Create Order

POST `http://site.com/order/new`<br><br>
 
Data | Key | Type
---- | --- | ----
Food | `"foodItem"` | food Object
Drinks | `"drinkItem"` | drink Object 

> Returns #####

### Get Order
GET`http://site.com/<tableId>/order`<br><br>
 
Data | Key | Type
---- | --- | ----
Food Item | `"foodItems"` | array of food Object
Drink Item | `"drinkItems"` | array of drink Object 

 

```javascript
Response:
{ 
    "menu": [
        {
        "foodItems": [
            "foodItem" : ("Chicken", 3.75),
            "foodItem" : ("Meat", 4.75)
        ],
        "drinkItems" : [
            "drinkItem" : ("Coke", 2),
            "drinkItem" : ("Water", 1)
        ]
        },
    ]
}
```
### Get ALL orders

GET`http://site.com/<tableId>/orders`<br><br>

TBD INFO

## Food and Drink Items

TBD