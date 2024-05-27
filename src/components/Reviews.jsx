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


function Review({title, date, link, img_path, stars, text}) {
    
    return(
        <div className='review'>
            <h2 className='review-title'>{title}</h2>
            <div className='review-date'>
                <br></br>
                {date}
            </div>
            <a className='review-image' href={link} target='_blank' rel='noreferrer'>
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
            <Review title='' date='' link='' img_path='' stars='' text='' />
            <Review title='' date='' link='' img_path='' stars='' text='' />
        </div>
    </>;
    const gamesReviews = <>
        <div className='reviews' style={pageStyle('games')}>
            <Review title='game1' date='' link='' img_path='/static/images/arv_photo.jpg' stars='3' text='this is the text' />
            <Review title='game2' date='' link='' img_path='/static/images/arv_photo.jpg' stars='3' text='this is the text' />
            <Review title='game2' date='' link='' img_path='/static/images/arv_photo.jpg' stars='3' text='this is the text' />
            <Review title='game2' date='' link='' img_path='/static/images/arv_photo.jpg' stars='3' text='this is the text' />
        </div>
    </>;
    const moviesReviews = <>
        <div className='reviews' style={pageStyle('movies')}>
            <Review title='' date='' link='' img_path='' stars='' text='' />
            <Review title='' date='' link='' img_path='' stars='' text='' />
        </div>
    </>;
    const foodReviews = <>
        <div className='reviews' style={pageStyle('food')}>
            <Review title='Gomez Salsa' date='May 2024' link='https://www.gomezsalsa.com/' img_path='/static/images/food/gomez-logo.jpg' stars={5} text={<>Cincinnati, OH<br></br><br></br>go for the turtle, it is cheesy crunchwrap deliciousness.</>} />
            <Review title='Skyline Chili' date='' link='https://www.skylinechili.com/' img_path='/static/images/food/skyline-chili-logo.jpg' stars={2.5} text={<>Cincinnati, OH<br></br><br></br>es okay, chili is a bit bland but it is cheap and good comfort food.</>}/>
            <Review title='' date='' link='' img_path='' stars='' text='' />
            <Review title='Frita Batidos' date='' link='https://fritabatidos.com/' img_path='/static/images/food/frita-batidos-logo.jpg' stars={4.5} text={<>Ann Arbor, MI<br></br><br></br>love the messy burgers, would recommend getting as many additions as you can afford. make sure to get the passion fruit batido.</>} />
        </div>
    </>;
    const classReviews = <>
    <div className='reviews' style={pageStyle('classes')}>
        <Review title='' date='' link='' img_path='' stars='' text='' />
        <Review title='' date='' link='' img_path='' stars='' text='' />
    </div>
</>;
    const showReviews = <>
        <div className='reviews' style={pageStyle('shows')}>
            <Review title='Shogun' date='May 2024' link='https://en.wikipedia.org/wiki/Sh%C5%8Dgun_(2024_TV_series)' img_path='/static/images/shows/shogun-poster.webp' stars={5} text='in progress' />
            <Review title='' date='' link='' img_path='' stars='' text='' />
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
                <div className='tabs'>
                    <Tab title='books' handleClick={handleTabClick} pageIsOpen={tabIsOpen('books')} />
                    <Tab title='games' handleClick={handleTabClick} pageIsOpen={tabIsOpen('games')} />
                    <Tab title='movies' handleClick={handleTabClick} pageIsOpen={tabIsOpen('movies')} />
                    <Tab title='shows' handleClick={handleTabClick} pageIsOpen={tabIsOpen('shows')} />
                    <Tab title='food' handleClick={handleTabClick} pageIsOpen={tabIsOpen('food')} />
                    <Tab title='classes' handleClick={handleTabClick} pageIsOpen={tabIsOpen('classes')} />
                </div>
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
                        reviews={showReviews} 
                    />
                </div>
            </div>
        </div>
    )
}