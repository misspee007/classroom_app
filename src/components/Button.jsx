import "../stylesheets/button.css";

const Button = ({text, type, func}) => {
  return (
    <button className={type} onClick={func}>{text}</button>
  )
}

export default Button