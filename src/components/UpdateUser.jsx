import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const [user, setUser] = useState({ id: "", name: "", email: "", password: "", mobileNo: "" });
    const [btn, setBtn] = useState("Save");
    const location = useLocation();
    const navigate = useNavigate();

    const el = location.state;

    useEffect(() => {
        console.log("el", el)
        setUser({ id: el._id, name: el.name, email: el.email, password: el.password, mobileNo: el.mobileNo })
    }, [])

    const handleInputFeild = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleFormsubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`https://curd-with-api.onrender.com/api/user/${user.id}`, { name: user.name, email: user.email, password: user.password, mobileNo: user.mobileNo });
            console.log("data", data);

            if (data.errors) {
                alert("something went wrong....")
            } else {
                alert("Data update....!!!")
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
                    <h1 className='text-center'>Update User</h1>
                    <div className="col-md-3"></div>

                    <div className="col-md-6">
                        <form onSubmit={handleFormsubmit}>
                            <input className='form-control my-2' type='text' value={user.name} name='name' placeholder='enter name' onChange={handleInputFeild} />
                            <input className='form-control my-2' type='text' value={user.email} name='email' placeholder='enter email' onChange={handleInputFeild} />
                            <input className='form-control my-2' type='text' value={user.password} name='password' placeholder='enter password' onChange={handleInputFeild} />
                            <input className='form-control my-2' type='text' value={user.mobileNo} name='mobileNo' placeholder='enter mobile no' onChange={handleInputFeild} />
                            <input type='submit' value='update' className='btn btn-primary' />
                        </form>
                    </div>

                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
}

export default UpdateUser