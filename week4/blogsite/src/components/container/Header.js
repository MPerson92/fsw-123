import { Link } from 'react-router-dom'
import React from 'react'


export default function Header() {
    return (
        <Header>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </Header>
    )

}
