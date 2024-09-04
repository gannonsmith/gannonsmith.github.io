import './Home.css';
//import Section from './Section';

export default function Home() {
    
    return (
        <div className='main-container'>
            <div className='nav'>
                <span className='nav-title'>Gannon Smith</span>
            </div>
            <div className='page'>
                <img className='pan' src='/static/images/acadia_pan.png' alt='panorama in Acadia'/>   
                <div className='introduction'>
                    <div className='introduction-text'>
                        <div style={{'font-size': 'xx-large', 'font-weight': '400'}}>
                            Hey, I'm Gannon.
                        </div>
                        <div style={{'font-size': 'large', 'font-weight': '300'}}>
                            I'm a student at the University of Michigan studying Computer Science Engineering.
                        </div>
                        <div style={{'font-size': 'medium', 'font-weight': '200'}}>
                            A little more about me.
                        </div>
                    </div>
                    <div className='img-container'>
                        <img className='introduction-image' src='/static/images/maine_selfie.jpg' alt='selfie on a lake in Acadia'/>
                    </div>
                </div>
            </div>
        </div>
    )
}