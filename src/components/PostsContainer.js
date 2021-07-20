import React from 'react';
import {useState} from 'react';
import Post from './Post';

export default function PostsContainer() {
  const [posts, setPosts] = useState([
      {
      id: 0,
      title: 'Man must explore, and this is exploration at its greatest',
      subtitle: 'Problems look mighty small from 150 miles up',
      date: 'on September 24, 2021'
    },
    {
      id: 1,
      title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      subtitle: '',
      date: 'on September 18, 2021'
    },
    {
      id: 2,
      title: 'Science has not yet mastered prophecy',
      subtitle: 'We predict too much for the next year and yet far too little for the next ten.',
      date: 'on August 24, 2021'
    },
    {
      id: 3,
      title: 'Failure is not an option',
      subtitle: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
      date: 'on July 8, 2021'
    }]);
  return (
    <>
      <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                 {posts.map((data) => 
                 <Post 
                 key={data.id}
                 data={data}/>
                 )}
                  <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
      </div> 
    </>
  )
}
