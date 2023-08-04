import './Portfolio.css';

export default function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='header-container'>
                <h1>
                    Portfolio
                    <br></br>
                    <div className='staggered-lines'>
                        <div className='top-line'></div>
                        <div className='bottom-line'></div>
                    </div>
                </h1>
            </div>
            
            <div className='projects-container'>
                Projects
            </div>
        </div>
    )
}