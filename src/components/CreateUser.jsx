import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [user, setUser] = useState({ _id: "", name: "", email: "", password: "", mobileNo: "" });
    const [btn, setBtn] = useState("Save")
   
    const navigate = useNavigate();

    const handleInputFeild = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleFormsubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('https://curd-with-api.onrender.com/api/user', { name: user.name, email: user.email, password: user.password, mobileNo: user.mobileNo });
            console.log("data", data);

            if(data.errors){
                alert("something went wrong....")
            }else{
                alert("Data save sucessfully ....!!!")
            }

        } catch (error) {
            console.log("error", error.message)
        }
        cls();
        navigate('/')
    }

    function cls() {
        setUser({ name: '', email: '', password: '', mobileNo: '' })
        setBtn("Save")
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className='text-center'>Create User</h1>
                    <div className="col-md-3"></div>

                    <div className="col-md-6">
                        <form onSubmit={handleFormsubmit}>
                            <input className='form-control my-2' type='text' value={user.name} name='name' placeholder='enter name' onChange={handleInputFeild} />
                            <input className='form-control my-2' type='text' value={user.email} name='email' placeholder='enter email' onChange={handleInputFeild} />
                            <input className='form-control my-2' type='text' value={user.password} name='password' placeholder='enter password' onChange={handleInputFeild} />
                            <input className='form-control my-2' type='text' value={user.mobileNo} name='mobileNo' placeholder='enter mobile no' onChange={handleInputFeild} />
                            <input type='submit' value={btn} className='btn btn-primary' />
                        </form>
                    </div>

                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
}

export default CreateUser