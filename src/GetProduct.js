import React, { useEffect, useState } from 'react'

function GetProduct() {

    const [data, setData] = useState();
    const Api = "https://fakestoreapi.com/products";

    async function getApi() {
        const apiData = await fetch(Api);
        const jsonData = await apiData.json();
        console.log(jsonData);
        setData(jsonData);
    }

    useEffect(() => {
        getApi();
    }, [])
    return (
        <>
            <div>GetProduct</div>
            <table border={1}>
                <tr>
                    <th>S.No</th>
                    <th>Title </th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>

                {
                    data?.map((items, index) => (
                        <tr key={index}>
                            <td>{items.id}</td>
                            <td>{items.title}</td>
                            <td>{items.description}</td>
                            <td>{items.price}$</td>
                            <td><img src={items.image} height="100px" /></td>
                        </tr>
                    ))
                }
            </table>
        </>

    )
}

export default GetProduct