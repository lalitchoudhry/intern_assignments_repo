
# USER-POST-AUTHENTICATION-API

It is a Application Program Interface that contain all the features regarding Authorization and Authentication for the users and posts. 

#### Base URL: https://user-auth-api-phi.vercel.app/


## Features

- Verifies a user's identity based on their provided credentials (username/email and password).
- Issues an authentication token upon successful validation, enabling access to protected resources.
- **Password-based**: Compares user-provided password with a securely hashed version stored in the database
- **Token-based**: Uses short-lived authentication tokens (e.g., JSON Web Tokens) for subsequent requests.
- **Password hashing**: Store passwords using strong, irreversible hashing algorithms (e.g., bcrypt, Argon2)
- **Password reset functionality**: Allow users to reset forgotten passwords securely.
- User can perform **CRUD** operations in posts.
- **Read Post**: User can feed all the posts and also the posts made by user.
- User can **Follow** and **Unfollow** each other in it and can get list of **Freinds** according to user.


## Tech Stack

**Server:** Node, Express, MongoDB


## API Reference

### Server
```http
https://user-auth-api-phi.vercel.app/
```

#### Get Item

```http
  GET /api/posts
  GET /api/posts/%{id}
  POST /api/posts          /*need authorization token*/
  PUT /api/posts/${id}     /*need authorization token*/
  DELETE /api/posts/${id}  /*need authorization token*/
  
  //GET POSTS MADE BY USER
  GET /api/posts/${userId}/posts   /*need authorization token*/
```

#### User Authorization

```http
  POST /api/auth/register
  POST /api/auth/login
  POST /api/auth/forget-password/${email}
  POST /api/auth/reset-password/${id}  /*need token*/    
```
#### User

```http
  GET /api/users/${id}     /*get user*//*need authorization token*/
  GET /api/users/${id}/friends     /*get friend list*//*need authorization token*/
  PATCH /api/users/${id}/${friendId}    /*add-remove friend*//*need authorization token*/
```
 
## Run Locally

Clone the project

```bash
  git clone https://github.com/lalitchoudhry/intern_assignments_repo/tree/master/user_register_api
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Usage/Examples - payload

```json
<!-- User Register -->
  {
    "name":"user",
    "email":"user@email.com",
    "password":"user@123"
  }

<!-- User Login -->
  {
    "email":"user@email.com",
    "password":"user@123"
  }

<!-- Forget-Password --> 
  {
    "email":"user@email"
  }
  // It will send an email with link to reset password

<!-- Create Post -->
  {
    "userId": "userId",
    "imgUrl": "img.jpeg",
    "description": "hello everyone"
  }
```


## Author

[@lalitchoudhry](https://www.github.com/lalitchoudhry)
