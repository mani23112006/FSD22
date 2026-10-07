import React from 'react'

const Login = () => {
  return (
    <div>
      <h1 align="center">Login</h1>
      <form>
        USERNAME:
        <input type="text" name="username" id="username" placeholder="Enter your username"/>
        <br/>
        Password:
        <input type="password" name="password" id="password" placeholder="Enter your password"/>
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
