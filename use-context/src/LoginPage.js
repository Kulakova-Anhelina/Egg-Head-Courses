import React, {useState} from 'react';
import { login } from './api';
const LoginPage = ({onLogin})=> {
const [loading, setLoading]= useState(false)


const [password, setPassword]=useState('')
const [username, setUsername] = useState('')
  const [error, setError] = useState(null)

 const  handleInputChangeUser = e => {
    setUsername(e.target.value)
  };

  const handlePassword = e => {
    setPassword(e.target.value)
  };
 const  handleSubmit = e => {
    e.preventDefault();

    setLoading(true);
    setError( null);
    login(username, password)
      .then(user => {
        setLoading({ loading: false });
       onLogin(user);
      })
      .catch(error =>
        setError(error),
        setLoading( false));
  };




    return (
      <div className="LoginPage">
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              name="username"
              value={username}
              onChange={handleInputChangeUser}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={password}
              onChange={handlePassword}
            />
          </label>
          {error && <div className="error">{error.message}</div>}
          <button type="submit" disabled={loading}>
            Sign In
          </button>
        </form>
      </div>
    );
  }


export default LoginPage;