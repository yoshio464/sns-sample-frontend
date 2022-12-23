import React from 'react'
import { Share } from '../share/Share'
import { Post } from '../post/Post'
import { Posts } from '../../dummyData'
import './TimeLine.css'

export const TimeLine = () => {
  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {Posts.map((post) => {
          return <Post post={post} key={post.id}/>
        })}
      </div>
    </div>
  )
}
