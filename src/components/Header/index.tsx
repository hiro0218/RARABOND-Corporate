import "./style.css"

const AppHeader = () => {
  return (
    <header className="header">
      <div className="o-container">
        <span className="header__description">看護とリハビリの訪問ステーション</span>
        <img
          src="assets/images/logo.png"
          className="header__image"
          height="400"
          width="400"
          alt=""
        />
        <span className="header__name">なちゅらる</span>
      </div>
    </header>
  )
}

export default AppHeader
