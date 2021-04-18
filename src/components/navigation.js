import React from 'react';
import {Link} from 'react-router-dom';

const navLinks = [
    {
        title: 'Inicio',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contato',
        path: '/contato'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

export default function Navigation (){
    return (<nav className="site-navigation">
        <span>Multiverso Dev</span>
        <ul>
            { navLinks.map((link, index) => (
                <li key={index}>
                <Link to={link.path}>{link.title}</Link>
                </li>))}         
        </ul>
        </nav>)
}