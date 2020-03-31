import React, { Component } from "react"
import { Dropdown, Input, Menu } from "semantic-ui-react"

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Athletes"
          active={activeItem === "athletes"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Auctions"
          active={activeItem === "auctions"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Contact"
          active={activeItem === "contact-us"}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>

          <Dropdown item text="Login">
            <Dropdown.Menu>
              <Dropdown.Item icon="edit" text="Register" />
              <Dropdown.Item icon="globe" text="Choose Language" />
              <Dropdown.Item icon="settings" text="Account Settings" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

// import React, { useState } from "react"
// import {
//   Nav,
//   NavItem,
//   Dropdown,
//   DropdownItem,
//   DropdownToggle,
//   DropdownMenu,
//   NavLink
// } from "reactstrap"

// const Example = props => {
//   const [dropdownOpen, setDropdownOpen] = useState(false)

//   const toggle = () => setDropdownOpen(!dropdownOpen)

//   return (
//     <div>
//       <Nav tabs>
//         <NavItem>
//           <NavLink href="#" active>
//             Home
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#">Athletes</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#">Contact Us</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#">About</NavLink>
//         </NavItem>
//         <NavItem>
//           <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
//             <DropdownToggle nav caret>
//               Account
//             </DropdownToggle>
//             <DropdownMenu>
//               <DropdownItem>Login</DropdownItem>
//               <DropdownItem divider />
//               <DropdownItem>Register</DropdownItem>
//             </DropdownMenu>
//           </Dropdown>
//         </NavItem>
//       </Nav>
//     </div>
//   )
// }

// export default Example
