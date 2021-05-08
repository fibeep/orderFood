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
 `GET` | /tables/:number | Returns a single table and its associated order.
 `POST` | /tables/:number | Creates a new table.
 `PUT` | /tables/:number | Updates a table.
 `DELETE` | /tables/:number | Deletes a table.



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

> Returns deletion message as well as (now deleted) table number



## Orders

In order for a restaurant to properly serve its customers, it must record its customers' orders and associate them with a table. The orders endpoint will convey the table as well as the items that guests order.

### Endpoints

 Request | Endpoint | Description
 ----------- | ----------- | -----------
 `GET` | /orders | Returns a list of all the orders and their tables.
 `GET` | /order/:id | Returns a single order and its associated table.
 `POST` | /order/:number | Creates a new order for a given table.
 `PUT` | /order/:number | Updates an order.
 `DELETE` | /order/:number | Deletes an order.


### View ALL orders

GET`http://localhost:3000/orders`<br><br>

```javascript
Response: Success (200)
{ 
    "order": 
        {
        "table": "2", 
        "drink": ["water", "coke"], 
        "food": ["chicken"]
        },    
}
```

### View ONE specific orders

GET`http://localhost:3000/orders/:id`<br><br>

*> id is the order's id*

```javascript
Response: Success (200)
{ 
    "order": 
        {
        "table": "2", 
        "drink": ["water", "coke"], 
        "food": ["chicken"]
        },    
}
```


### Create Order

POST `http://localhost:3000/orders/:number`<br><br>
 
*> the number is the number of the table associated
with the order*

Data | Key | Type
---- | --- | ----
Food | `"food"` | string
Drinks | `"drink"` | string


> Returns the items in the order, as well as the table to ensure its creation.

### Update Order

PUT `http://localhost:3000/order/:number`<br><br>
 
*> the number is the number of the table associated
with the order*

Data | Key | Type
---- | --- | ----
Food | `"food"` | string
Drinks | `"drink"` | string

> Returns the new items in the order, as well as the table to ensure its creation.

### Delete Order

DELETE `http://localhost:3000/order/:number`<br><br>
 
*> the number is the number of the table associated
with the order*

Data | Key | Type
---- | --- | ----
Table number | `"number"` | str

> Returns deletion message as well as (now deleted) table number

# Coming Soon

## Food and Drink Items

TBD


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
