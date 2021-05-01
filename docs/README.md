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
 `GET` | /table/:id | Returns a single table and its associated order.
 `POST` | /table/:id | Creates a new table.
 `PUT` | /table/:id | Updates a table.
 `DELETE` | /table/:id | Deletes a table.



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

GET`http://localhost:3000/table:id`<br><br>

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

POST`http://site.com/table/:id`<br><br>

Data | Key | Type
---- | --- | ----
Table number | `"id"` | int

> Returns the ID of the new table to confirm its creation

### Update Table

PUT`http://site.com/table/:id`<br><br>

Data | Key | Type
---- | --- | ----
Table number | `"id"` | int

> Returns the new table ID to confirm its creation

### Delete Table

DELETE`http://site.com/table/:id`<br><br>

Data | Key | Type
---- | --- | ----
Table number | `"id"` | int

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









### Create Menu

POST `http://site.com/menu/`<br><br>
 
Data | Key | Type
---- | --- | ----
Food | `"foodItem"` | food Object
Drinks | `"drinkItem"` | drink Object 

> Returns #####

### Get ALL Menus

GET`http://site.com/menus`

### Get Menu
GET`http://site.com/menu/<menuId>`<br><br>
 
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
### Update Menu
PUT`http://site.com/menu/<menuId>`<br><br>

### Delete Menu
DELETE`http://site.com/menu/<menuId>`<br><br>

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