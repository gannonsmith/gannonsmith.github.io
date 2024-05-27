import './Bonus.css';

function Quote({author, quote}) {
    return (
        <div className='quote-container'>
            <div className='quote'>
                "{quote}"
            </div>
            <div className='author'>
                {author}
            </div>
        </div>
    )
}

function BonusItem({title, media}) {

    return (
        <div className='bonus'>
            <h2>{title}</h2>
            {media}
        </div>
    )
}

export default function Bonus() {
    const bonusMaterial = <div className='bonus-container'>
        <BonusItem
            title='on repeat'
            media={<iframe title='spotify-on-repeat' style={{'border-radius':'12px'}} src="https://open.spotify.com/embed/playlist/37i9dQZF1EpgRdGtEETCFR?utm_source=generator&theme=0" width="100%" height="85%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>}
        />
        <BonusItem
            title='quotes'
            media={<>
                <Quote author='Mark Brehob' quote='bits are bits' />
            </>}
        />
    </div>

    return (
        <div className='bonus-page-container'>
            <div className='header-container'>
                <h1>bonus</h1>
                <div className='staggered-lines'>
                    <div className='top-line'></div>
                    <div className='bottom-line'></div>
                </div>
            </div>
            {bonusMaterial}
        </div>
    )
}