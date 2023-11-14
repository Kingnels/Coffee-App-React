/* eslint-disable react/prop-types */
import './Button.css'
function Button({content,tag}) {
  return (
    <div>
        <button className={tag}>{content}</button>
    </div>
  )
}

export default Button