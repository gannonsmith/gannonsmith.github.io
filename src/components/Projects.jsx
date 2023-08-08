import './Projects.css';

export default function Projects() {
    return (
        <div className='projects'>
            <div className='header-container'>
                <h1>
                    Projects
                    <br></br>
                    <div className='staggered-lines'>
                        <div className='top-line'></div>
                        <div className='bottom-line'></div>
                    </div>
                </h1>
            </div>
            
            <div className='projects-container'>
                <div className='project-container'>
                    <div className='project'>
                        <i class="fa-solid fa-mobile-screen-button fa-2xl" style={{color: "#9282F5"}}></i>
                        <h3>Bubble</h3>
                        <p>
                            Developer for open source, end-to-end encrypted app using Rust, React Native, and PostgreSQL allowing users to form
                            groups, send chat messages, and track locations. Worked on the backend and frontend of the app, developing routes and models
                            from scratch using MLS protocol. Collaborated in designing project architecture and developed the user authentication process.
                        </p>
                    </div>
                </div>
                <div className='project-container'>
                    <div className='project'>
                        <i class="fa-solid fa-laptop-code fa-2xl" style={{color: "#9282F5"}}></i>
                        <h3>Portfolio Website</h3>
                        <p>
                            This website! Developed from scratch using HTML/CSS, Javascript, and React.
                        </p>
                    </div>
                </div>
                <div className='project-container'>
                    <div className='project'>
                        <i class="fa-solid fa-diagram-project fa-2xl" style={{color: "#9282F5"}}></i>
                        <h3>TSP</h3>
                        <p>
                           Travelling Sales-Person Problem solution using Branch and Bound technique. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}