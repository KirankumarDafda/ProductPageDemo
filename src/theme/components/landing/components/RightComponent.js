import React, { useState } from 'react'
import './index.scss'

import Image1 from './../../../assets/images/img1.png'
import Image2 from './../../../assets/images/img2.png'

export default function RightComponent() {

    const [colorOption, setColorOption] = useState('option1')
    const [sizeValue, setSizeValue] = useState('L')
    return(
        <>
            <div className='right-component'>
                <div>
                    <div className='title-name'>JONATHAN SIMKHAI</div>
                    <div className='sub-line'>Lurex Linen Viscose Jacket in Conchiglia</div>
                    <div className='price'>$225</div>
                    <div className='color-options'>
                        <div className={colorOption === 'option1' ? 'options active' : 'options'} onClick={()=>setColorOption('option1')}>
                            <div className='optiontitle'>Color</div>
                            <div className='optionimage'>
                                <img src={Image1} alt="color" />
                            </div>
                        </div>
                        <div className={colorOption === 'option2' ? 'options active' : 'options'} onClick={()=>setColorOption('option2')}>
                            <div className='optiontitle'>Conchiglia</div>
                            <div className='optionimage'>
                                <img src={Image2} alt="Conchiglia" />
                            </div>
                        </div>
                        <div className='clear'></div>
                    </div>
                    <div className='size-options'>
                        <div className='size-title'>
                            <div className='size-t'><span>Size</span> {sizeValue}</div>
                            <div className='size-guide'><a href="/">SIZE GUIDE</a></div>
                        </div>
                        <div className='size-option-list'>
                            <div 
                                className={sizeValue === 'XS' ? 'size-o active' : 'size-o'}
                                onClick={()=>setSizeValue('XS')}
                            >XS</div>
                            <div 
                                className={sizeValue === 'S' ? 'size-o active' : 'size-o'}
                                onClick={()=>setSizeValue('S')}
                            >S</div>
                            <div className='size-o no-sel'>
                                M
                                <div className='line'></div>
                            </div>
                            <div 
                                className={sizeValue === 'L' ? 'size-o active' : 'size-o'}
                                onClick={()=>setSizeValue('L')}
                            >L</div>
                            <div 
                                className={sizeValue === 'XXL' ? 'size-o active' : 'size-o'}
                                onClick={()=>setSizeValue('XXL')}
                            >XXL</div>
                        </div>
                    </div>
                    <div className='add-to-bg-container'>
                        <button>ADD TO BAG</button>
                    </div>

                    <div className='sub-line'>Get 4 interest-free payments of $196.25 with Klarna <a href="/">LEARN MORE</a></div>
                    <div className='sub-line mt-2'>Speak to a Personal Stylist <a href="/">CHAT NOW</a></div>
                </div>
            </div>
        </>
    )
}