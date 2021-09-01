import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
// Most React apps will have their files “bundled” using tools like Webpack, Rollup or Browserify. 
import Img1 from '../assets/img-1.jpg'
import Img2 from '../assets/img-2.jpg'
import Img3 from '../assets/img-3.jpg'


function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={Img1} text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/services' /> 
                        <CardItem src={Img2} text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/services' /> 
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={Img1} text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/services' /> 
                        <CardItem src={Img2} text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/products' />   
                        <CardItem src={Img3} text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/sign-up' />        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
