import React, {useState} from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {Slidedata} from './Slidedata'


    
    const Slide = ({ slides}) => {
        const [current, setCurrent] = useState(0);
        const length = slides.length;
        const nextSlide = () => {
            setCurrent(current === length -1 ? 0: current + 1);
        };
        const prevSlide = () => {
            setCurrent(current === 0? length -1: current-1);

        };
        if (!Array.isArray(slides) || slides.length <=0 ){
            return null;
        }
    


    return (
        <section className="slider">
            <NavigateBeforeIcon className='left-arrow' onClick={prevSlide} />
            <NavigateNextIcon className='right-arrow' onClick={nextSlide} />
            {Slidedata.map((slide,index) => {
                return(
                    <div className={index === current? 'slide-active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt='travel image' className='slide-image' />)}
                    </div>  
                );
            
            })}
        </section>
    )
    }


export default Slide
