import React, { Component } from "react";
import { Nav, Title, Menu, Items, Item, Span } from "./style";
// import { BrowserRouter } from "react-router-dom";
// import {Routes} from '../../routes'
export class Header extends Component {
  render() {
    return (
      <Nav>
        <Title>Pontal Play</Title>
        <Menu>
          <Items>
            <Item>
              <Span>Sobre o produto</Span>
            </Item>
            <Item>
              <Span>Cadastrar-se</Span>
            </Item>
            <Item>
              <Span>Login</Span>
            </Item>
          </Items>
        </Menu>
      </Nav>
    );
  }
}

export default Header;
