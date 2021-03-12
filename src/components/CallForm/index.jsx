import { useEffect, useState } from "react";
import { Homepage, Banner, Title, Form, Label, Input, Login } from "./style";
import Animation from "../../assets/animation.svg";


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

  const handleOnClick = (e) => {
    e.preventDefault();
    // Pelo que entendi da sua implementação, aqui entraria uma validação dos campos nome e email,
    // antes mesmo de recuperar o token do recaptcha. O Token vc só adquire se os campos do form estiverem
    // válidos e no momento que ele faz a solicitação, pois isso evita que ele expire antes de ser enviado ao backend.
    var pattern = new RegExp(
      /\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/
    );

    if (name === "") {
      alert("Validation failed! Input cannot be empty.");
    }
    if (!pattern.test(phone)) {
      alert("ok");
    } else {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(SITE_KEY, { action: "submit" })
          .then((token) => {
            submitData(token);
          });
      });
      alert(
        "Solicitação enviada com sucesso. Você receberá uma chamada em instantes!"
      );
    }
  };
  const submitData = (token) => {
    // call a backend API to verify reCAPTCHA response
    fetch(`${window.location.protocol}//${window.location.host}/test`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        "g-recaptcha-response": token,
      }),
    })
      .then((res) => {
        setLoading(false);
        setResponse(
          "Solicitação enviada com sucesso. Você receberá uma chamada em instantes!"
        );
      })
      .catch((err) => {
        setLoading(false);
        setResponse(
          "Desculpe, não conseguimos completar sua solicitação, tente mais tarde"
        );
      });
  };
  return (
    <Homepage>
      <Banner>
        <img src={Animation} alt="Logo" />
      </Banner>
      <Form onSubmit={submitData}>
        <Title>Enviar solicitação</Title>
        <Label>Primeiro Nome: </Label>
        <Input
          type="text"
          placeholder="Digite o seu primeiro nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <Label>Telefone: </Label>
        <Input
          required
          type="tel"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="(93) 9999-9999"
          // mask={'(99)\\ 99999-9999'}
        />
        <Login onClick={handleOnClick} disabled={loading}>
          {loading ? "Solicitando..." : "Solicitar"}
        </Login>
        <br />
        <br />
        {response && (
          <label>
            <pre>{response}</pre>
          </label>
        )}
      </Form>
    </Homepage>
  );
}
