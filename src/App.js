import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <div className="bg-primary bg-opacity-50">
      <LoginForm />
    </div>
  );
}

export default App;