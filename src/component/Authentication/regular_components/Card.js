import style from './Card.module.css'
function Card(props) {
  return (
    <div className={`${style[props.cssCard]} sm:w-[80%] w-[99%]`}>
    {props.children}
  </div>
  )
}

export default Card
