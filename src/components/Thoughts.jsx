import './Thoughts.css';

import { useState } from 'react';

function Thought({image_path, title, text}) {

    const [open, setOpen] = useState(false);

    const textStyle = {
        'display': open ? 'block' : 'none'
    };

    const handleClick = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    return (
        <div className='thought' onClick={handleClick}>
            <img src={image_path} className='thought-img' alt='thought'></img>
            <div className='thought-title'>
                <h2>{title}</h2>
            </div>
            <div className='arrow-container'>
                {open ? <i class="fa-solid fa-angle-down fa-xl"></i>: <i class="fa-solid fa-angle-up fa-xl"></i>}
            </div>
            <div className='thought-text' style={textStyle}>
                {text}
            </div>
        </div>
    )
}

export default function Thoughts() {

    const thoughts = <div className='thoughts-body-container'>
        <Thought image_path='/static/images/arv_photo.jpg' title='Title' text='this is where the text would go' />
        <Thought image_path='/static/images/arv_photo.jpg' title='Title' text='this is where the text would go' />
        <Thought image_path='/static/images/arv_photo.jpg' title='Title' text='this is where the text would go' />
        <Thought image_path='/static/images/arv_photo.jpg' title='Title' text='this is where the text would go' />
    </div>;

    return (
        <div className='thoughts-page-container'>
            <div className='header-container'>
                <h1>thoughts</h1>
                <div className='staggered-lines'>
                    <div className='top-line'></div>
                    <div className='bottom-line'></div>
                </div>
            </div>
            {thoughts}
        </div>
    )
}