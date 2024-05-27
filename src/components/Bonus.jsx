import './Bonus.css';

function BonusItem({title, text}) {

    return (
        <div className='bonus'>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default function Bonus() {
    return (
        <div className='bonus-page-container'>
            <div className='header-container'>
                <h1>bonus</h1>
                <div className='staggered-lines'>
                    <div className='top-line'></div>
                    <div className='bottom-line'></div>
                </div>
            </div>
            <div className='bonus-container'>
                <BonusItem title='title' text='text' />
                <BonusItem title='title' text='text' />
                <BonusItem title='title' text='text' />
                <BonusItem title='title' text='text' />
            </div>
        </div>
    )
}