import React, { useState } from 'react'
import './index.scss'
export default function LeftComponent() {
    const [activeTab, setActiveTab] = useState('details')

    
    return(
        <>
            <div className='left-component'>
                <div className='inner-header'>
                    <button onClick={()=>setActiveTab('details')} className={activeTab === 'details' && 'active'}>Details</button>
                    <button onClick={()=>setActiveTab('delivery')} className={activeTab === 'delivery' && 'active'}>Delivery</button>
                    <button onClick={()=>setActiveTab('fit')} className={activeTab === 'fit' && 'active'}>Fit</button>
                    <button onClick={()=>setActiveTab('share')} className={activeTab === 'share' && 'active'}>Share</button>
                </div>
                <div className='left-content'>
               
                    {
                        activeTab === "details" &&
                        <>
                            <p>The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.</p>
                            
                            <p>See the <a href="/">EDITOR’S NOTE</a></p>
                            <p>Learn about the <a href="/">DESIGNER</a></p>
                        </>
                    }
                    { 
                        activeTab === "delivery" && 
                        <>
                            <p>Quisque quis libero condimentum, pulvinar quam et, fermentum leo. Suspendisse dignissim nec nulla non hendrerit. Suspendisse a nibh ac neque placerat elementum eget ac eros.</p>
                        </>
                    }
                    { 
                        activeTab === "fit" && 
                        <>
                            <p>Donec semper volutpat blandit. Sed gravida, mauris ut pharetra hendrerit, augue dolor convallis nisi, et euismod mauris erat et elit. Mauris dictum orci elit, nec maximus dui efficitur ut. Proin ligula lectus, rutrum ut eros non, rhoncus sodales ligula. Aliquam dignissim nec orci vitae tempus.</p>
                        </>
                    }
                    { 
                        activeTab === "share" && 
                        <>
                            <p>Nulla a odio odio. Morbi at urna dolor. Nulla dapibus nulla in nisl rutrum vestibulum at in felis. Maecenas fringilla ultrices tincidunt. Proin ullamcorper nisi vel tempus blandit.</p>
                        </>
                    }
                </div>
            </div>
        </>
    )
}