import React from 'react'
import ImageComponent from './components/ImageComponent'
import LeftComponent from './components/LeftComponent'
import RightComponent from './components/RightComponent'
import EditorNotes from './components/EditorNotes'

export default function Landing(){
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-4 col-sm-12'>
                        <LeftComponent />
                    </div>
                    <div className='col-lg-6 col-md-4 col-sm-12'>
                        <ImageComponent />
                        <EditorNotes />
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-12'>
                        <RightComponent />
                    </div>
                </div>
            </div>
        </>
    )
}