import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddNew() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        emial: ""
    });

    function addData(e) {
        // console.log(e.target.value);
        // setData(e.target.value);

        setData({
            // [e.target.name]: e.target.value // it take only one value at a time
            ...data, [e.target.name]: e.target.value // in this we are takeing preivous value also
        })
        console.log(data);

    }

    async function formSubmit(e) {
        e.preventDefault();
        try {
            const newData = await axios.post("http://localhost:8888/student", data);
            console.log("new added data is : ", newData);
        } catch (error) {
            console.log(error);
        }
        navigate("/list");
    }

    return (
        <>
            <form style={{ marginTop: "15px" }}>
                <div>
                    <label>Name : </label>
                    <input type='text' placeholder='Enter Name' name="name" onChange={(e) => addData(e)}></input>
                </div>
                <div>
                    <label>Email : </label>
                    <input type='email' placeholder='Enter Email' name='email' onChange={(e) => addData(e)}></input>

                </div>
                <button style={{ margin: "10px", backgroundColor: "green", fontSize: "15px", color: "White" }} onClick={(e) => formSubmit(e)}>Add Data</button>
            </form>
        </>
    )
}

export default AddNew