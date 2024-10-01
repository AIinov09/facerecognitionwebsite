    import React from "react";
import './ImageLinkForm.css'
const ImageLinkForm= ({onInputChange , onButtonSubmit}) => {
    return (
      <div className='ma4 mt0 '>
        <p className='f3'>
            {'this magic samurai will detect your mugs'
            }
        </p>
          <div className='center'>
              <div className=' form center pa4 br3 shadow-5 '>
              <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}  />
              <button className='w-30 grow f4 link ph4 pv2 dib white bg-dark-red hover-bg-dark-green' onClick={onButtonSubmit}>Detect </button>
          </div>
          </div>
      </div>
    );
}
export default ImageLinkForm;