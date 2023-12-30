import React from 'react'
import Sidebar from './components/Sidebar'
import './Dashboard.css'
import banner from './drugsbanner.png'

const Dashboard = () => {
  return (
    <div>
      <Sidebar/>

      <div className='rightS'>



      <img src={banner} style={{width:'1250px', margin:'0'}}  alt="Drugs"/>
<div className="dashcards">
{/* <h1>Hello</h1> */}
<div className="upload">


<div class="card card-4">
<button class="cssbuttons-io-button">
  Upload Your Link
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>
<p style={{color:'#000', fontWeight:'800'}}>Steps to get your First Contribution To Our Society</p>

<ul class="timeline">
<li><span class="badge badge-primary badge-pill font-weight-normal">Create a video for antidrugs on social media</span></li>
<li><span class="badge badge-primary badge-pill font-weight-normal">Create a video for antidrugs on social media</span></li>
<li><span class="badge badge-primary badge-pill font-weight-normal">Paste your video link</span></li>
<li><span class="badge badge-primary badge-pill font-weight-normal">Get your video verified</span></li>
<li><span class="badge badge-primary badge-pill font-weight-normal">Earn Great Rewards</span></li>
</ul>
    

</div>
</div>
<div className="upload">


<div class="card card-4">
<button class="cssbuttons-io-button">
  Create Your Video
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>
<p style={{color:'#000', fontWeight:'800'}}>
    Create your Own Reels with Our AR Video Filters and a lot more fun stuff 
</p>
<ul class="timeline">
<li><span class="badge badge-primary badge-pill font-weight-normal">Create a video for antidrugs on social media</span></li>
<li><span class="badge badge-primary badge-pill font-weight-normal">Create a video for antidrugs on social media</span></li>
<li><span class="badge badge-primary badge-pill font-weight-normal">Paste your video link</span></li>
<li><span class="badge badge-primary badge-pill font-weight-normal">Get your video verified</span></li>
<li><span class="badge badge-primary badge-pill font-weight-normal">Earn Great Rewards</span></li>
</ul>
    

</div>

</div>

      </div>
      </div>
    </div>
  )
}

export default Dashboard
