# Ghost Events and Gaming

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_BADGE_ID/deploy-status)](https://app.netlify.com/sites/ghosteventsandgaming/deploys)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

Ghost Events and Gaming is a web platform designed to provide a comprehensive space for organizing and promoting gaming events. The site offers an easy-to-navigate interface for both event organizers and participants, enabling seamless communication and efficient event management.

**Website:** [https://ghosteventsandgaming.netlify.app/](https://ghosteventsandgaming.netlify.app/)

**GitHub Repository:** [https://github.com/B1LLYBAGZ/GhostGames](https://github.com/B1LLYBAGZ/GhostGames)

## Features

- **Event Creation and Management**: Organizers can create, update, and manage gaming events with detailed descriptions, schedules, and participant lists.
- **User Authentication**: Secure user registration and login using JWT.
- **Real-time Updates**: Events are updated in real-time using WebSockets.
- **Responsive Design**: Fully responsive layout optimized for both desktop and mobile devices.
- **Material-UI Components**: A modern and clean user interface built with Material-UI (MUI).
- **Dynamic Data Fetching**: Events and user data are dynamically fetched using Apollo Client.

## Technology Stack

### Frontend

- **React.js**: JavaScript library for building user interfaces.
- **Material-UI (MUI)**: React components for faster and easier web development.
- **React Router**: For routing between different views in the application.
- **Apollo Client**: A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.

### Backend

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and event data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: For secure user authentication and authorization.

### Deployment

- **Netlify**: Hosting and deployment platform for both the frontend and backend.

## Installation

### Prerequisites

- **Node.js** (v14.x or later)
- **npm** or **yarn**

### Clone the Repository

```bash
git clone https://github.com/B1LLYBAGZ/GhostGames.git
cd GhostGames
```

### Install Dependencies

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### Run the Application

```bash
# Run the backend server
cd server
npm run dev

# Run the frontend
cd ../client
npm start
```

Visit `http://localhost:3000` to view the application in your browser.

## Usage

1. **Register or Login**: Create an account or log in using existing credentials.
2. **Create an Event**: As an authenticated user, create a new gaming event with all the necessary details.
3. **Manage Events**: View, update, or delete events you've created.
4. **Participate in Events**: Join events hosted by others and stay updated with real-time notifications.

## Screenshots

_Include some screenshots of your application here to give a visual overview of the platform._

## API Endpoints

### User Authentication

- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Log in an existing user.

### Events

- **GET** `/api/events`: Retrieve a list of all events.
- **POST** `/api/events`: Create a new event.
- **PUT** `/api/events/:id`: Update an existing event.
- **DELETE** `/api/events/:id`: Delete an event.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions, suggestions, or issues, please feel free to contact:

- **William Hogan**
- **Email:** [098williamhogan@gmail.com](mailto:098williamhogan@gmail.com)
- **GitHub:** [https://github.com/B1LLYBAGZ](https://github.com/B1LLYBAGZ)

---
