import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Showuesr = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    async function getUser() {
        try {
            const res = await axios.get('https://curd-with-api.onrender.com/api/user')
            console.log("res", res)
            const userdata = await res.data;
            setData(userdata)
            console.log("data", userdata)
        } catch (error) {
            console.log("error", error.message)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const handleEditData = (item) => {
        navigate('/update', { state: item })
    }

    const handleDeleteData = async (id) => {
        console.log("id",id)
        try {
            const { data } = await axios.delete(`https://curd-with-api.onrender.com/api/user/${id}`)
            if (data.errors) {
                alert("Something went wrong...")
            } else {
                alert("data deleted sucessfully");
                getUser()
            }
        } catch (error) {
            console.log("error", error.message)
        }
    }
    return (
        <>
            <div className="row">
                <div className='col-md-3'></div>
                <div className="col-md-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item) => {
                                    return (
                                        <>
                                            <tr key={item._id}>
                                                <td>{item._id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.mobileNo}</td>
                                                <td><button className="btn btn-outline-primary" onClick={() => { handleEditData(item) }}>Edit</button></td>
                                                <td><button className="btn btn-outline-primary" onClick={() => { handleDeleteData(item._id) }}>Delete</button></td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Showuesr