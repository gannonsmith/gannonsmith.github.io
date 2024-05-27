import './Projects.css';

function Project({icon, title, text}) {

    return (
        <div className='project-container'>
            <div className='project'>
                <i class={icon} style={{color: "#9282F5"}}></i>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <div className='projects'>
            <div className='header-container'>
                <h1>projects</h1>
                <div className='staggered-lines'>
                    <div className='top-line'></div>
                    <div className='bottom-line'></div>
                </div>
            </div>
            
            <div className='projects-container'>
                <Project icon='fa-solid fa-mobile-screen-button fa-2xl' title='Bubble' text='Developer for open source, end-to-end encrypted app using Rust, React Native, and PostgreSQL allowing users to form
                            groups, send chat messages, and track locations. Worked on the backend and frontend of the app, developing routes and models
                            from scratch using MLS protocol. Collaborated in designing project architecture and developed the user authentication process.'/>
                <Project icon='fa-solid fa-laptop-code fa-2xl' title='Portfolio Website' text='This website! Developed from scratch using HTML/CSS, Javascript, and React.'/>
                <Project icon='fa-solid fa-diagram-project fa-2xl' title='TSP' text='Travelling Sales-Person Problem solution using Branch and Bound technique. '/>
            </div>
        </div>
    )
}