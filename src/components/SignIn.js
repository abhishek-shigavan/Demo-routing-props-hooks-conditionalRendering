import React, { useEffect } from 'react';

const SignIn = () => {

    useEffect(()=> {
        console.log("signup Mounted");
    
        return function () {console.log("signup unmounted")};
      })

    return (
        <div>
        <h1>SignIn Component</h1>
        </div>
    );
};

export default SignIn;