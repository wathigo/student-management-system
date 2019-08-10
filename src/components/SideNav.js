import React from "react";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

class SideNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }
  handleClick = () =>{
    this.toggleMenu();
    this.props.handleClick();
  }
  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu = () => {
    console.log('state toggled')
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render () {
    return (
      <div>
        <Menu
          pageWrapId={this.props.pageWrapId}
          outerContainerId={this.props.outerContainerId}
          customBurgerIcon={<span className="toggle-label" for="toggle"> &#8801;</span>}
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
        <a className="menu-item" href="#">
          Form 1
        </a>

        <a className="menu-item" onClick={this.handleClick} href="#">
          Form 2
        </a>

        <a className="menu-item" href="#">
          Form 3
        </a>

        <a className="menu-item" href="#">
          Form 4
        </a>
        </Menu>
      </div>
    )
  }
}
export default SideNav;
