import React, { useEffect } from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    useEffect(() => {
        const sidebarToggler = document.querySelector('.sidebarToggler');
        const sidebar = document.querySelector('.YoutubeSidebar');

        function condenseSidebar() {
            if (sidebar.classList.contains('condensed')) {
                sidebar.classList.remove('condensed');
            } else {
                sidebar.classList.add('condensed');
            }
        }

        if (sidebarToggler) {
            sidebarToggler.addEventListener('click', condenseSidebar);
        }

        // Cleanup the event listener when the component unmounts
        return () => {
            if (sidebarToggler) {
                sidebarToggler.removeEventListener('click', condenseSidebar);
            }
        };
    }, []); // Empty dependency array ensures this effect runs once after the initial render



    return (
        <div className='my-sidebar'>


            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <link rel="stylesheet" href="style.css" />
                <script src="https://kit.fontawesome.com/c205108c93.js" crossorigin="anonymous"></script>
            </head>

            <div class="sidebarToggler">
                <div class="icon">
                    <svg viewBox="0 0 24 24">
                        <g>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor" />
                        </g>
                    </svg>
                </div>
            </div>
            <div class="YoutubeSidebar">
                <div class="sidebarHeader">
                    <div class="avatar"></div>
                    <div class="metaDetails">
                        <div class="myChannel">Username</div>
                        <div class="myName">Anti-drug Influencer</div>
                    </div>
                </div>
                <div class="sidebarLinks">
                    <div class="link">
                        <Link to="/dashboard" class="active">
                            <div class="icon">
                                <svg viewBox="0 0 24 24">
                                    <g>
                                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="currentColor" />
                                    </g>
                                </svg>
                            </div>
                            <div class="text">Dashboard</div>
                        </Link>
                    </div>
                    <div class="link">
                        <Link to='/' className='mylink'>
                            <div class="icon">
                                <svg viewBox="0 0 24 24">
                                    <g>
                                        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" fill="currentColor" />
                                    </g>
                                </svg>
                            </div>
                            <div class="text">Videos</div>
                        </Link>
                    </div>
                    {/* <div class="link">
                <Link to='/' className='mylink'>
                    <div class="icon">
                        <svg viewBox="0 0 24 24">
                            <g>
                                <path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z" fill="currentColor"/>
                            </g>
                        </svg>
                    </div>
                    <div class="text">Playlists</div>
                </Link>
            </div> */}
                    <div class="link">
                        <Link to='/' className='mylink'>
                            <div class="icon">
                                <svg viewBox="0 0 24 24">
                                    <g>
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="currentColor" />
                                    </g>
                                </svg>
                            </div>
                            <div class="text">Analytics</div>
                        </Link>
                    </div>
                    {/* <div class="link">
                <Link to='/' className='mylink'>
                    <div class="icon">
                        <svg viewBox="0 0 24 24">
                            <g>
                                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"  fill="currentColor"/>
                            </g>
                        </svg>
                    </div>
                    <div class="text">Comments</div>
                </Link>
            </div> */}
                    {/* <div class="link">
                <Link to='/' className='mylink'>
                    <div class="icon">
                        <svg viewBox="0 0 24 24">
                            <g>
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z" fill="currentColor"/>
                            </g>
                        </svg>
                    </div>
                    <div class="text">Subtitles</div>
                </Link>
            </div> */}
                    <div class="link">
                        <Link to='/' className='mylink'>
                            <div class="icon">
                                <svg viewBox="0 0 24 24">
                                    <g>
                                        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor" />
                                    </g>
                                </svg>
                            </div>
                            <div class="text">Rewards</div>
                        </Link>
                    </div>
                    <div class="link">
                        <Link to='/' className='mylink'>
                            <div class="icon">
                                <svg viewBox="0 0 24 24">
                                    <g>
                                        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" fill="currentColor" />
                                    </g>
                                </svg>
                            </div>
                            <div class="text">Copyright</div>
                        </Link>
                    </div>
                </div>
                <div class="sidebarBottom">
                    {/* <div class="link">
                <Link to='/' className='mylink'>
                    <div class="icon">
                        <svg viewBox="0 0 24 24">
                            <g>
                                <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" fill="currentColor"/>
                            </g>
                        </svg>
                    </div>
                    <div class="text">Setting</div>
                </Link>
            </div> */}
                    {/* <div class="link">
                <Link to='/' className='mylink'>
                    <div class="icon">
                        <svg viewBox="0 0 24 24">
                            <g>
                                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" fill="currentColor"/>
                            </g>
                        </svg>
                    </div>
                    <div class="text">Feedback</div>                    
                </Link>
            </div> */}



                    <div  class="link">
                        <Link to='/create' className='mylink'>
                            <div class="icon">

                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 14 4 C 8.486 4 4 8.486 4 14 L 4 36 C 4 41.514 8.486 46 14 46 L 36 46 C 41.514 46 46 41.514 46 36 L 46 14 C 46 8.486 41.514 4 36 4 L 14 4 z M 21.132812 13 L 28.867188 13 C 29.740188 13 30.560719 13.464891 31.011719 14.212891 L 32.845703 17.273438 C 33.114703 17.721438 33.608812 18 34.132812 18 L 39.5 18 C 40.327 18 41 18.673 41 19.5 L 41 35.5 C 41 36.327 40.327 37 39.5 37 L 10.5 37 C 9.673 37 9 36.327 9 35.5 L 9 19.5 C 9 18.673 9.673 18 10.5 18 L 15.867188 18 C 16.390187 18 16.885297 17.721484 17.154297 17.271484 L 18.988281 14.212891 C 19.438281 13.464891 20.259812 13 21.132812 13 z M 12 14 L 14 14 C 14.552 14 15 14.448 15 15 L 15 16 L 11 16 L 11 15 C 11 14.448 11.448 14 12 14 z M 34 19.5 A 1 1 0 0 0 34 21.5 A 1 1 0 0 0 34 19.5 z M 25 20 C 20.864 20 17.5 23.364 17.5 27.5 C 17.5 31.636 20.864 35 25 35 C 29.136 35 32.5 31.636 32.5 27.5 C 32.5 23.364 29.136 20 25 20 z M 25 22 C 28.032 22 30.5 24.468 30.5 27.5 C 30.5 30.532 28.032 33 25 33 C 21.968 33 19.5 30.532 19.5 27.5 C 19.5 24.468 21.968 22 25 22 z"></path>
</svg>

                            </div>
                            <div  class="text">
                                <div style={{backgroundColor:'#9264D9'}} class="create">
                                    <i className="fas fa-video" style={{ color: 'red' }} ></i> <p> CREATE</p>
                                </div>
                            </div>
                        </Link>
                    </div>


                </div>
            </div>
            {/* <div class="rightSection">
                Contents
            </div> */}


            <script src="sidebar.js"></script>
        </div>
    )
}

export default Sidebar
