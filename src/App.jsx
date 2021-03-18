// import CallForm from "./components/CallForm";
import "./App.css";
import img from "./assets/banner.png";
import logo from "./assets/logo.svg";
import phone from "./assets/phone.svg";
// import CallForm from "./components/CallForm";
// import ExampleComponent from "./components/ExampleComponent";

function App() {
  return (
    <div className="App">
      {/* <CallForm /> */}

      {/* 1ª Sessão */}
      <div class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
          <a href="index.html" class="navbar-brand">
            <span>
              <img src={logo} alt="" />
            </span>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav ml-auto">
              <a href="#" class="nav-item nav-link active">
                Conheça e viva essa experiência
              </a>
              <a href="#" class="nav-item nav-link active">
                Nossas soluções
              </a>
              <a href="#" class="nav-item nav-link active">
                Benefícios
              </a>
              <a href="#" class="nav-item nav-link active">
                Perguntas frequentes
              </a>
              <a href="#" class="nav-item nav-link active">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2ª Sessão */}

      <div className="banner">
        <img src={img} alt="" />
        <div class="banner-card">
          <h1 class="title">
            <span>pontal</span>play!
          </h1>
          <div class="banner-contact">
            <p>
              A AGENTE VIRTUAL <br></br> DA SUA MARCA
              <br></br>
            </p>
            <button class="btn-about">
              <a href="#">QUERO SABER MAIS</a>
            </button>
          </div>
        </div>
      </div>

      {/* 3ª Sessão */}
      <div class="contact">
        <div class="call-form">
          <p id="title">Vivencie essa experiência</p>
          <p>
            Informe os seus dados para vivenciar uma demonstração de como
            podemos garantir a satisfação de seus clientes e trazer efetividade
            para suas campanhas.
          </p>
        </div>
        <div class="form-header">
          Receba uma ligação do nosso agente virtual inteligente!
        </div>
        <div className="form-contact">
          <input type="tel" placeholder="Como você se chama?" />
          <a href="#">
            {" "}
            <img src={phone} alt="dfgfdg" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
