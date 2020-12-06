import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.section`
background-color: #010606;
`;
export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 110rem;
margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
display:flex;
justify-content: center;

@media only screen and (max-width: 820px) {
  padding-top: 3.2rem;
}
`;
export const FooterLinksWrapper = styled.div`
display: flex;

@media only screen and (max-width: 820px) {
  flex-direction: column;
}
`;
export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-left: 1.6rem;
text-align: left;
width: 16rem;
color: #fff;

&:not(:last-child) {
  margin-bottom: 1.6rem;
}

@media only screen and (max-width: 420px) {
  margin: 0;
  padding: 1rem;
  width: 100%;
}
`;
export const FooterLinkTitle = styled.h3`
font-size: 1.4rem;
margin-bottom: 1rem;
`;
export const FooterLink = styled(Link)`
text-decoration: none;
outline: none;
color: #fff;
font-size: 1.4rem;
transition: all .3s ease;

&:hover {
  color: #01bf71;
}
`;

export const SocialMedia = styled.div`
color: #fff;
max-width: 100rem;
width: 100%;
`;
export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 110rem;
margin: 40px auto 0 auto;

@media only screen and (max-width: 820px) {
  flex-direction: column;
}
`;
export const SocialLogo = styled(Link)`
color: currentColor;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 2.4rem;
align-items: center;
margin-bottom: 1.6rem;
font-weight: bold;
transition: all .3s ease;

&:hover {
  color: #01bf71;
  transform: scale(1.05) translateX(.5rem) translateY(.5rem);
}
`;
export const Copyright = styled.h4`
margin-bottom: 1.6rem;
transition: all .3s ease;

&:hover {
  color: #01bf71;
  transform: scale(1.05) translateX(.5rem) translateY(.5rem);
}
`;
export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`;
export const SocialIconLink = styled.a`
font-size: 2.4rem;
color: currentColor;
transition: all .3s ease;

&:hover {
  color: #01bf71;
  transform: scale(1.05) translateX(.5rem) translateY(.5rem);
}
`;