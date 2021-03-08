import React, { Component } from "react";
import {
  Banner,
  Img,
  Form,
  Title,
  Label,
  Inputs,
  Login,
  Homepage,
} from "./style";
import api from "../../Services/api";
import Animation from "../../assets/animation.svg";

export default class Input extends Component {
  state = {
    name: "",
    phone: "",
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangePhone = (event) => {
    this.setState({ phone: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      phone: this.state.phone,
    };

    api({
        method: "POST",
        url: "/test",
        headers: {},
        data: user
      }
    ).then(res => {
        alert(
            `Solicitação enviada com sucesso, em instantes você receberá uma chamada no número ${this.state.phone}`
        );
        console.log(res);
    }).catch(err => {
        alert(
            err.message
        );
    })
    
  };

  render() {
    return (
      <Homepage>
        <Banner>
          <Img src={Animation} />
        </Banner>
        <Form onSubmit={this.handleSubmit}>
          <Title>Solicitar Demonstração</Title>
          <Label htmlFor="name">Primeiro nome</Label>
          <Inputs
            type="text"
            name="name"
            id="name"
            placeholder="Digite o seu primeiro nome"
            required
            onChange={this.handleChangeName}
          />
          <Label htmlFor="phone">Telefone</Label>
          <Inputs
            type="tel"
            name="phone"
            id="phone"
            required
            inputmode="numeric"
            placeholder="(99) 99999-9999"
            onChange={this.handleChangePhone}
          />
          <Login
            onClick={this.handleSubmit}
          >
            Solicitar
          </Login>
        </Form>
      </Homepage>
    );
  }
}
