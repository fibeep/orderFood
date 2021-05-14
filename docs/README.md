# Order Food (OF)

[Click to visit the site.](https://www.google.com/)
<br>
`OrderFood` is an api built to speed up food ordering in restaurants.
<br>

> When going to a restaurant, most customers face the same issue: they want to order food, and the waiter/tress is nowhere to be seen. With Order Food, customers will be able to quickly relay their orders to the kitchen!

# Data

## Tables

Tables are the center-piece of restaurants, they allow the staff to place orders and have a reference point as to where they should bring an order once it's done cooking. In this API, the tables endpoint will convey the location of the table as well as the order associated with it.

### Endpoints

| Request  | Endpoint        | Description                                        |
| -------- | --------------- | -------------------------------------------------- |
| `GET`    | /tables         | Returns a list of all the tables and their orders. |
| `GET`    | /tables/:number | Returns a single table and its associated order.   |
| `POST`   | /tables/:number | Creates a new table.                               |
| `PUT`    | /tables/:number | Updates a table.                                   |
| `DELETE` | /tables/:number | Deletes a table.                                   |

### View ALL Tables

GET`http://localhost:5000/tables`<br><br>

```javascript
Response: Success (200)
{
    "tables": [
        {
            "_id": "609b14d433dfa94f7ab13cd2",
            "number": "2",
            "created_at": "2021-05-11T23:35:48.249Z",
            "updatedAt": "2021-05-14T19:34:54.851Z",
            "__v": 0,
            "order": {
                "_id": "609ed0de449f8ff32b9e5655",
                "drink": [
                    "water"
                ],
                "food": [
                    "chicken"
                ],
                "table": "609b14d433dfa94f7ab13cd2",
                "created_at": "2021-05-14T19:34:54.838Z",
                "updatedAt": "2021-05-14T19:34:54.838Z",
                "__v": 0
            }
        },
        {
            "_id": "609b261dab93806233110c82",
            "number": "35",
            "created_at": "2021-05-12T00:49:33.087Z",
            "updatedAt": "2021-05-12T00:49:33.087Z",
            "__v": 0
        }
    ]
}
```

### View Table Status + Order

GET`http://localhost:5000/table/:number`<br><br>

_> number is the STRING that indicates the table's number._

```javascript
Response: Success (200)
{
    "_id": "609b14d433dfa94f7ab13cd2",
    "number": "2",
    "created_at": "2021-05-11T23:35:48.249Z",
    "updatedAt": "2021-05-14T19:34:54.851Z",
    "__v": 0,
    "order": {
        "_id": "609ed0de449f8ff32b9e5655",
        "drink": [
            "water"
        ],
        "food": [
            "chicken"
        ],
        "table": "609b14d433dfa94f7ab13cd2",
        "created_at": "2021-05-14T19:34:54.838Z",
        "updatedAt": "2021-05-14T19:34:54.838Z",
        "__v": 0
    }
}
```

### Create New Table

POST`http://localhost:5000/table/:number`<br><br>

| Data         | Key        | Type |
| ------------ | ---------- | ---- |
| Table number | `"number"` | str  |

> Returns the number of the new table to confirm its creation

### Update Table

PUT`http://localhost:5000/table/:number`<br><br>

_> number is the STRING that indicates the table's number._

| Data         | Key        | Type |
| ------------ | ---------- | ---- |
| Table number | `"number"` | str  |

> Returns the new table number to confirm its creation

### Delete Table

DELETE`http://localhost:5000/table/:number`<br><br>

| Data         | Key        | Type |
| ------------ | ---------- | ---- |
| Table number | `"number"` | str  |

> Returns deletion message as well as (now deleted) table number

## Orders

In order for a restaurant to properly serve its customers, it must record its customers' orders and associate them with a table. The orders endpoint will convey the table as well as the items that guests order.

### Endpoints

| Request  | Endpoint       | Description                                        |
| -------- | -------------- | -------------------------------------------------- |
| `GET`    | /orders        | Returns a list of all the orders and their tables. |
| `GET`    | /order/:id     | Returns a single order and its associated table.   |
| `POST`   | /order/:number | Creates a new order for a given table.             |
| `PUT`    | /order/:number | Updates an order.                                  |
| `DELETE` | /order/:number | Deletes an order.                                  |

### View ALL orders

GET`http://localhost:5000/orders`<br><br>

```javascript
Response: Success (200)
{
    "order": [
        {
            "drink": [
                "cat soup"
            ],
            "food": [
                "dsadsa"
            ],
            "_id": "609b188a41232f56a353e763",
            "table": "609b14d433dfa94f7ab13cd2",
            "created_at": "2021-05-11T23:51:38.221Z",
            "updatedAt": "2021-05-11T23:51:38.221Z",
            "__v": 0
        },
        {
            "drink": [
                "water"
            ],
            "food": [
                "chicken"
            ],
            "_id": "609ed0de449f8ff32b9e5655",
            "table": "609b14d433dfa94f7ab13cd2",
            "created_at": "2021-05-14T19:34:54.838Z",
            "updatedAt": "2021-05-14T19:34:54.838Z",
            "__v": 0
        }
    ]
}
```

### View ONE specific order

GET`http://localhost:5000/orders/:id`<br><br>

_> id is the order's id_

```javascript
Response: Success (200)
{
    "order": {
        "drink": [
            "water"
        ],
        "food": [
            "chicken"
        ],
        "_id": "609ed0de449f8ff32b9e5655",
        "table": "609b14d433dfa94f7ab13cd2",
        "created_at": "2021-05-14T19:34:54.838Z",
        "updatedAt": "2021-05-14T19:34:54.838Z",
        "__v": 0
    }
}
```

### Create Order

POST `http://localhost:5000/orders/:number`<br><br>

_> the number is the number of the table associated
with the order_

| Data   | Key       | Type   |
| ------ | --------- | ------ |
| Food   | `"food"`  | string |
| Drinks | `"drink"` | string |

> Returns the items in the order, as well as the table to ensure its creation.


### Delete Order

DELETE `http://localhost:5000/orders/:id`<br><br>

_> the id is the order id
_


> Returns deletion message

``` 
{
    "message": "Successfully deleted."
}
```

# Coming Soon


### Update Order

PUT `http://localhost:5000/orders/:number`<br><br>

_> the number is the number of the table associated
with the order_

| Data   | Key       | Type   |
| ------ | --------- | ------ |
| Food   | `"food"`  | string |
| Drinks | `"drink"` | string |

> Returns the new items in the order, as well as the table to ensure its creation.

## Food and Drink Items

TBD

## Menus

Menus allow the customers to look for what they want to consume inside the restaurant - whether it be food or drinks; as well as the description and price of said items.

### Endpoints

| Request  | Endpoint        | Description                                                    |
| -------- | --------------- | -------------------------------------------------------------- |
| `GET`    | /menus          | Returns a list of all the menus                                |
| `GET`    | /menu/:name     | Returns a single menu.                                         |
| `POST`   | /menu/:name     | Creates a new menu.                                            |
| `PUT`    | /menu/:name     | Updates the name of a menu.                                    |
| `PUT`    | /menu/:name/add | Allows for the addition of new items into a pre-existing menu. |
| `DELETE` | /menu/:name     | Deletes a menu.                                                |

### View ALL Menus

GET`http://localhost:5000/menus`<br><br>

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

GET`http://localhost:5000/menu/:name`<br><br>

_> name is the unique STRING that identifies a menu in the database._

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

| Data   | Key        | Type         |
| ------ | ---------- | ------------ |
| Name   | `"name"`   | str          |
| Food   | `"food"`   | NOT SURE YET |
| Drinks | `"drinks"` | NOT SURE YET |

> Returns NOT SURE YET

### Update Menu

PUT `http://localhost:5000/menu/`<br><br>

| Data   | Key        | Type         |
| ------ | ---------- | ------------ |
| Name   | `"name"`   | str          |
| Food   | `"food"`   | NOT SURE YET |
| Drinks | `"drinks"` | NOT SURE YET |

> Returns NOT SURE YET

### Delete Menu

DELETE`http://localhost:5000/menu/:name`<br><br>
_> name is the unique STRING that identifies a menu in the database._
