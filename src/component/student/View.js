import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function View() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    // console.log(id);

    const viewData = async () => {
        try {
            const getData = await axios.get(`http://localhost:8888/student/${id}`);
            console.log(getData.data);
            setData(getData.data);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        viewData();
    }, [])
    const listView = () => {
        navigate("/list");
    }
    return (
        <>
            <h3>This is a view Page </h3>
            <button style={{ display: "flex", alignItems: "left", fontSize: "20px", marginBottom: "5px" }} onClick={() => listView()}>Go to main list</button>
            <table border={"2px"}>

                <tr>
                    <th>Id </th>
                    <th>Name : </th>
                    <th>Email : </th>
                </tr>
                <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                </tr>
            </table>
        </>
    )
}

export default View