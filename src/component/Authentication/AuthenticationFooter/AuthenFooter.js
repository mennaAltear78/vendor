import React from 'react'
import style from './AuthenFooter.module.css'
import { Link } from 'react-router-dom';
function AuthenFooter(props) {
  return (
   
        <div className={style['sin_in_info']}>
                <p>
                    {props.title}<a  ><Link style={{ color: 'blue', cursor: 'pointer',textDecoration: 'none'  }} to='/FacingProblem'>{props.link}</Link></a>
                </p >
                <hr />
                <div> <p>{props.title2} <a style={{ color: 'blue' }}>{props.title1}</a> {props.title3} <a style={{ color: 'orange' }}>{props.title4}</a></p>  </div>
            </div>
    
  )
}

export default AuthenFooter
