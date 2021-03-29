import { useEffect, useState } from "react";
import {
  Homepage,
  Banner,
  Title,
  Form,
  Label,
  Input,
  Login,
  InputStyle,
} from "./style";
import Animation from "../../assets/animation.svg";
import api from "../../services/api";
import MaskInput from "react-maskinput";

const SITE_KEY = "6LdyTnsaAAAAAOhcw2-Hltlbtl-WkWV38ad5LptS";

export default function CallForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");

        script.type = "text/javascript";
        script.src = url;
        script.id = id;

        script.onload = function () {
          if (callback) callback();
        };

        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
      function () {
        console.log("Script loaded!");
      }
    );
  }, []);

  const submitData = (event) => {
    event.preventDefault();

    event.target.className += " was-validated";

    if (event.target.checkValidity()) {
      if (event.target[1].value.length < 13) {
        alert("O campo de telefone deve conter 11 números");
        return;
      }

      console.log("dispatch an action");

      window.grecaptcha
        .execute({ SITE_KEY }, { action: "submit" })
        .then(async (token) => {
          console.log("Este é o Token", token);

          try {
            setLoading(true);

            let response = await api("/test", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              data: {
                name: name,
                phone: phone,
                "g-recaptcha-response": token,
              },
            });

            console.log("RESPONSE", response);

            setLoading(false);
            setResponse(
              "Solicitação enviada com sucesso. Você receberá uma chamada em instantes!"
            );
          } catch (err) {
            setLoading(false);
            setResponse(
              "Desculpe, não conseguimos completar sua solicitação, tente mais tarde!"
            );
          }
        })
        .catch((err) => {
          setResponse(
            "Desculpe, não conseguimos completar sua solicitação, tente mais tarde!"
          );
        });
    }
  };

  return (
    <Homepage>
      <Banner>
        <img src={Animation} alt="Logo" />
      </Banner>
      <Form onSubmit={submitData} noValidate className="needs-validation">
        <Title>Enviar solicitação</Title>
        <div className="form-group">
          <Label htmlFor="name">Primeiro Nome: </Label>
          <Input
            id="name"
            className="form-control"
            type="text"
            placeholder="Digite o seu primeiro nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <div className="invalid-feedback">O campo nome é obrigatório.</div>
        </div>
        <div className="form-group">
          <Label htmlFor="phone">Telefone: </Label>
          <MaskInput
            id="phone"
            required
            placeholder="(99)999999999"
            className="form-control"
            style={InputStyle}
            // alwaysShowMask
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            maskChar=""
            mask="(00)000000000"
            minLength="5"
            size={11}
            value="phone"
          />
          <div className="invalid-feedback">
            O campo telefone é obrigatório.
          </div>
        </div>
        <Login disabled={loading}>
          {loading ? "Solicitando..." : "Solicitar"}
        </Login>
        <br />
        <br />
        {response && (
          <label>
            <pre style={{ color: "white" }}>{response}</pre>
          </label>
        )}
      </Form>
    </Homepage>
  );
}
