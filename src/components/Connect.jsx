import './Connect.css';

export default function Connect() {
    return (
        <div className="connect">
            <div className='connect-header'>
                <h1>
                    Contact Me
                    <br></br>
                    <div className='staggered-lines'>
                        <div className='top-line'></div>
                        <div className='bottom-line'></div>
                    </div>
                </h1>
            </div>
            <div className='connect-info-container'>
                <div className='info-block-container'>
                    <div className='info-block' id='email-info'>
                        <div className='icon-container'>
                            <i class='fa-solid fa-envelope fa-xl' style={{color: "#9282F5"}}></i>
                        </div>
                        <div className='type-container'>
                            Email
                        </div>
                        <div className='description-container'>
                            gannonsmithr@gmail.com
                        </div>
                    </div>

                    <div className='info-block' id='location-info'>
                        <div className='icon-container'>
                            <i class="fa-solid fa-location-dot fa-xl" style={{color: "#9282F5"}}></i>
                        </div>
                        <div className='type-container'>
                            Location
                        </div>
                        <div className='description-container'>
                            United States
                        </div>
                    </div>
                    <div className='info-block' id='phone-info'>
                        <div className='icon-container'>
                            <i class="fa-solid fa-mobile-screen fa-xl" style={{color: "#9282F5"}}></i>
                        </div>
                        <div className='type-container'>
                            Phone
                        </div>
                        <div className='description-container'>
                            906-322-6919
                        </div>
                    </div>
                    <div className='info-block' id='linkedin-info'>
                        <div className='icon-container'>
                            <i class="fa-solid fa-circle-user fa-xl" style={{color: "#9282F5"}}></i>
                        </div>
                        <div className='type-container'>
                            LinkedIn
                        </div>
                        <div className='description-container'>
                            <a className='contact-link' href="https://www.linkedin.com/in/gannonsmith/">gannonsmith</a>
                        </div>
                    </div>
                    <div className='info-block' id='website-info'>
                        <div className='icon-container'>
                            <i class='fa-solid fa-globe fa-xl' style={{color: "#9282F5"}}></i>
                        </div>
                        <div className='type-container'>
                            Website
                        </div>
                        <div className='description-container'>
                            <a className='contact-link' href="https://gannonsmith.github.io/">gannonsmith.github.io</a>
                        </div>
                    </div>
                    <div className='info-block' id='github-info'>
                        <div className='icon-container'>
                            <i class="fa-solid fa-code-branch fa-xl" style={{color: "#9282F5"}}></i>
                        </div>
                        <div className='type-container'>
                            Github
                        </div>
                        <div className='description-container'>
                            <a className='contact-link' href="https://github.com/gannonsmith">gannonsmith</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}