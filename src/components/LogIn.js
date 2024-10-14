import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../utils/Api";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  let password = ''
  // res[1]
  // console.log(res);
  // setEmail("sadfsgh")

  useEffect(()=> {
    console.log(email);

    // return function () {console.log("login unmounted")};
  }, [])

  const handleDashboardClick = async() => {
    //  await LoginApi().then((res) => {
    //   console.log(res);
    //   localStorage.setItem("AuthToken", res.data.id)
    // }).catch((err) => {
    //   console.log(err);
    // })

    // console.log(loginRes);
    // console.log("hello");
    navigate("/dashboard")
  };

  const handleNavigation = () => {
    navigate("/grocery")
  }
  const handleLogin = async(data) => {
    // if(email.length == 0) setEmailError(true)
    // console.log(email);
    // console.log(password);
    const res = await LoginApi({"email":"qwerty123@samp.com","password":"qwerty123"})
    console.log(res);
    localStorage.setItem("fundoo-token", res?.data?.id)
    navigate('/dashboard')
  }
  // let email = 'abc'

  // console.log(email);
  // console.log(password);

  return (
    <div>
      <h1>Log In Component</h1>
      <input type="text" 
      placeholder="email" 
      // value={email} 
      onChange={(e)=> {
        // console.log(e.target.value);
        setEmail(e.target.value)
        }}/>
        {emailError && <span>Email is required</span>}
      <input type="text" placeholder="password"
      onChange={(e)=> {
        // console.log(e.target.value);
        password = e.target.value
        }}
      />
      <button onClick={()=> handleLogin({
        "email": "qwerty123@samp.com",
        "password": "qwerty123"
        })}>Login</button>
        <button onClick={() => navigate("/signup")}>SignIn</button>
      <button onClick={handleDashboardClick}>Dashboard</button>
      <button onClick={handleNavigation}>Grocery</button>
    </div>
  );
};

export default LogIn;
