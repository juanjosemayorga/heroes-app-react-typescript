import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface RouteProps {
  history: RouteComponentProps["history"];
  location: RouteComponentProps["location"];
  match: RouteComponentProps["match"];
}

export const LoginScreen = (routeProps: RouteProps) => {
  const { history } = routeProps;

  const handleLogin = () => {
    // history.push('/');
    history.replace('/');
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}
