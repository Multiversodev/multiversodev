import React from 'react'

export default function PostMansory ({posts, columns, tagsOnTop}){
    return (
        <section className="mansory" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}></section>
    )
}