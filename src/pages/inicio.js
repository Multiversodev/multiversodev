import React from 'react'
import trending from '../assets/scss/mocks/trending'
import {PostMansory} from '../assets/scss/common/post-mansory'

export default function Inicio () {
    return (
        <section className="container inicio"> 
        
        <div className="row"> 
            <h2> Popular Agora </h2>
            <PostMansory posts={trending} columns={3}/>

        </div>

        </section>
    )
}