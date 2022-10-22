import React from 'react'
import { useState } from 'react'
import '../assets/css/register.css'
import logo from '../assets/MESH-logo.png'

const initialState = {
    name:'',
    email:'',
    password:'',
}

export default function Register() {
    const [values,setValues] = useState(initialState);

    // setting up a generalized handleChange fucntion
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    const handleRegister=(e)=>{
        e.preventDefault();
        const {name,email,password,isMember} = values;
        console.log(values);
        if(!name || !email || !password){
            alert('Provide all values')
        }
    }
    const handleLogin=(e)=>{
        e.preventDefault();
        const {name,email,password,isMember} = values;
        console.log(values);
        if(!email || !password){
            alert('Provide all values')
        }
    }
    return (
        <>
            <div class="main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div class="signup">
                    <form>
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="name" placeholder="User name" required="" onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email" required="" onChange={handleChange} />
                        <input type="password" name="password" placeholder="Password" required="" onChange={handleChange} />
                        <button onClick={handleRegister}>Sign up</button>
                    </form>
                </div>

                <div class="login">
                    <form>
                        <label for="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required="" onChange={handleChange} />
                        <input type="password" name="password" placeholder="Password" required="" onChange={handleChange} />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </>
        // <!-- Pills content -->
    )
} 
