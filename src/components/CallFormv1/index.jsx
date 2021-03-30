import { useEffect, useState } from "react";
import api from "../../services/api";
import MaskInput from "react-maskinput";
import $ from "jquery";
import "./style.css";
import phoneImg from "../../assets/phone.svg";
import Swal from "sweetalert2";

const SITE_KEY = "6LdyTnsaAAAAAOhcw2-Hltlbtl-WkWV38ad5LptS";

export default function CallFormv1() {
  $(document).ready(function () {
    var navListItems = $("div.setup-panel div a"),
      allWells = $(".setup-content"),
      allNextBtn = $(".nextBtn");

    allWells.hide();

    navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr("href")),
        $item = $(this);

      if (!$item.hasClass("disabled")) {
        navListItems.removeClass("btn-success").addClass("btn-default");
        $item.addClass("btn-success");
        allWells.hide();
        $target.show();
        // $target.find("input:eq(0)").focus();
      }
    });

    allNextBtn.click(function () {
      var curStep = $(this).closest(".setup-content"),
        curStepBtn = curStep.attr("id"),
        nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]')
          .parent()
          .next()
          .children("a"),
        curInputs = curStep.find(
          "input[type='text'],input[type='email'], input[type='tel']"
        ),
        isValid = true;

      $(".form-group").removeClass("has-error");
      for (var i = 0; i < curInputs.length; i++) {
        if (!curInputs[i].validity.valid) {
          isValid = false;
          $(curInputs[i]).closest(".form-group").addClass("has-error");
        }
      }

      if (isValid) nextStepWizard.removeAttr("disabled").trigger("click");
    });

    $("div.setup-panel div a.btn-success").trigger("click");
  });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
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
      if (event.target[1].value.length > 13) {
        Swal.fire({
          icon: "warning",
          text: "O campo de telefone deve ter 11 números!",
        });
        return;
      }

      console.log("dispatch an action");

      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
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
                email: email,
                "g-recaptcha-response": token,
              },
            });

            console.log("RESPONSE", response);

            setLoading(false);
            setResponse(() => {
              Swal.fire({
                icon: "success",
                text:
                  '"Solicitação enviada com sucesso. Você receberá uma chamada em instantes!"',
              });
            });
            alert(
              "Solicitação enviada com sucesso. Você receberá uma chamada em instantes!"
            );
          } catch (err) {
            setLoading(false);
            setResponse(() => {
              Swal.fire({
                icon: "error",
                text:
                  "Desculpe, não conseguimos completar sua solicitação, tente mais tarde!",
              });
            });
          }
        })
        .catch((err) => {
          setResponse(() => {
            Swal.fire({
              icon: "error",
              text:
                "Desculpe, não conseguimos completar sua solicitação, tente mais tarde!",
            });
          });
          alert(
            "Desculpe, não conseguimos completar sua solicitação, tente mais tarde!"
          );
        });
    }
  };

  return (
    <form
      onSubmit={submitData}
      id="regForm"
      noValidate
      className="needs-validation"
    >
      <div class="container">
        <div class="stepwizard">
          <div class="stepwizard-row setup-panel">
            <div class="stepwizard-step col-xs-1">
              <a
                href="#step-1"
                type="button"
                class="btn btn-success btn-circle"
              >
                1
              </a>
              <p>
                <small>Nome</small>
              </p>
            </div>
            <div class="stepwizard-step col-xs-2">
              <a
                href="#step-2"
                type="button"
                class="btn btn-default btn-circle"
                disabled="disabled"
              >
                2
              </a>
              <p>
                <small>Email</small>
              </p>
            </div>
            <div class="stepwizard-step col-xs-3">
              <a
                href="#step-3"
                type="button"
                class="btn btn-default btn-circle"
                disabled="disabled"
              >
                3
              </a>
              <p>
                <small>Phone</small>
              </p>
            </div>
          </div>
        </div>

        <div class="panel panel-primary setup-content" id="step-1">
          <div class="panel-body">
            <div class="form-group">
              <input
                id="name"
                type="text"
                required
                className="form-control"
                placeholder="Digite o seu primeiro nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                mask="(00)000000000"
                size={11}
                title="Preencha seu nome"
              />
              <div className="invalid-feedback">
                O campo nome é obrigatório.
              </div>
            </div>
            <button class="btn white nextBtn pull-right" type="button">
              Próximo
            </button>
          </div>
        </div>

        <div class="panel panel-primary setup-content" id="step-2">
          <div class="panel-body">
            <div class="form-group">
              <input
                id="email"
                type="email"
                required
                className="form-control"
                placeholder="Digite o seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                title="São aceitos somente e-mails com @pontaltech.com"
              />
              <div className="invalid-feedback">
                O campo email é obrigatório.
              </div>
            </div>
            <button class="btn nextBtn pull-right" type="button">
              Próximo
            </button>
          </div>
        </div>

        <div class="panel panel-primary setup-content" id="step-3">
          <div class="panel-body">
            <div class="form-group">
              <MaskInput
                id="phone"
                required
                placeholder="(99)999999999"
                className="form-control tel" // alwaysShowMask
                type="tel"
                onChange={(e) => setPhone(e.target.value)}
                maskChar=""
                mask="(00)000000000"
                minLength="5"
                size={11}
                title="Preencha o seu telefone"
              />
              <div className="invalid-feedback">
                O campo telefone é obrigatório.
              </div>
            </div>
            <button
              disabled={loading}
              class="btn call pull-right"
              type="submit"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <img width="50px" height="50px" src={phoneImg} alt="telefone" />
            </button>
          </div>
        </div>

        {response && (
          <label>
            <pre
              style={{
                border: "none",
                color: "red",
                textAlign: "center",
                overflow: "hidden",
                marginLeft: "-20px",
                fontSize: "14px",
              }}
            >
              {response}
            </pre>
          </label>
        )}
      </div>
    </form>
  );
}
