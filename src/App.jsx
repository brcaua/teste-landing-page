// import CallForm from "./components/CallForm";
import "./App.css";
// import CallForm from "./components/CallForm";
// import ExampleComponent from "./components/ExampleComponent";
import logo from "./assets/pontaltech.svg";
import phone from "./assets/phone.svg";
import money from "./assets/money.svg";
import store from "./assets/store.svg";
import health from "./assets/health.svg";
import avatar from "./assets/avatar.svg";
import banner from "./assets/bannerv1.png";

function App() {
  return (
    <div className="App">
      {/* <CallForm /> */}
      {/* 1ª Sessão */}
      <header>
        <div className="navbar navbar-expand-md bg-dark navbar-dark">
          <div class="container-fluid">
            <a href="index.html" class="navbar-brand">
              <span>
                <img src={logo} alt="Pontaltech" />
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
                <div class="nav-item">
                  <a href="#" class="nav-item nav-link active">
                    Conheça e viva essa experiência
                  </a>
                </div>
                <a href="#" class="nav-item nav-link">
                  Nossas soluções
                </a>
                <a href="#" class="nav-item nav-link">
                  Benefícios
                </a>
                <a href="#" class="nav-item nav-link">
                  Perguntas frequentes
                </a>
                <a href="#" class="nav-item nav-link">
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2ª Sessão */}
      <section>
        <div className="banner">
          <div class="banner-card">
          <img src={banner} alt="mulher no telefone"/>
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
      </section>

      {/* 3ª Sessão */}
      <section>
        <div class="about">
          <div class="row align-items-center">
            <div class="grid-obs col-lg-6 col-md-6">
              <div class="title">
                <p>
                  Vivencie essa <br></br> experiência
                </p>
                <p class="description">
                  Informe os seus dados para vivenciar uma demonstração de como
                  podemos garantir a satisfação de seus clientes e trazer
                  efetividade para suas campanhas.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="section-header text-left">
                {/* <p>Learn About Us</p> */}
                <p>Receba uma ligação do nosso agente virtual inteligente!</p>
              </div>
              <div class="form-call">
                <input type="tel" placeholder="Como você se chama?" required />
                <a href="#">
                  {" "}
                  <img src={phone} alt="Telefone" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4ª Sessão */}
      <section>
        <div class="info">
          <div class="container-fluid">
            <div class="align-items-center">
              <p class="title">Toda ligação importa</p>
              <p class="subtitle">
                Nosso time de <span>agentes virtuais reserva</span> garante{" "}
                <br></br>que todas as suas ligações sejam conectadas.
              </p>
              <p class="description">
                Além de otimizar sua operação, mantendo todos os agentes sempre{" "}
                <br></br> ocupados, o Pontalplay! ainda disponibiliza um time de{" "}
                <strong>agentes virtuais reserva</strong>, <br></br> que entram
                em jogo automaticamente toda vez que o número de ligações
                atendidas <br></br>for maior do que os agentes virtuais
                contratados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div class="container card-benefits">
          <p class="title">
            BENEFÍCIOS DO AGENTE VIRTUAL INTELIGENTE PARA A SUA EMPRESA
          </p>
          <div class="row benefits">
            <div class="col-sm benefit">
              <h4>AGILIDADE</h4>
              <p>alto poder de discagem</p>
            </div>
            <div class="col-sm benefit">
              <h4>LOCALIZADOR</h4>
              <p>encontra a pessoa certa</p>
            </div>
            <div class="col-sm benefit">
              <h4>RESPEITO AO CLIENTE</h4>
              <p>100% das ligações atendidas são conectadas</p>
            </div>
            <div class="col-sm benefit">
              <h4>PRODUTIVIDADE</h4>
              <p>otimiza o tempo de seus atendentes humanos</p>
            </div>
          </div>
          <div class="row benefits">
            <div class="col-sm benefit">
              <h4>DASHBOARD</h4>
              <p>
                estrutura simples e interativa feita para transformar métricas
                em estrátegia
              </p>
            </div>
            <div class="col-sm benefit">
              <h4>MONITORIA</h4>
              <p>
                acompanhamento das chamadas em módulos podendo escolher o trecho
                da chamada
              </p>
            </div>
            <div class="col-sm benefit">
              <h4>FLUIDEZ À ROTINA</h4>
              <p>integração multicanal com seu sistema</p>
            </div>
            <div class="col-sm benefit">
              <h4>PLATAFORMA INTUITIVA</h4>
              <p>simples e prática, a navegação é dinâmica e descomplicada</p>
            </div>
          </div>
          <div class="row benefits">
            <div class="col-sm benefit">
              <h4>CURADORIA</h4>
              <p>
                fluxos de conversas únicas e estudo constante para localizar
                pontos de melhorias
              </p>
            </div>
            <div class="col-sm benefit">
              <h4>ALERTAS</h4>
              <p>
                receba notificações, por e-mail ou SMS, dos seus principais
                indicadores
              </p>
            </div>
            <div class="col-sm benefit">
              <h4>SATISFAÇÃO GARANTIDA</h4>
              <p>efetividade em todos os antendimentos</p>
            </div>
            <div class="col-sm benefit">
              <h4>100% NA NUVEM</h4>
              <p>escalabilidade, menor investimento e maior segurança</p>
            </div>
          </div>
          <a href="#">REVOLUCIONE SEU ATENDIMENTO</a>
        </div>
      </section>

      <section className="bussiness-areas">
        <div class="container bussiness">
          <div class="col bussiness-items" align="center">
            <h3>PARA A SUA EMPRESA</h3>
            <div class="col-sm">
              <img src={money} alt="Cobrança" />
              <h4>COBRANÇA</h4>
              <p>
                Obtenha os melhores resultados e melhore a performance de suas
                campanhas utilizando a Inteligência Artificial em conjunto com o
                alto poder de discagem
              </p>
            </div>
            <div class="col-sm">
              <img src={store} alt="Varejo" />
              <h4>VAREJO</h4>
              <p>
                Faça prospecção ativa e mantenha um bom relacionamento ao tirar
                dúvidas, enviar pesquisas e informar promoções, tudo de forma
                automatizada.
              </p>
            </div>
            <div class="col-sm">
              <img src={health} alt="Saúde" />
              <h4>SAÚDE</h4>
              <p>
                Otimize o tempo ao atualizar cadastros, informar resultados de
                exames e agendar consultas com seu agente virtual
              </p>
            </div>
            <a href="#">QUERO SABER MAIS!</a>
          </div>
        </div>
      </section>

      {/* Section Testemonials */}
      <section className="testemonials">
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <h1>DEPOIMENTOS</h1>
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <p class="texto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                facilis praesentium ad quasi nulla voluptate quibusdam beatae
                iusto molestiae reiciendis. Ducimus adipisci in odio alias?
                Accusamus architecto harum asperiores omnis.
              </p>
              <div class="carousel-caption work d-none d-md-block">
                <div class="person">
                  <img src={avatar} alt="Pessoa" width="70px" />
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQE_BzFWQFa3WQ/profile-displayphoto-shrink_200_200/0/1592513934648?e=1619049600&v=beta&t=nyU5jZQMoaDCGEJ6-VcaZU4jrtyGQkPZoANDtaDDTF0"
                    alt=""
                    width="60px"
                  />
                  <h5>Marcos Guerra</h5>
                </div>
                <p>Programador</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div class="card-deck">
          <div class="card">
            <div class="card-body" align="center">
              <img src={logo} alt="Pontaltech" width="200px" />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">PRODUTOS</h5>
              <a class="card-text" href="#">
                Cultura
              </a>
              <a class="card-text" href="#">
                Carreiras
              </a>
              <a class="card-text" href="#">
                Endereço
              </a>
              <a class="card-text" href="#">
                Contato
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">SOBRE NÓS</h5>
              <a class="card-text" href="#">
                Cultura
              </a>
              <a class="card-text" href="#">
                Carreiras
              </a>
              <a class="card-text" href="#">
                Endereço
              </a>
              <a class="card-text" href="#">
                Contato
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <a class="card-text" href="#">
                +55 (11) 99919-8973
              </a>
              <a class="card-text" href="#">
                +55 (11) 2830-5400
              </a>
              <p class="card-text" href="#">
                | Copyright 2019 Pontaltech <br />| Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
