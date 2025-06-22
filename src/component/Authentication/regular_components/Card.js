import style from './Card.module.css'
function Card(props) {
  return (
    <div className={`${style[props.cssCard]} sm:w-[80%] ml-[-4px] w-[99%]`}>
    {props.children}
  </div>
  )
}

export default Card
