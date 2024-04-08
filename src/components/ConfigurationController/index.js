import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-controller-container">
          <div className="responsive-controls-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="input-label-container">
              <input
                className="checkbox-input"
                onChange={onChangeContent}
                id="content"
                type="checkbox"
                checked={showContent}
              />
              <label className="label" htmlFor="content">
                Content
              </label>
            </div>
            <div className="input-label-container">
              <input
                className="checkbox-input"
                onChange={onChangeLeftNavbar}
                id="leftNavbar"
                type="checkbox"
                checked={showLeftNavbar}
              />
              <label className="label" htmlFor="leftNavbar">
                Left Navbar
              </label>
            </div>
            <div className="input-label-container">
              <input
                className="checkbox-input"
                onChange={onChangeRightNavbar}
                id="rightNavbar"
                type="checkbox"
                checked={showRightNavbar}
              />
              <label className="label" htmlFor="rightNavbar">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
