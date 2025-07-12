import "../src/login.css";
import people from "../src/images/people.png";
import password from "../src/images/password.png";
import mail from "../src/images/mail.png";
import facebookkk from "../src/images/facebookkk.png";
import x from "../src/images/X.png";

function Login(props) {
  return (
    <div className="Main">
      <div className="body-1">
        <h1 className="title">Member Login</h1>
        <p className="desp">Please Fill In Your Basic Information</p>
        <form >
          <img src={people} alt="people" className="people" />
          <input
            type="email"
            name="usermail"
            className="usermail"
            placeholder="Enter Your Email"
            required
          />
          <img src={password} alt="Password images" className="password" />
          <input
            type="password"
            name="userpassword"
            className="userpass"
            placeholder="Enter Your Password"
            minLength={4}
            maxLength={6}
            required
          />
          <button className="btn" >Login</button>
        </form>
        <button className="btn-forget">
          <i>Forget password ?</i>
        </button>
      </div>

      <div className="body-2">
        <h1 className="heading-1">Sign Up</h1>
        <p className="desp-2">Using your social media account</p>
        <div className="logo">
         
         <a href="https://accounts.google.com/signin" target="_blank" rel="noreferrer">
          <img
            src={mail}
            alt="Gmail - Logo"
            className="gmail"
             // Will trigger google sign-in
          />
          </a>

          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={facebookkk} alt="Facebook - Logo" className="facebook" />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noreferrer">
            <img src={x} alt="X - Logo" className="x" />
          </a>
        </div>
        <input type="checkbox" name="terms" required className="checkbox" />
        <label htmlFor="terms" className="checkbox">
          By signing up I agree with <span>terms & conditions</span>
        </label>

        <button className="btn-new">
          <i className="newAc">Create new Account</i>
        </button>
      </div>
    </div>
  );
}

export default Login;
