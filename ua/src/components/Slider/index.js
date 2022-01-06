import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'

import SectionHead from '../../elements/SectionHeading'
import Slide from '../../elements/Slide'
import { ContainerFluid } from '../../globalStyle'
import { slidesData } from '../../data/SlidesData'

import './index.scss'



const SliderBody = styled.div`
    @media(min-width: 1241px) {
        min-width: ${({ slidesCount }) => slidesCount ? slidesCount+'00%' : '100%'};
        display: flex;
        align-items: center;
        min-height: 90vh;
        max-height: 90vh;
        flex-wrap: nowrap;
    }
    @media(max-width: 1240px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`

const Slider = () => {

    useEffect(() => {

        ScrollTrigger.matchMedia({
            "(max-width: 1240px)": function() {

                const sliderTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".slider-section__body",
                        start: "-=1500"
                    }
                })

                // SLIDE 1
                sliderTimeline.from('.slide-1 .slide__image', {scale: 0, duration: 3}, 0)
                sliderTimeline.to('.slide-1 .back', {width: '0', duration: 2}, 0)
                sliderTimeline.to('.slide-1 ._slide-line', {scaleX: 1, duration: 2}, 0)
                

                // SLIDE 2
                sliderTimeline.from('.slide-2 .slide__image', {scale: 0, duration: 3}, 1)
                sliderTimeline.to('.slide-2 .back', {width: '0', duration: 2}, 1)
                sliderTimeline.to('.slide-2 ._slide-line', {scaleX: 1, duration: 2}, 1)
            },
            "(min-width: 1241px)": function() {
                let slides = gsap.utils.toArray(".slide");

                let totalSlides = slides.length

                if(totalSlides < 1) totalSlides = 1

                const sliderTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".slider-section__body",
                        pin: true,
                        scrub: 1,
                        start: "-=50",
                        end: `+=${totalSlides * 3}000`
                    }
                })

                // SLIDE 1
                sliderTimeline.from('.slide-1', {opacity: 0.5, duration: 3}, 0)
                sliderTimeline.from('.slide-1 .slide__image', {scale: 0.9, duration: 3}, 0)
                sliderTimeline.to('.slide-1 .back', {width: '0', duration: 2}, '>')
                sliderTimeline.to('.slide-1 ._slide-line', {scaleX: 1, duration: 2}, '<')
                sliderTimeline.to('.slide-1', { xPercent: -118, duration: 4 });
                

                // SLIDE 2
                sliderTimeline.to('.slide-2', { xPercent: -118, duration: 4 }, '<');
                sliderTimeline.to('.slide-2 .back', {width: '0', duration: 2}, '>')
                sliderTimeline.to('.slide-2 ._slide-line', {scaleX: 1, duration: 2}, '<')
            }
        })  
        
    }, [])

    return (
        <div id="team_mobile" className="slider-section section">
            <ContainerFluid className="_container">
                <SectionHead>
                    До Ваших послуг тренери - діючі плавці, призери України, та змагань у Европі
                </SectionHead>
                <SliderBody slidesCount={slidesData.length} className="slider-section__body">
                    {slidesData.map(data =>  <Slide id={data.id} data={data} key={data.id} />)}
                </SliderBody>
            </ContainerFluid>
        </div>
    )
}



export default Slider