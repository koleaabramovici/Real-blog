import React from 'react'

export default function Posts({data}) {
  return (
    <>
      <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">{data.title}</h2>
                            <h3 className="post-subtitle">{data.subtitle}</h3>
                        </a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!"> Jora mentu </a>
                            on {data.date}
                        </p>
      </div>
    </>
  )
}
