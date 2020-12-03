import React, { useState } from 'react'
import video from '../../assets/video/video.mp4'
import {Button} from '../../GlobalStyles'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroBtn,
  ArrowForward,
  ArrowRight
} from './HeroStyles'

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = ()=> setHover(!hover);
  return (
    <div>
      <HeroContainer>
        <HeroBg>
          <VideoBg src={video} autoPlay muted playsInline loop/>
        </HeroBg>
        <HeroContent>
          <HeroTitle>Virtual Banking Made Easy</HeroTitle>
          <HeroText>
            Sign up for a new account today and receive $300 credit towards your next
            payment.
          </HeroText>
          <HeroBtn>
            <Button primary dark to="sign-up" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get started {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </HeroBtn>
        </HeroContent>

      </HeroContainer>
      
    </div>
  )
}

export default Hero
