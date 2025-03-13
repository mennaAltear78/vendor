import { Link } from "react-router-dom"
import Card from "../../regular_components/Card"
import TextField from "../../regular_components/TextField"
import Button from "../../regular_components/Button"
import AuthenFooter from "../../AuthenticationFooter/AuthenFooter"
import style from './Contact.module.css'
import Tiltle from "../../Tiltle"
import AuthenticationWrapper from "../../regular_components/AuthenticationWrapper"
function ContactSupport() {
  return (
    <AuthenticationWrapper>
   <div className={style['Forgetpassword']}>
      {/* <div className={style['titlee']} > <b style={{paddingRight:'80px'}}>Contact Support
      </b>
        <p style={{ color: 'gray', fontSize: '15px', width: '80%' }}>Confirm your username and we'll send you a link to reset your password.</p></div> */}
        <Tiltle title='Contact Support' title_discription='Confirm your username and well send you a link to reset your password.'/>
      <Card cssCard={'sin_in_card'}>
        <TextField label='Email' textfild='textBox' Intext='Your User Name or ID ' />
        <TextField label='Problem(s)' textfild='textBox1' Intext='Your User Name or ID ' />
        <Link to='/FacingProblem'><Button name='Contact Now' btnCss={'blueCss'} /></Link>
        
        <AuthenFooter title='Back to Sign in' title2='Need help? Check out our ' title1='FAQ' title3='or reach out to us at' title4='hotelsupport@sphinx.com' />
      </Card> </div></AuthenticationWrapper>
  )
}

export default ContactSupport
