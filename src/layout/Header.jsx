import "./Header.css"

const Header = (props) => {
  return (
  <header>
    <div className="header">
      <img src="./todo-icon.png" alt="To do logo" className="to-do-logo" />
      <ul>
        <li className="title">{props.title}</li>
        <li className="header-text">
          <a href="#">Tarefas</a>
        </li>
        <li className="header-text">
          <a href="#">Sobre</a>
        </li>
      </ul>
    </div>

  </header>
  )
}

export default Header