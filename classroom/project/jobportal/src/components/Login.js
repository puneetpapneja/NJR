
import { Link } from 'react-router-dom'


function Login() {
 
    return (
      <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
           <a className="no-underline" href="_blank">Forgot password ?</a>
          
        
          <Link className="nav-link" to={'/sign-up'}>
                  
                    Sign Up
                    </Link>
        </p>
      </form>
    )
  
}
export default Login;