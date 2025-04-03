![BloggingApp](/ImagesforReadme/Blogging.gif)

# BloggingApp

A simple blogging platform built using the MERN stack (MongoDB, Express.js, React, Node.js). This app allows users to write, comment, and manage posts. The app follows the MVC architecture to organize code efficiently.

## How to Run the Application

1. **Install Dependencies**

   First, make sure you have installed all necessary dependencies:

   ```bash
   npm install
   ```

2. **Start the Server**

   To start the server, use the following command:

   ```bash
   node --watch ./index.js
   ```

   Alternatively, you can run the server with environment variables loaded from a `.env` file:

   ```bash
   node --env-file .env --watch ./index.js
   ```

---

## Frontend Pages and Components

### 1. HomePage

- **MainCategories**: Displays the main categories of posts.
- **FeaturedPosts**: Displays featured posts.
- **PostList**: Displays a list of posts.

### 2. LoginPage

- **SignIn ClerkComponent**: A login page where users can sign in to access their accounts.

### 3. PostListPage

- **PostList**: Displays all posts.
- **SideMenu**: A sidebar with additional navigation options.

### 4. RegisterPage

- **SignUp Clerk/Components**: A page where new users can register.

### 5. SinglePostPage

- **Comments**: Users can view and add comments related to the post.
- **Comment**: The section where users can comment on the post.

### 6. Write

- Allows logged-in users to create a new post.

```bash
VITE_IK_URL_ENDPOINT=
VITE_IK_PUBLIC_KEY=
VITE_CLERK_PUBLISHABLE_KEY=
VITE_API_URL=
```

---

## Backend API and Routes

### User API

- **Saved Posts**: Allows users to save posts to their profile.
- **Get Saved Post List**: Retrieves the list of posts saved by a user.

### Comments API

- **Get Post ID**: Fetches the post using its unique ID.
- **Add Comment**: Allows users to add comments to a post.
- **Delete Comment**: Allows users to delete a comment.

### Post API

- **Get Posts**: Retrieves a list of posts.
- **Get Single Post**: Retrieves details of a single post.
- **Create Post**: Allows users to create a new post.
- **Delete Post**: Allows users to delete a post.
- **Feature Post**: Allows admins to mark a post as featured.

### env variablea

```bash
MONGO=
CLERK_WEBHOOK_SECRET=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
IK_URL_ENDPOINT=
IK_PUBLIC_KEY=
IK_PRIVATE_KEY=
```

---

## Architecture

This application follows the **MVC (Model-View-Controller)** architecture:

- **Model**: Represents the data structure and business logic. Handles interactions with MongoDB.
- **View**: The React frontend that displays the user interface.
- **Controller**: Handles the logic to interact between the Model and View. It processes incoming requests, manipulates data through Models, and returns the response to the user.

## Authors

- [@nomankhokhar](https://www.github.com/nomankhokhar)

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## 🚀 About Me

I'm a full Stack Developer...
