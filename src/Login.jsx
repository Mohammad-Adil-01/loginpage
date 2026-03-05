import "./login.css";
import people from "./images/people.png";
import password from "./images/password.png";
import mail from "./images/mail.png";
import facebookkk from "./images/facebookkk.png";
import x from "./images/X.png";

function Login() {
  return (
    <div className="Main">

      {/* LEFT SIDE LOGIN */}
      <div className="body-1">

        <h1 className="title">Member Login</h1>
        <p className="desp">Please Fill In Your Basic Information</p>

        <form>

          <div className="input-box">
            <img src={people} alt="people" />
            <input
              type="email"
              name="usermail"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="input-box">
            <img src={password} alt="password" />
            <input
              type="password"
              name="userpassword"
              placeholder="Enter Your Password"
              minLength={4}
              maxLength={6}
              required
            />
          </div>

          <button className="btn">Login</button>

        </form>

        <button className="btn-forget">
          <i>Forget password ?</i>
        </button>

      </div>


      {/* RIGHT SIDE SIGNUP */}
      <div className="body-2">

        <h1 className="heading-1">Sign Up</h1>
        <p className="desp-2">Using your social media account</p>

        <div className="logo">

          <a href="https://accounts.google.com/signin" target="_blank" rel="noreferrer">
            <img src={mail} alt="gmail" className="gmail" />
          </a>

          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={facebookkk} alt="facebook" className="facebook" />
          </a>

          <a href="https://www.x.com" target="_blank" rel="noreferrer">
            <img src={x} alt="x logo" className="x" />
          </a>

        </div>

        <div className="terms">

          <input type="checkbox" name="terms" required />

          <label>
            By signing up I agree with <span>terms & conditions</span>
          </label>

        </div>

        <button className="btn-new">
          <i>Create new Account</i>
        </button>

      </div>

    </div>
  );
}

export default Login;