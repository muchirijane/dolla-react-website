
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  Copyright,
  SocialIcons,
  SocialIconLink,

} from './FooterStyles'

const Footer = () => {

  const toogleTop = () => {
    scroll.scrollToTop();
  }

 

  return (
    <div>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> About Us</FooterLinkTitle>
                  <FooterLink to='signin'>How it works</FooterLink>
                  <FooterLink to='signin'>Testimonials</FooterLink>
                  <FooterLink to='signin'>Careers</FooterLink>
                  <FooterLink to='signin'>Investors</FooterLink>
                  <FooterLink to='signin'>Terms of service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Contact Us</FooterLinkTitle>
                  <FooterLink to='signin'>Contact</FooterLink>
                  <FooterLink to='signin'>Support</FooterLink>
                  <FooterLink to='signin'>Destination</FooterLink>
                  <FooterLink to='signin'>Sponsorship</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle> Videos</FooterLinkTitle>
                  <FooterLink to='signin'>Submit video</FooterLink>
                  <FooterLink to='signin'>Ambassadors</FooterLink>
                  <FooterLink to='signin'>Agency</FooterLink>
                  <FooterLink to='signin'>Influemcer</FooterLink>
              </FooterLinkItems>
              
              <FooterLinkItems>
                <FooterLinkTitle> Social Media </FooterLinkTitle>
                  <FooterLink to='signin'>Instagram</FooterLink>
                  <FooterLink to='signin'>Facebook</FooterLink>
                  <FooterLink to='signin'>Youtube</FooterLink>
                  <FooterLink to='signin'>Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo onClick={toogleTop}>dolla</SocialLogo>
                <Copyright>dolla &copy; {new Date().getFullYear()} All rights reserved</Copyright>
                <SocialIcons>
                  <SocialIconLink href="/" target="_blank" noreferrer aria-label="Facebook">
                    <FaFacebook/>
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" noreferrer aria-label="Instagram">
                    <FaInstagram/>
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" noreferrer aria-label="Youtube">
                    <FaYoutube/>
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" noreferrer aria-label="Twitter">
                    <FaTwitter/>
                  </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
      
    </div>
  )
}

export default Footer
