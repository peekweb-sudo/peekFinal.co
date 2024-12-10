import React from 'react'
import "./signIn.css"
function SignIn() {
  return (
    <div className='sign-in'>

        <form className='container'>
          <img src="/logo.png" alt="" width="50" height="50" />
            <label htmlFor="email">email</label>
            <input placeholder='email' type="email"  />
            <label htmlFor="password">password</label>
            <input placeholder='password' type="password"  />
            <button>SignIn</button>
            <span>dont have an account? </span> <a href="/signup">SignUp</a>
        </form>
    </div>
  )
}

export default SignIn
