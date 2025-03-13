import React from 'react'
import style from './ForgetPasswordCard.module.css'
import Button from '../../regular_components/Button'
import key from '../../../../Assets/key.svg'
import headphone from '../../../../Assets/key.svg'
import go from '../../../../Assets/go.svg'
import { Link } from 'react-router-dom'
import AuthenFooter from '../../AuthenticationFooter/AuthenFooter'
import Tiltle from '../../Tiltle'
import AuthenticationWrapper from '../../regular_components/AuthenticationWrapper'
function ForgetPasswordCard() {
    return (
        <AuthenticationWrapper>
        <div className={style['Forgetpassword']}>
            {/* <div className={style['titlee']}> <b style={{paddingRight:'100px'}}>Facing problem Sign in</b>
                <p style={{ color: 'gray',fontSize:'15px',width:'80%'}}>We're here to help. Below are some options to help you get back on track.</p></div> */}
                <Tiltle title='Facing problem Sign in' title_discription='Were here to help. Below are some options to help you get back on track.'/>
            <div className={style['ForgetpasswordCard']}>
              <Link style={{ textDecoration: 'none'  }} to='/ForgetPasswordCard' ><div className={style['support']}>
                    <div className={style['supportHandle']}>
                    <img src={headphone} />
                    <p style={{ color: 'orange' }}>Forget Password</p></div>
                    <img src={go} />
                </div></Link> 
             <Link style={{ textDecoration: 'none'  }}  to='/ContactSupport'> <div className={style['support']}>
                    <div className={style['supportHandle']}><img src={key} /><p style={{ color: 'orange' }}>Contanct Support</p></div>
                    
                    <img src={go} />
                </div></Link>  
                <Link to='/'> <Button name='Back To Home' btnCss={'whiteCss'} /></Link>
                <AuthenFooter  title2='Need help? Check out our ' title1='FAQ' title3='or reach out to us at' title4='hotelsupport@sphinx.com'
            />
            </div>

        </div></AuthenticationWrapper>
    )
}

export default ForgetPasswordCard
