import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [getdata, setData] = useState({
        name: "",
        email: ""
    })


    useEffect(() => {
        const fecthData = async () => {
            const getPostData = await axios.get(`http://localhost:8888/student/${id}`);
            // console.log(getPostData.data);
            setData(getPostData.data);
        }
        // console.log(data);
        fecthData();
    }, [id]);

    // console.log(getdata);

    const updateData = (e) => {
        setData({
            ...getdata, [e.target.name]: e.target.value
        })
    }
    console.log(getdata);


    async function formUpdate(e) {
        try {
            e.preventDefault();
            const newData = await axios.put(`http://localhost:8888/student/${id}`, getdata);
            console.log(newData.data);
            navigate("/list");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form>
            <div>
                <label>Name : </label>
                <input type='text' name="name" value={getdata.name} onChange={(e) => updateData(e)}></input>
            </div>
            <div>
                <label>Email : </label>
                <input type='email' name="email" value={getdata.email} onChange={(e) => updateData(e)} ></input>
            </div>
            <button onClick={(e) => { formUpdate(e) }} >Update</button>
        </form>
    )
}

export default Edit