import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";
import Yugioh from "./pages/Yugioh";
import Magic from "./pages/Magic";
import Pokemon from "./pages/Pokemon";
import Footer from "./components/Footer/Footer"; // Import the Footer component
import "./App.css";
import LogIn from "./pages/LogIn"; // Importing the LogIn
import SignUp from "./pages/SignUp"; // Importing the SignUp
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme.js";
import "./main.css"; // Import your CSS variables

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
