import './Reviews.css';

import { useState } from 'react';

function Review({title, link, img_path, stars, text, hovered}) {
    const image = <>
        <a href={link}>
            <img src={img_path} className='review-img' alt='review'></img>
        </a>
    </>;
    
    return(
        <div className='review'>
            <h2>{title}</h2>
            {hovered ? image : <></>}
            {hovered ? <p>{text}</p> : <></>}
        </div>
    )
}

function ReviewSection({title, reviews}) {

    return (
        <div>
            <h2>{title}</h2>
            {reviews}
        </div>
    )
}

export default function Reviews() {

    const [isHover, setIsHover] = useState(false);
    
    const [booksHovered, setBooksHovered] = useState(false);
    const [gamesHovered, setGamesHovered] = useState(false);
    const [moviesHovered, setMoviesHovered] = useState(false);
    const [foodHovered, setFoodHovered] = useState(false);
    const [musicHovered, setMusicHovered] = useState(false);

    const book_reviews = <>
        <Review 
            title='TITLE'
            link='https://google.com'
            img_path='/static/images/arv_photo.jpg'
            stars={5}
            text='this is where the text would go'
            hovered={booksHovered}
        />
    </>
    const game_reviews = <>
        <Review 
            title='TITLE'
            link='https://google.com'
            img_path='/static/images/arv_photo.jpg'
            stars={5}
            text='this is where the text would go'
            hovered={gamesHovered}
        />
    </>
    const movie_reviews = <>
        <Review 
            title='TITLE'
            link='https://google.com'
            img_path='/static/images/arv_photo.jpg'
            stars={5}
            text='this is where the text would go'
            hovered={moviesHovered}
        />
    </>
    const food_reviews = <>
        <Review 
            title='TITLE'
            link='https://google.com'
            img_path='/static/images/arv_photo.jpg'
            stars={5}
            text='this is where the text would go'
            hovered={foodHovered}
        />
    </>
    const music_reviews = <>
        <Review 
            title='TITLE'
            link='https://google.com'
            img_path='/static/images/arv_photo.jpg'
            stars={5}
            text='this is where the text would go'
            hovered={musicHovered}
        />
    </>


    

    function handleMouseEnter(tab) {
        setIsHover(true);
        setBooksHovered(false);
        setGamesHovered(false);
        setMoviesHovered(false);
        setFoodHovered(false);
        setMusicHovered(false);
        if (tab === 'books') {
            setBooksHovered(true);
        } else if (tab === 'games') {
            setGamesHovered(true);
        } else if (tab === 'movies') {
            setMoviesHovered(true);
        } else if (tab === 'food') {
            setFoodHovered(true);
        } else if (tab === 'music') {
            setMusicHovered(true);
        }
    }


    function panelStyle(tab) {
        let hover_var = false;
        if (tab === 'books') {
            hover_var = booksHovered;
        } else if (tab === 'games') {
            hover_var = gamesHovered;
        } else if (tab === 'movies') {
            hover_var = moviesHovered;
        } else if (tab === 'food') {
            hover_var = foodHovered;
        } else if (tab === 'music') {
            hover_var = musicHovered;
        }
        return {
            'background-color': hover_var ? 'gainsboro' : ( isHover ? '#aaaaaa': 'gainsboro'),
            'grid-column': hover_var ? 'span 11' : (isHover ? 'span 1': 'span 3')
        }
    }

    return (
        <div 
            id='reviews-page-container'
        >
            <div
                className='reviews-page'
                onClick={() => handleMouseEnter('')}
            >
                <div 
                    className='review-panel'
                    style={panelStyle('books')}
                    onClick={() => handleMouseEnter('books')}
                >
                    <ReviewSection title='books' reviews={book_reviews} />
                </div>
                <div
                    className='review-panel'
                    style={panelStyle('games')}
                    onClick={() => handleMouseEnter('games')}
                >
                    <ReviewSection title='games' reviews={game_reviews} />
                </div>
                <div
                    className='review-panel'
                    style={panelStyle('movies')}
                    onClick={() => handleMouseEnter('movies')}
                >
                    <ReviewSection title='movies' reviews={movie_reviews} />
                </div>
                <div
                    className='review-panel'
                    style={panelStyle('food')}
                    onClick={() => handleMouseEnter('food')}
                >
                    <ReviewSection title='food' reviews={food_reviews} />
                </div>
                <div
                    className='review-panel'
                    style={panelStyle('music')}
                    onClick={() => handleMouseEnter('music')}
                >
                    <ReviewSection title='music' reviews={music_reviews} />
                </div>
            </div>
        </div>
    )
}