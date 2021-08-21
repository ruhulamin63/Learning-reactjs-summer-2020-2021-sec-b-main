// nodejs library that concatenates classes
import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  Modal,
  ModalHeader,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

import { useHistory } from "react-router-dom";
import { removeUserSession } from "../../auth/connect/getSession";

function AgentNavbar(props) {

  let history = useHistory();
  const handleLogout = () => {
  removeUserSession();
  history.push('/login');
  }

  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor("navbar-transparent");
    } else {
      setcolor("bg-white");
    }
    setcollapseOpen(!collapseOpen);
  };
  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };
  return (
    <>
      <Navbar className={classNames("navbar-absolute", color)} expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >
              <NavbarToggler onClick={props.toggleSidebar}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </NavbarToggler>
            </div>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
          </div>
          <NavbarToggler onClick={toggleCollapse}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <InputGroup className="search-bar">
                <Button color="link" onClick={toggleModalSearch}>
                  <i className="tim-icons icon-zoom-split" />
                  <span className="d-lg-none d-md-block">Search</span>
                </Button>
              </InputGroup>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                >
                  <div className="notification d-none d-lg-block d-xl-block" />
                  <i className="tim-icons icon-sound-wave" />
                  <p className="d-lg-none">Notifications</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                <Link to="/agent/agent-transactionlist">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      500 Tk Mobile Recharge Done. 
                    </DropdownItem>
                  </NavLink>
                  </Link>

                  <Link to="/agent/agent-transactionlist">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Payment Tk 500 To Electric Bill Is Successful.
                    </DropdownItem>
                  </NavLink>
                  </Link>

                  <Link to="/agent/agent-transactionlist">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      You Have Received 500 Tk From Flycash.
                    </DropdownItem>
                  </NavLink>
                  </Link>

                  <Link to="/agent/agent-transactionlist">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Cash In Tk 500 From 01716653557 Successful.
                    </DropdownItem>
                  </NavLink>
                  </Link>

                  <Link to="/agent/agent-transactionlist">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                    Payment Tk 500 To Water Bill Is Successful.
                    </DropdownItem>
                  </NavLink>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="photo">
                    <img
                      alt="..."
                      src={require("../../../black/img/agent/anime3.png").default}
                    />
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block" />
                  <p className="d-lg-none">Log out</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                  <Link to="/agent-agentprofileview">
                  <DropdownItem className="nav-item">Profile</DropdownItem>
                    </Link>
                    
                  </NavLink>
                  <NavLink tag="li">
                  <Link to="/agent-change-password">
                  <DropdownItem className="nav-item">Change Password</DropdownItem>
                    </Link>
                    
                  </NavLink>
                  <DropdownItem divider tag="li" />
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Log out</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <ModalHeader>
          <Input placeholder="SEARCH" type="text" />
          <button
            aria-label="Close"
            className="close"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </ModalHeader>
      </Modal>
    </>
  );
}

export default AgentNavbar;
