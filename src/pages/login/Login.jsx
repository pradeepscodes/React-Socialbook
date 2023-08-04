import "./login.css"

export default function Login() {
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
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="LoginRegisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
