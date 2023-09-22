import React from 'react'
import Image1 from './../../../assets/images/img1.png'
import Image2 from './../../../assets/images/img2.png'
import Image3 from './../../../assets/images/img3.png'
import Image4 from './../../../assets/images/img4.png'
import Image5 from './../../../assets/images/img5.png'

import './index.scss'
export default function ImageComponent() {
    return(
        <div className='img-component'>
            <div>
                <img src={Image1} alt="Slider 1" />
            </div>

            <div>
                <img src={Image2} alt="Slider 2"/>
            </div>

            <div>
                <img src={Image3} alt="Slider 3"/>
            </div>

            <div>
                <img src={Image4} alt="Slider 4"/>
            </div>

            <div>
                <img src={Image5} alt="Slider 5"/>
            </div>
        </div>
    )
}