import React from 'react'
import Sidebar from './Sidebar'
import './Analytics.css'

const Analytics = () => {
  return (
    <div>
        <Sidebar/>

        <h1 id="channel">Your content</h1>

        <div class="analyticsNav">
            <p>Overview</p>
            <p>Content</p>
            <p>Audience</p>
            <p>Research</p>
        </div>
        
        <hr class="solid"></hr>
        <img src="https://q5n8c8q9.rocketcdn.me/wp-content/uploads/2022/01/img_61f13c18ef2fc.png.webp" alt="Girl in a jacket"></img>
    </div>
  )
}

export default Analytics