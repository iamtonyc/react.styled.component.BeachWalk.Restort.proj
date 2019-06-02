import React from 'react'
import Hero from '../globals/Hero'
import Banner from '../globals/Banner'
import aboutImg from '../../images/aboutBcg.jpeg'
import homeImg from '../../images/homeBcg.jpeg'
import {PrimaryBtn} from '../globals/Buttons'


const Header=() => {
    return (
        <Hero img={homeImg}>
            <Banner 
                greeting="Welcome to " 
                title="Beachwalk Restort"
                text="Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. 
                    Quam at, quaerat enim natus quia ea."
            >
            <PrimaryBtn t="1rem">View Details</PrimaryBtn>
            {/* <PrimaryBtn as="a" 
                href="http://www.google.com">View Details</PrimaryBtn> */}
            </Banner>
           
        </Hero>
    )
}


export default Header