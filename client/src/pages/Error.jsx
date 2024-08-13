import React from "react";

const ErrorPage = ({ message }) => {
  return (
    <div id="error-page">
      <h1>Chotto Matte!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
