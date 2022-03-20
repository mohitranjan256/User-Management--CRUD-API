
# USER-MANAGEMENT 

Backened Server : 
 1. Create a user: In this operation a user will be created with username,password, name, phone number.
 2. Update a user: In this operation the user will be able to update password, name or phone number.
 3. Get details of a user based on username: In this operation the user will be able to get details of a user on the basis of username
 4. Delete user: user will be deleted on the basis of username
 


## Tech Stack


**Server:** Node, Express

**Database:** MongoDB


## Run Locally

Clone the project

```bash
  git clone https://github.com/monster256/webteam-task-4.git
```

Go to the project directory

```bash
  cd webteam-task-4
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon index.js
```
### Link Heroku

```bash
   https://web-team-task-4.herokuapp.com/
 ```  
## API Reference

#### REGISTER A USER

```http
  POST /user_register/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username`      | `string` | **Required**. username of Person  |
| `Name`      | `string` | **Required**. Name of a Person   |
| `password`      | `string` | **Required**. password of a Person    |
| `phoneno`      | `int` | **Required**. phoneno of Person    |
#### UPDATE A USER

```http
  GET /user_update/${username}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. username of Person to Update |
| `Name`      | `string` | **Required**. Name of a Person for Update if not then leave it   |
| `password`      | `string` | **Required**. password of a Person for Update if not then leave it   |
| `phoneno`      | `int` | **Required**. phoneno of Person for Update if not then leave it   |

#### GET ALL DETAILS ABOUT A USER

```http
  GET /user_detail/${username}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`     | `string` | **Required**. username of Person to get Detail  |


#### DELETE A USER

```http
  GET /user_del/${username}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. username of Person to Delete |

