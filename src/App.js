import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import img from './i.jpg'

const App = () => {


  return (
    <div className='image'>
      <ReactImageMagnify {...{
        smallImage: {
          alt: 'hii',
          isFluidWidth: true,
          src: img
        },
        largeImage: {
          src: img,
          width: 800,
          height: 800
        },
        isHintEnabled: true,
        enlargedImagePosition: 'over'

      }} />
    </div >
  )
}

export default App
