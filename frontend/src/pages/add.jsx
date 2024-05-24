import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Add = () => {
    const [book, setBook] = useState({
        title: "",
        description: "",
        price: null,
        cover: "",
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/books", book);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="form">
            <h1>Add New Book</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title" />
            <textarea rows={5} type="text" placeholder="description" onChange={handleChange} name="description"></textarea>
            <input type="number" placeholder="price" onChange={handleChange} name="price" />
            <input type="text" placeholder="cover" onChange={handleChange} name="cover" />
            <button className="formButton" onClick={handleClick}>Add</button>
            <Link to="/">See all books</Link>
        </div>
    );
};

export default Add;