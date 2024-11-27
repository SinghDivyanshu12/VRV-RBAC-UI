User and Role Management Application
Getting Started
Follow these steps to set up and run the application:

Clone the Repository
git clone https://github.com/UserManagement-RBAC-.git
cd UserManagement-RBAC-
Install the required dependencies for the React app:
Install the required dependencies for the React app

npm install
Start the JSON Server
Start the JSON server for handling backend APIs

npm run server
The JSON server will run at: http://localhost:5000/

Start the React Application
Run the React development server:

npm run start
The React app will be live at: http://localhost:3000/

Application Details
📋 Application Flow

Home Page:
. A welcoming page with a Greeting.

Users Page:
. Displays a list of users. . Allows operations like adding, editing, and deleting users. . Includes sorting, searching, and pagination functionalities.

Roles Page:
. Displays a list of roles. . Allows operations like adding, editing, and deleting roles. . Users can assign permissions to roles. . Includes pagination functionality.

Features and Functionalities
Sorting
. Users can be sorted by Name, Email, or Status. . Implemented using the sort() method.

Searching
. Search functionality filters users by Name or Email. . Provides real-time filtering as the user types.

Pagination
Displays a subset of users or roles on each page. Includes navigation buttons for "Previous" and "Next".

CRUD Operations
(i). Users: . Add new users. . Edit existing users. . Delete users.

(ii). Roles: . Add new roles. . Edit existing roles. . Assign permissions to roles. . Delete roles.

Permissions Management
. Assign permissions like Create, Read, Update, and Delete to roles. . Dynamically updates the role's permission list.

Responsive Design . Fully responsive UI built with Tailwind CSS. . Works seamlessly across mobile, tablet, and desktop devices.
Pages, Components and Contexts
Pages:

Home Page: . Simple greeting and introduction to the application.

Users Page: . Manages user data with all CRUD operations, sorting, searching, and pagination.

Roles Page: . Manages roles, including assigning permissions and CRUD operations.

Components:

NavBar: Navigation between pages.
Modal: Reusable modal for forms.
UserForm: Form for adding/editing users.
RoleForm: Form for adding/editing roles and assigning permissions.
UserList: To render all the users with editing and deleting functionality.
RoleList: To render all the roles with editing and deleting functionality.
Contexts:

UserContext: It centralized storage to store and manage state of the users data with all methods.
RoleContext: It centralized storage to store and manage state of the roles data with all methods.
Technologies Used
Technology -> Purpose

React.js -> Frontend framework for building the UI.
JSON Server -> Backend mock server for API handling.
Axios -> For making API requests.
CSS (Tailwind) -> For responsive and modern UI styling.
React Router -> For navigation and routing between pages.
react-hot-toast -> To give notification on every operation.
react-icons -> To improve the user-interface.
API Endpoints
Method -> Endpoint -> Description

GET -> /users -> Fetch all users.
POST -> /users -> Add a new user.
PUT -> /users/:id -> Update a specific user.
DELETE -> /users/:id -> Delete a specific user.
GET -> /roles -> Fetch all roles.
POST -> /roles -> Add a new role.
PUT -> /roles/:id -> Update a specific role.
DELETE -> /roles/:id -> Delete a specific role.
