import React from 'react'
import style from './AuthenFooter.module.css'
import { Link } from 'react-router-dom';
function AuthenFooter(props) {
  return (
   
        <div className={style['sin_in_info']}>
                <p>
                    {props.title}<span ><Link style={{ color: 'blue', cursor: 'pointer',textDecoration: 'none'  }} to='/FacingProblem'>{props.link}</Link></span>
                </p >
                <hr />
                <div> <p>{props.title2} <span 
                
                
                style={{ color: 'blue' }}>{props.title1}</span> {props.title3} <span style={{ color: 'orange' }}>{props.title4}</span></p>  </div>
            </div>
    
  )
}

export default AuthenFooter
