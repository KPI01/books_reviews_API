# Book Review App

This is the back-end of an app that allows users to login and make CRUD operations with comments about the book,
also they will be able to look for a specific book by ISBN, name or author

## Routes

- `/`: root
- `/register`: creates a new user
- `/isbn`: search a book by ISBN
- `/author`: search a book by author
- `/title`: search a book by title
- `/review`: search review by ISBN
- `/customer`: access to user authentication

## Requests

- `GET /`: returns a JSON with all objects
- `POST /register`: creates a new user with JSON object in body
- `POST /isbn/:isbn`: returns a JSON with all objects that match the ISBN
- `POST /author/:author`: returns a JSON with all objects that match the author
- `POST /title/:title`: returns a JSON with all objects that match the title
- `POST /review/:isbn`: returns a JSON with all objects that match the ISBN
- `POST /customer/auth/login`: login with JSON object in body
- `PUT /customer/auth/review/:isbn`: creates a new review with query parameter in URL `review`
- `DELETE /customer/auth/review/:id`: deletes a review with query parameter in URL `id`

