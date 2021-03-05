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

  handleChange = (event) => {
    this.setState({ name: event.target.value });
    this.setState({ phone: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      phone: this.state.phone,
    };

    let res = await api(
      {
        method: "POST",
        url: "http://73a2f37ca657.ngrok.io/test",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
        data: {
          name: "teste",
          phone: "...",
        },
      },
      user
    );
    console.log(res);
  };

  render() {
    return (
      <Homepage>
        <Banner>
          <Img src={Animation} />
        </Banner>
        <Form onSubmit={this.handleSubmit}>
          <Title>Enviar solicitação</Title>
          <Label htmlFor="name">Primeiro nome</Label>
          <Inputs
            type="text"
            name="name"
            id="name"
            placeholder="Digite o seu primeiro nome"
            required
            onChange={this.handleChange}
          />
          <Label htmlFor="phone">Telefone</Label>
          <Inputs
            type="tel"
            name="phone"
            id="phone"
            required
            inputmode="numeric"
            placeholder="(99) 99999-9999"
            onChange={this.handleChange}
          />
          <Login
            onClick={() => {
              alert(
                `Solicitação enviada com sucesso, em instantes você receberá uma chamada no número ${this.state.phone}`
              );
            }}
          >
            Ligar
          </Login>
        </Form>
      </Homepage>
    );
  }
}
