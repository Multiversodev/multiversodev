import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar} from 'antd';

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
        <span className="menu-title">Multiverso Dev</span>
        <div>
        <ul>
            { navLinks.map((link, index) => (
                <li key={index}>
                <Link to={link.path}>{link.title}</Link>
                </li>
                ))
                }         
        </ul>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </div>
    </nav>
    )
}