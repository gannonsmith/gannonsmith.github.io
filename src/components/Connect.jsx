import './Connect.css';

export default function Connect() {
    return (
        <div className="connect">
            <div className='connect-header'>
                <h1 id='contact-me'>Contact Me</h1>
            </div>
            <div className='connect-info-container'>
                <div className='info-block-container'>
                    <div className='info-block' id='email-info'>
                        <i class='fa-solid fa-envelope fa-xl' style={{color: "#9282F5"}}></i><br></br>
                        Email
                    </div>
                    <div className='info-block' id='location-info'>
                        <i class="fa-solid fa-location-dot fa-xl" style={{color: "#9282F5"}}></i><br></br>
                        Location
                    </div>
                    <div className='info-block' id='phone-info'>
                        <i class="fa-solid fa-mobile-screen fa-xl" style={{color: "#9282F5"}}></i><br></br>
                        Phone
                    </div>
                    <div className='info-block' id='linkedin-info'>
                        <i class="fa-solid fa-circle-user fa-xl" style={{color: "#9282F5"}}></i><br></br>
                        LinkedIn
                    </div>
                    <div className='info-block' id='website-info'>
                        <i class='fa-solid fa-globe fa-xl' style={{color: "#9282F5"}}></i><br></br>
                        Website
                    </div>
                    <div className='info-block' id='github-info'>
                        <i class="fa-solid fa-code-branch fa-xl" style={{color: "#9282F5"}}></i><br></br>
                        Github
                    </div>
                </div>
                
            </div>
        </div>
    );
}