import React from 'react'
import Sidebar from './components/Sidebar'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
      <Sidebar/>

      <div className='rightSection'>
{/* <h1>Hello</h1> */}
<div className="upload">
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

</div>
<div className="create-right">

</div>
      </div>
    </div>
  )
}

export default Dashboard
