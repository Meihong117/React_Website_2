import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src='../assets/img-1.jpg' text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/services' /> 
                        <CardItem src='../assets/img-2.jpg' text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/services' /> 
                    </ul>
                    <ul className="cards__items">
                        <CardItem src='../assets/img-1.jpg' text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/services' /> 
                        <CardItem src='../assets/img-2.jpg' text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/products' />   
                        <CardItem src='../assets/img-3.jpg' text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/sign-up' />        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
