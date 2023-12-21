/* eslint-disable react/prop-types */
import "@fortawesome/fontawesome-free/css/all.min.css";

function IconButton(props) {
  return (
    <a href="#" className="icon-button" onClick={props.onClick}>
      <i className={`fas ${props.icon}`}></i>
    </a>
  );
}

export default IconButton;
