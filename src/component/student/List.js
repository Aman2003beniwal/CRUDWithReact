import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../index.css';


function List() {
    const [data, setData] = useState([]);

    async function fetchApi() {
        ////===by using asyn and await==========    
        // let apiData = await fetch("http://localhost:8888/student");
        // let jsonData = await apiData.json();
        // console.log(jsonData);
        // setData(jsonData)

        ////====== by using axios =============

        // axios.get("http://localhost:8888/student").then((getData) => {
        //     console.log(getData.data);
        //     setData(getData.data);
        // })

        try {
            axios.get("http://localhost:8888/student").then((getData) => {
                console.log(getData.data);
                setData(getData.data);
            })
        } catch (err) {
            console.log(err);
        }

    }


    useEffect(() => {
        fetchApi();
    }, [])

    const handleDelete = async (getId) => {
        const getData = await axios.delete(`http://localhost:8888/student/${getId}`);
        console.log(getData);
        fetchApi();
    }
    return (
        <>
            <h2>This is a List....</h2>
            <div className='add'>
                <Link to={`/add-new`} > Add New List </Link>&nbsp;
            </div>
            <table border={2}>
                <tr>
                    <th>S.No</th>
                    <th>Id </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th colSpan={3}>Action</th>
                </tr>
                {
                    data?.map((items, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>&nbsp;
                                <Link to={`/edit/${items.id}`} > Edit </Link>&nbsp;
                            </td>
                            <td>&nbsp;
                                <Link to={`/view/${items.id}`}> View </Link>
                                &nbsp;</td>
                            <td>
                                <button onClick={() => handleDelete(items.id)}>Delete</button>
                            </td>

                        </tr>
                    ))
                }

            </table >
        </>
    )
}

export default List;