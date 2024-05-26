import './Reviews.css';
import { useState } from 'react';

function Star({number}) {
    let star = <></>;
    if (number <= 0) {
        star = <i class="fa fa-star-o" style={{color: "#9282F5"}} aria-hidden="true"></i>;
    } else if (number === 0.5) {
        star = <i class="fa fa-star-half-o" style={{color: "#9282F5"}} aria-hidden="true"></i>;
    } else {
        star = <i class="fa fa-star" style={{color: "#9282F5"}} aria-hidden="true"></i>;
    }

    return (
        <>
            {star}
        </>
    )
}

function Rating({number}) {

    return(
        <div className='review-rating'>
            <Star number={number}/>
            <Star number={number-1}/>
            <Star number={number-2}/>
            <Star number={number-3}/>
            <Star number={number-4}/>
        </div>
    )
}


function Review({title, link, img_path, stars, text}) {
    
    return(
        <div className='review'>
            <h2 className='review-title'>{title}</h2>
            <a className='review-image' href={link}>
                <img src={img_path} className='review-img' alt='review'></img>
            </a>
            <Rating number={stars} />
            <p className='review-text'>{text}</p>
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

    const pageStyle = (tabName) => {
        const style = {
            'display': tabIsOpen(tabName) ? 'flex': 'none'
        };
        console.log(style);
        return style;
    }

    const handleTabClick = (tabname) => {
        setOpenPage(tabname);
    }

    const tabIsOpen = (tabName) => {
        return tabName === openPage;
    }

    const bookReviews = <>
        <div className='reviews' style={pageStyle('books')}>
            <Review title='' link='' img_path='' stars='' text='' />
            <Review title='' link='' img_path='' stars='' text='' />
        </div>
    </>;
    const gamesReviews = <>
        <div className='reviews' style={pageStyle('games')}>
            <Review title='game1' link='' img_path='/static/images/arv_photo.jpg' stars='3' text='this is the text' />
            <Review title='game2' link='' img_path='/static/images/arv_photo.jpg' stars='3' text='this is the text' />
            <Review title='game2' link='' img_path='/static/images/arv_photo.jpg' stars='3' text='this is the text' />
            <Review title='game2' link='' img_path='/static/images/arv_photo.jpg' stars='3' text='this is the text' />
        </div>
    </>;
    const moviesReviews = <>
        <div className='reviews' style={pageStyle('movies')}>
            <Review title='' link='' img_path='' stars='' text='' />
            <Review title='' link='' img_path='' stars='' text='' />
        </div>
    </>;
    const foodReviews = <>
        <div className='reviews' style={pageStyle('food')}>
            <Review title='' link='' img_path='' stars='' text='' />
            <Review title='' link='' img_path='' stars='' text='' />
        </div>
    </>;
    const classReviews = <>
    <div className='reviews' style={pageStyle('classes')}>
        <Review title='' link='' img_path='' stars='' text='' />
        <Review title='' link='' img_path='' stars='' text='' />
    </div>
</>;
    const musicReviews = <>
        <div className='reviews' style={pageStyle('music')}>
            <Review title='' link='' img_path='' stars='' text='' />
            <Review title='' link='' img_path='' stars='' text='' />
        </div>
    </>;

    return (
        <div className='reviews-container'>
            <div className='header-container'>
                <h1>reviews</h1>
                <div className='staggered-lines'>
                    <div className='top-line'></div>
                    <div className='bottom-line'></div>
                </div>
            </div>
            <div className='reviews-page-container'>
                <Tab title='books' handleClick={handleTabClick} pageIsOpen={tabIsOpen('books')} />
                <Tab title='games' handleClick={handleTabClick} pageIsOpen={tabIsOpen('games')} />
                <Tab title='movies' handleClick={handleTabClick} pageIsOpen={tabIsOpen('movies')} />
                <Tab title='food' handleClick={handleTabClick} pageIsOpen={tabIsOpen('food')} />
                <Tab title='classes' handleClick={handleTabClick} pageIsOpen={tabIsOpen('classes')} />
                <Tab title='music' handleClick={handleTabClick} pageIsOpen={tabIsOpen('music')} />
                <div className='reviews-page'>
                    <ReviewSection 
                        reviews={bookReviews}
                    />
                    <ReviewSection 
                        reviews={gamesReviews} 
                    />
                    <ReviewSection 
                        reviews={moviesReviews}
                    />
                    <ReviewSection 
                        reviews={foodReviews} 
                    />
                    <ReviewSection 
                        reviews={classReviews} 
                    />
                    <ReviewSection 
                        reviews={musicReviews} 
                    />
                </div>
            </div>
        </div>
    )
}