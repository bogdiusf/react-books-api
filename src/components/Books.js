import React, { useState, useEffect } from 'react'
import axios from 'axios'



export default function Books() {

    const [data, setData] = useState([])

    const getData = async () => {
        const response = await axios.get('/books')
        const newArr = []
        response.data.forEach(item => {
            newArr.push(item)
        });
        setData(newArr)
    }

    useEffect(() => {
        getData()
    }, [])
    console.log(data)
    return (
        data && data.map((item, index) => (
            <div key={item.id}>
                <img src={item.thumbnail} alt=""/>
                <br></br>
                Cartea {index + 1} - {item.id}
                <br></br>
                {item.thumbnail}
            </div>
        ))

    )

}