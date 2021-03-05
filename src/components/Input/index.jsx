import React, { Component } from "react";
import {
  Homepage,
  Banner,
  Img,
  Form,
  Title,
  Label,
  Inputs,
  Links,
  Login,
  Signup,
  ForgetPassword,
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
      <Homepage onSubmit={this.handleSubmit}>
        <Banner>
          <Img src={Animation} />
        </Banner>
        <Form>
          <Title>Enviar solicitação</Title>
          <Label htmlFor="name">Nome completo</Label>
          <Inputs
            type="text"
            name="name"
            id="name"
            placeholder="Digite o seu nome completo"
            required
            onChange={this.handleChange}
          />
          {/* 
          <Label htmlFor="email">Email</Label>
          <Inputs
            type="email"
            name="email"
            id="email"
            placeholder="Digite o seu email"
            required
            title="São aceitos somente e-mails com @pontaltech.com"
          /> */}
          <Label htmlFor="phone">Telefone</Label>
          <Inputs
            type="tel"
            name="phone"
            id="phone"
            required
            inputmode="numeric"
            placeholder="(99) 99999-9999"
            onChange={this.handleChange}
            // pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{5})-([0-9]{4})"
          />
          {/* <Label htmlFor="senha">Senha</Label>
        <Inputs
          type="password"
          name="password"
          id="password"
          placeholder="Digite a sua senha"
          pattern="[0-9a-zA-Z]{4,8}"
          title="Preste atenção nas instruções abaixo"
          required
          inputmode="numeric"
          autocomplete="new-password"
        /> */}
          <Links>
            <Signup>Cadastrar-se</Signup>
            <Login
              type="submit"
              // onClick={this.handleSubmit}
              onclick="alert('Hello world!')"
            >
              Login
            </Login>
          </Links>
          <ForgetPassword>Esqueceu a senha?</ForgetPassword>
        </Form>
      </Homepage>
    );
  }
}
