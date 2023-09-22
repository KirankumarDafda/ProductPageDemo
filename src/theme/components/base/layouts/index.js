import React from 'react'
import Header from './Header'
import './header.scss'
export default function Layout({ children }){
    return(
        <>
            <div className='layout'>
                <Header />
                {children}
            </div>
        </>
    )
}