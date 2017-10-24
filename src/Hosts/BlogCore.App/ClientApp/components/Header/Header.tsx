import * as React from "react";
import { Link, RouteProps } from "react-router-dom";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";
import HeaderDropdown from "./HeaderDropdown";

export default class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  shouldComponentUpdate(){
    return false;
  }

  sidebarToggle(e: any): void {
    e.preventDefault();
    document.body.classList.toggle("sidebar-hidden");
  }

  sidebarMinimize(e: any): void {
    e.preventDefault();
    document.body.classList.toggle("sidebar-minimized");
  }

  mobileSidebarToggle(e: any): void {
    e.preventDefault();
    document.body.classList.toggle("sidebar-mobile-show");
  }

  asideToggle(e: any): void {
    e.preventDefault();
    document.body.classList.toggle("aside-menu-hidden");
  }

  public render(): JSX.Element {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
        <NavbarBrand href="#" />
        <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#">
              <i className="icon-bell" />
              <Badge pill color="danger">
                5
              </Badge>
            </NavLink>
          </NavItem>
          <HeaderDropdown />
        </Nav>
        <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
      </header>
    );
  }
}
