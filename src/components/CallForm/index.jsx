import { useEffect, useState } from "react";
import { Homepage, Banner, Title, Form, Label, Input, Login } from "./style";
import Animation from "../../assets/animation.svg";
// import api from '../../services/api'
const SITE_KEY = "6Ld5F3saAAAAALzR9RWfiJi5hsvoWijAGsk5mouH";

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
    setLoading(true);
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((token) => {
          submitData(token);
        });
    });
  };

  const submitData = (token) => {
    // call a backend API to verify reCAPTCHA response
    fetch("http://73a2f37ca657.ngrok.io/test", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        "g-recaptcha-response": token,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setResponse(res);
      });
  };

  return (
    <Homepage>
      <Banner>
        <img src={Animation} alt="Logo" />
      </Banner>
      <Form onSubmit={submitData}>
        <Title>Enviar solicitação</Title>
        <Label>Name: </Label>
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Label>Phone: </Label>
        <Input
          type="tel"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <Login onClick={handleOnClick} disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Login>
        <br />
        <br />
        {response && (
          <label>
            Output:
            <br />
            <pre>{JSON.stringify(response, undefined, 2)}</pre>
          </label>
        )}
      </Form>
    </Homepage>
  );
}
