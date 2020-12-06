import styled from 'styled-components'

export const InfoContainer = styled.section`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#f9f9f9': '#010606')};

@media only screen and (max-width:768px){
  padding: 100px 0;
}
`;
export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1400px;
margin: 0 auto;
padding: 0 24px;
justify-content: center;
`;
export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media only screen and (max-width: 768px){
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col1' 'col2 col2'` : `'col1 col1' 'col2 col2'`)};

}

`;
export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`;
export const TextWrapper = styled.div`
max-width: 700px;
padding-top: 0;
padding-bottom: 60px;
`;

export const TopLine = styled.h2`
color: #01bf71;
font-weight: 800;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`;
export const Heading = styled.h3`
margin-bottom: 24px;
font-size: 4.8rem;
line-height: 1.1;
font-weight: 700;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

@media only screen and (max-width: 480px){
  font-size: 3.2rem;
}
`;
export const SubTitle = styled.h4`
max-width: 600px;
margin-bottom: 35px;
font-size: 1.8rem;
/* line-height: 1.6; */
color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;
export const InfoBtn = styled.div`
display: flex;
justify-content: flex-start
`;

export const ImgWrapper = styled.div`
max-width: 600px;
height: 100%;
`;

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`;