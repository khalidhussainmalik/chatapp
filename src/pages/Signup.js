import React, { useState } from 'react';

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false
  })

  const { name, email, password, error, loading } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async e => {
    e.preventDefault();
    if (!name || !email || !password) {
      setData({ ...data, error: "All fields are required" })
    }
    try {
      
    } catch (err) {
      
    }
  };
  return (
    <section>
      <h3>Sign Up your Account</h3>
      <form className='form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor='name'>Name: </label>
          <input type="text" name='name' value={name} onChange={handleChange} />
        </div>
        <div className='input-container'>
          <label htmlFor='email'>Email: </label>
          <input type="email" name='email' value={email} onChange={handleChange} />
        </div>
        <div className='input-container'>
          <label htmlFor='password'>Password: </label>
          <input type="password" name='password' value={password} onChange={handleChange} />
        </div>
        {error ? <p className='error'>{error}</p> : null}
        <div className='btn-container'>
          <button className='btn'>Sign Up</button>
        </div>
      </form>
    </section>
  )
}

export default Signup