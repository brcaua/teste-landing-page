import React, { Component } from "react";
import Recaptcha from "react-recaptcha";
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
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
      isVerified: false,
    };
  }
  state = {
    name: "",
    phone: "",
  };
  handleClick() {
    if (this.state.isVerified) {
      alert(
        `Solicitação enviada com sucesso, em instantes você receberá uma chamada no número ${this.state.phone}`
      );
    } else {
      alert("Por favor, verifique se você é humano");
    }
  }
  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true,
      });
    }
  }
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
      <>
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
            <Login onClick={this.handleClick}>Ligar</Login>
            <Recaptcha
              sitekey="6LfmlXgaAAAAAN7dT0YW3XbJ5l-P0Ep9YqQKmQEx"
              render="explicit"
              verifyCallback={this.verifyCallback}
            />
          </Form>
        </Homepage>
      </>
    );
  }
}
