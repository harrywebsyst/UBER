# Backend API Documentation
## `/user/register/` Endpoint

### Description

Register a new user by creating a user account with provided information

### HTTP METHOD 

`POST`

### Request Body
The request body should be a JSON object with the following properties:
- `fullName`: An object containing:
  - `firstName` (string, required): The user's first name. Must be at least 3 characters long.
  - `lastName` (string, optional): The user's last name. Must be at least 3 characters long.
- `email` (string, required): The user's email address. Must be a valid email format and at least 5 characters long.
- `password` (string, required): The user's password. Must be at least 5 characters long.

### Example Response
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullName": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "parameter_name",
        "location": "body"
      }
    ]
  }
  ```

### Notes
- The password is hashed before being stored in the database.
- A JWT token is generated and returned upon successful registration.
