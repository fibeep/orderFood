# Order Food (OF)
[Click to visit the site.](https://www.google.com/)
<br>
`OrderFood` is an api built to speed up food ordering in restaurants.
<br>

>When going to a restaurant, most customers face the same issue: they want to order food, and the waiter/tress is nowhere to be seen. With Order Food, customers will be able to quickly relay their orders to the kitchen!
 
 
# Data

## Tables

### View Table Status + Order

GET`http://site.com/table/view/<tableId>`<br><br>
 
Data | Key | Type
---- | --- | ----
Table number | `"tableId"` | int
Awaiting Food | `"awaiting"` | boolean 
Order | `"order"` | Order Object
 

```javascript
Response:
{ 
    "table": [
        {
        "tableId": "2", 
        "awaiting": "False", 
        "order": [
            ###
            ###
            ###
        ]
        },
    ]
}
```

### Create New Table

POST`http://site.com/table/new/<tableId>`<br><br>

Data | Key | Type
---- | --- | ----
Table number | `"tableId"` | int

> Returns the ID of the new table to confirm its creation

## Menus

### Create Menu

POST `http://site.com/menu/new`<br><br>
 
Data | Key | Type
---- | --- | ----
Food | `"foodItem"` | food Object
Drinks | `"drinkItem"` | drink Object 

> Returns #####

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

## Food and Drink Items

TBD