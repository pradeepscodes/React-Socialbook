import "./register.css";

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <div className="loginLogo">SocialBook</div>
                <span className="loginDesc">
                    connect wwith Friends on SocialBook
                </span>
            </div>
            <div className="loginright">
                <div className="loginBox">
                    <input placeholder="username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="password" className="loginInput" />
                    <input placeholder="password again" className="loginInput" />
                    <button className="loginButton">Sign up</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="LoginRegisterButton">Login Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
