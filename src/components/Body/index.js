import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const leftNavbar = () => (
    <div className="left-navbar">
      <h1 className="navbar-heading">Left Navbar Menu</h1>
      <ul className="left-navbar-list">
        <li className="list-item">Item 1</li>
        <li className="list-item">Item 2</li>
        <li className="list-item">Item 3</li>
        <li className="list-item">Item 4</li>
      </ul>
    </div>
  )
  const content = () => (
    <div className="content-container">
      <h1 className="navbar-heading">Content</h1>
      <p className="content-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  )
  const rightNavbar = () => (
    <div className="right-navbar">
      <h1 className="navbar-heading">Right Navbar</h1>
      <div className="right-navbar-ad-cont">Ad 1</div>
      <div className="right-navbar-ad-cont">Ad 2</div>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showLeftNavbar, showContent, showRightNavbar} = value

        return (
          <div className="body-container">
            {showLeftNavbar && leftNavbar()}
            {showContent && content()}
            {showRightNavbar && rightNavbar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Body
