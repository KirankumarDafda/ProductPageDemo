import React from 'react'
import './header.scss'

import Account from './../../../assets/images/Account.png'
import Bag from './../../../assets/images/Bag.png'
import Search from './../../../assets/images/Search.png'

export default function Header() {
    return(
        <>
            <div className='container header'>
                <div className='row'>
                    <div className='col-lg-2 col-md-3 col-sm-12'>
                        <h1>MY COMPANY.COM</h1>
                    </div>
                    <div className='col-lg-8 col-md-6 col-sm-12'>
                        <ul>
                            <li><a href="/comingsoon">The Edit</a></li>
                            <li><a href="/comingsoon">New Arrivals</a></li>
                            <li><a href="/comingsoon">Designers</a></li>
                            <li><a href="/comingsoon">Clothings</a></li>
                            <li><a href="/comingsoon">Shoes</a></li>
                            <li><a href="/comingsoon">Bags</a></li>
                            <li><a href="/comingsoon">Accesories</a></li>
                            <li><a href="/comingsoon">Jewelry</a></li>
                            <li><a href="/comingsoon">Beauty</a></li>
                            <li><a href="/home">Home</a></li>
                        </ul> 
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-12'>
                        <div className='right-icons'>
                            <img src={Search} alt="Search" />
                            <img src={Bag} alt="Bag" />
                            <img src={Account} alt="Account" />
                        </div>
                    </div>
                </div>
            </div>
             
        </>
    )
}