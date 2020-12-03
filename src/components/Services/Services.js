import Icon1 from '../../assets/images/expense.svg'
import Icon2 from '../../assets/images/office.svg'
import Icon3 from '../../assets/images/benefites.svg'
import Icon4 from '../../assets/images/savings.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesStyled'

const Services = () => {
  return (
    <div>
      <ServicesContainer>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} alt=''/>
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Virtual offices</ServicesH2>
            <ServicesP>You can access our platform and online anywhere in the world.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Preminum Benefits</ServicesH2>
            <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
          </ServicesCard>
          

        </ServicesWrapper>
      </ServicesContainer>
      
    </div>
  )
}

export default Services
