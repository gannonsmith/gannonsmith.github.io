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
            <h3 className='review-title'>{title}</h3>
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

    // Review Template: <Review title='' date='' link='' img_path='' stars={} text={} />

    const bookReviews = <>
        <div className='reviews' style={pageStyle('books')}>
            <Review title='The Fellowship of the Ring' date='J.R.R Tolkien' link='https://en.wikipedia.org/wiki/The_Fellowship_of_the_Ring#:~:text=The%20Fellowship%20of%20the%20Ring%20consists%20of%20nine,Gondor%3B%20the%20Elf%20Legolas%3B%20and%20the%20Dwarf%20Gimli.' img_path='/static/images/books/LOTR-1-cover.jpg' stars={5} text={<><br></br>in progress</>} />
        </div>
    </>;
    const gamesReviews = <>
        <div className='reviews' style={pageStyle('games')}>
            <Review title='Dead Cells' date='May 2024' link='https://en.wikipedia.org/wiki/Dead_Cells' img_path='/static/images/games/dead-cells-cover.jpg' stars={4.5} text={<>great roguelike, still only on 1 bc</>} />
            <Review title='Red Dead Redemption 2' date='May 2024' link='https://www.rockstargames.com/reddeadredemption2/' img_path='/static/images/games/rdr2-logo.jpg' stars={5} text={<>hall of fame game, currently replaying for 100%</>} />
            <Review title='Fallout 4' date='May 2024' link='https://en.wikipedia.org/wiki/Fallout_4' img_path='/static/images/games/fallout-4-logo.png' stars={4.5} text={<></>} />
        </div>
    </>;
    const moviesReviews = <>
        <div className='reviews' style={pageStyle('movies')}>
            <Review title='Insert fire movie here' date='' link='' img_path='' stars='' text='' />
        </div>
    </>;
    const foodReviews = <>
        <div className='reviews' style={pageStyle('food')}>
            <Review title='Gomez Salsa' date='May 2024' link='https://www.gomezsalsa.com/' img_path='/static/images/food/gomez-logo.jpg' stars={5} text={<>Cincinnati, OH<br></br><br></br>go for the turtle, it is a crazy good cheesy crunchwrap.</>} />
            <Review title='Skyline Chili' date='' link='https://www.skylinechili.com/' img_path='/static/images/food/skyline-chili-logo.jpg' stars={3} text={<>Cincinnati, OH<br></br><br></br>es okay, chili is a bit bland but it is cheap and filling.</>}/>
            <Review title='Frita Batidos' date='' link='https://fritabatidos.com/' img_path='/static/images/food/frita-batidos-logo.jpg' stars={4.5} text={<>Ann Arbor, MI<br></br><br></br>love the messy burgers, would recommend getting as many additions as you can afford. i love the passion fruit batido.</>} />
        </div>
    </>;
    const classReviews = <>
    <div className='reviews' style={pageStyle('classes')}>
        <Review title='Advanced Operating Systems' date='May 2024' link='' img_path='/static/images/classes/eecs482-logo.png' stars={5} text={<>great class, learned a lot about os and project management. a must-take at michigan and a real grind.</>} />
    </div>
</>;
    const showReviews = <>
        <div className='reviews' style={pageStyle('shows')}>
            <Review title='Shogun' date='May 2024' link='https://en.wikipedia.org/wiki/Sh%C5%8Dgun_(2024_TV_series)' img_path='/static/images/shows/shogun-poster.webp' stars={5} text='in progress' />
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