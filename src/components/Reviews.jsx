import './Reviews.css';

import { useState } from 'react';

function Review({title, link, img_path, stars, text}) {
    const image = <>
        <a href={link}>
            <img src={img_path} className='review-img' alt='review'></img>
        </a>
    </>;
    
    return(
        <div className='review'>
            <h2>{title}</h2>
            {image}
            <p>{text}</p>
        </div>
    )
}

function ReviewSection({reviews}) {

    return (
        <div>
            {reviews}
        </div>
    )
}

function Tab({title, handleClick, pageIsOpen}) {
    const tabStyle = {
        backgroundColor: pageIsOpen ? 'white' :'gainsboro',
        'border-bottom': pageIsOpen ? '': 'solid 1px #9282F5',
        'border-right': pageIsOpen ? 'solid 1px #9282F5' : 'solid 1px #999999',
        'border-left': pageIsOpen ? 'solid 1px #9282F5' : 'solid 1px #999999',
        'border-top': pageIsOpen ? 'solid 1px #9282F5' : 'solid 1px #999999',
        'font-size': pageIsOpen ? '20px' : '14px'
    }

    return (
        <div
            className='tab'
            onClick={() => handleClick(title)}
            style={tabStyle}
        >
            {title}
        </div>
    )
}

export default function Reviews() {

    const [openPage, setOpenPage] = useState('books');

    const bookReviews = <>
        <Review title='' link='' img_path='' stars='' text='' />
        <Review title='' link='' img_path='' stars='' text='' />
    </>;
    const gamesReviews = <>
        <Review title='game1' link='' img_path='/static/images/arv_photo.jpg' stars='3' text='this is the text' />
        <Review title='game2' link='' img_path='/static/images/arv_photo.jpg' stars='3' text='this is the text' />
    </>;
    const moviesReviews = <>
        <Review title='' link='' img_path='' stars='' text='' />
        <Review title='' link='' img_path='' stars='' text='' />
    </>;
    const foodReviews = <>
        <Review title='' link='' img_path='' stars='' text='' />
        <Review title='' link='' img_path='' stars='' text='' />
    </>;
    const musicReviews = <>
        <Review title='' link='' img_path='' stars='' text='' />
        <Review title='' link='' img_path='' stars='' text='' />
    </>;

    const handleTabClick = (tabname) => {
        setOpenPage(tabname);
    }

    const tabIsOpen = (tabName) => {
        return tabName === openPage;
    }

    const pageStyle = (tabName) => {
        const style = {
            'display': tabIsOpen(tabName) ? 'block': 'none'
        };
        console.log(style);
        return style;
    }

    return (
        <div className='reviews-page-container'>
            <Tab title='books' handleClick={handleTabClick} pageIsOpen={tabIsOpen('books')} />
            <Tab title='games' handleClick={handleTabClick} pageIsOpen={tabIsOpen('games')} />
            <Tab title='movies' handleClick={handleTabClick} pageIsOpen={tabIsOpen('movies')} />
            <Tab title='food' handleClick={handleTabClick} pageIsOpen={tabIsOpen('food')} />
            <Tab title='music' handleClick={handleTabClick} pageIsOpen={tabIsOpen('music')} />
            <div className='reviews-page'>
                <div className='reviews' style={pageStyle('books')}>
                    <ReviewSection 
                        reviews={bookReviews}
                    />
                </div>
                <div className='reviews' style={pageStyle('games')}>
                    <ReviewSection 
                        reviews={gamesReviews} 
                    />
                </div>
                <div className='reviews' style={pageStyle('movies')}>
                    <ReviewSection 
                        reviews={moviesReviews}
                    />
                </div>
                <div className='reviews' style={pageStyle('food')}>
                    <ReviewSection 
                        reviews={foodReviews} 
                    />
                </div>
                <div className='reviews' style={pageStyle('music')}>
                    <ReviewSection 
                        reviews={musicReviews} 
                    />
                </div>
            </div>
        </div>
    )
}