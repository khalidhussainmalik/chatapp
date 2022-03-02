import React from 'react'

const Signup = () => {
  return (
    <section>
      <h3>Sign Up your Account</h3>
      <form className='form'>
        <div className='input-container'>
          <label htmlFor='name'>Name: </label>
          <input type="text" name='name'/>
        </div>
        <div className='input-container'>
          <label htmlFor='email'>Email: </label>
          <input type="email" name='email'/>
        </div>
        <div className='input-container'>
          <label htmlFor='password'>Password: </label>
          <input type="password" name='password'/>
        </div>
      </form>
    </section>
  )
}

export default Signup