import "./App.css";
import logo_tech from "./assets/pontaltech.svg";
import bannerv1 from "./assets/bannerv1.png";
import logo_play from "./assets/logo_play.png";
import phone from "./assets/phone.svg";
import shape_45 from "./assets/Shape_45.png";
import shape_43 from "./assets/Shape_43.png";
import shape_42 from "./assets/Shape_42.png";
import shape_44 from "./assets/Shape_44.png";
import money from "./assets/money.svg";
import store from "./assets/store.svg";
import health from "./assets/health.svg";
import avatar from "./assets/avatar.svg";
import because1 from "./assets/because1.png";
import because2 from "./assets/because2.png";
import because3 from "./assets/because3.png";
import because4 from "./assets/because4.png";
import CallFormv1 from "./components/CallFormv1";

function App() {
  return (
    <div className="App">
      {/* <CallForm /> */}
      {/* 1ª Sessão */}
      <div className="navbar navbar-expand-md bg-dark navbar-dark">
        <div class="container-fluid">
          <a href="index.html" class="navbar-brand">
            <span>
              <img src={logo_tech} alt="logo" />
            </span>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav ml-auto">
              <div class="nav-item">
                <a href=".navbar" class="nav-item nav-link active">
                  Conheça e viva essa experiência
                </a>
              </div>
              <a href=".navbar" class="nav-item nav-link">
                Nossas soluções
              </a>
              <a href=".navbar" class="nav-item nav-link">
                Benefícios
              </a>
              <a href=".navbar" class="nav-item nav-link">
                Perguntas frequentes
              </a>
              <a href=".navbar" class="nav-item nav-link">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 2ª Sessão */}

      <div className="banner">
        <img id="bannerImg" src={bannerv1} alt="banner" />
        <div class="banner-card">
          <div class="title">
            {/* <span>pontal</span>play! */}
            <img src={logo_play} alt="logo" />
          </div>
          <div class="banner-contact">
            <p>
              O AGENTE VIRTUAL <br></br> DA SUA MARCA
              <br></br>
            </p>
            <button class="btn-about" type="button" cursor="pointer">
              QUERO SABER MAIS
            </button>
          </div>
        </div>
      </div>
      {/* 3ª Sessão */}
      <div class="about">
        <div class="row row-about">
          <div class="col-lg-6 col-md-6 aboutc1">
            <div class="title">
              <p>Vivencie essa experiência</p>
              <p class="description">
                Informe os seus dados para vivenciar uma demonstração de como
                podemos garantir a satisfação de seus clientes e trazer
                efetividade para suas campanhas.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 aboutc2">
            <div class="section-header text-left">
              <p>Receba uma ligação do nosso agente virtual inteligente!</p>
            </div>
            <div class="form-call">
              <CallFormv1 />
            </div>
          </div>
        </div>
      </div>
      {/* 4ª Sessão */}
      <div class="info">
        <div class="container-fluid">
          <div class="align-items-center">
            <p class="title">Toda ligação importa</p>
            <p class="subtitle">
              Nosso time de <span>agentes virtuais reserva</span> garante que
              todas as suas ligações sejam conectadas.
            </p>
            <p class="description">
              Além de otimizar sua operação, mantendo todos os agentes sempre
              ocupados, o Pontalplay! ainda disponibiliza um time de{" "}
              <strong>agentes virtuais reserva</strong>, que entram em jogo
              automaticamente toda vez que o número de ligações atendidas for
              maior do que os agentes virtuais contratados.
            </p>
          </div>
        </div>
      </div>
      {/* 5° Sessão */}
      <div class="skills">
        <div class="section-header text-center">
          <h2 class="title">Customize seu agente virtual inteligente</h2>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="skill-item">
              <div class="skill-img">
                <img src={shape_45} alt="Team" />
              </div>
              <div class="skill-text">
                <h2 class="title">
                  Chamadas <br></br>Ativas
                </h2>
                <p class="subtitle">
                  Auto fluxo de ligações totalmente customizados.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="skill-item">
              <div class="skill-img">
                <img src={shape_43} alt="Team" />
              </div>
              <div class="skill-text">
                <h2 class="title">
                  Inteligência artificial de alta performance
                </h2>
                <p class="subtitle">
                  Reconhecimento de voz capaz de compreender e oferecer a melhor
                  solução.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="skill-item">
              <div class="skill-img">
                <img src={shape_42} alt="Team" />
              </div>
              <div class="skill-text">
                <h2 class="title">Transbordo para o atendimento humano</h2>
                <p class="subtitle">
                  Direcionamento automatizado para os canais de atendimento
                  tradicional.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="skill-item">
              <div class="skill-img">
                <img src={shape_44} alt="Team" />
              </div>
              <div class="skill-text">
                <h2 class="title">Integração com seus sistemas</h2>
                <p class="subtitle">
                  Integra com qualquer sistema e está apto a trabalhar com os
                  padrões de todas as instituições bancárias.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="button">
          <button class="btn-about">QUERO UM AGENTE VIRTUAL</button>
        </div>
      </div>
      {/* SESSION 6 - Beneficios */}
      <div class="card-benefits">
        <div class="container">
          <p class="title">
            BENEFÍCIOS DO AGENTE VIRTUAL INTELIGENTE PARA A SUA EMPRESA
          </p>
          <div class="row benefits">
            <div class="col-lg-3 col-md-6 benefit">
              <h4>AGILIDADE:</h4>
              <p>alto poder de discagem</p>
            </div>
            <div class="col-lg-3 col-md-6 benefit">
              <h4>LOCALIZADOR:</h4>
              <p>encontra a pessoa certa</p>
            </div>
            <div class="col-lg-3 col-md-6 benefit">
              <h4>RESPEITO AO CLIENTE:</h4>
              <p>100% das ligações atendidas são conectadas</p>
            </div>
            <div class="col-lg-3 col-md-6 benefit">
              <h4>PRODUTIVIDADE:</h4>
              <p>otimiza o tempo de seus atendentes humanos</p>
            </div>
          </div>
          <div class="row benefits">
            <div class="col-lg-3 col-md-6 benefit">
              <h4>DASHBOARD:</h4>
              <p>
                estrutura simples e interativa feita para transformar métricas
                em estrátegia
              </p>
            </div>
            <div class="col-lg-3 col-md-6 benefit">
              <h4>MONITORIA:</h4>
              <p>
                acompanhamento das chamadas em módulos podendo escolher o trecho
                da chamada
              </p>
            </div>
            <div class="col-lg-3 col-md-6 benefit">
              <h4>FLUIDEZ À ROTINA:</h4>
              <p>integração multicanal com seu sistema</p>
            </div>
            <div class="col-lg-3 col-md-6 benefit">
              <h4>PLATAFORMA INTUITIVA:</h4>
              <p>simples e prática, a navegação é dinâmica e descomplicada</p>
            </div>
          </div>
          <div class="row benefits">
            <div class="col-lg-3 col-md-6 benefit">
              <h4>CURADORIA:</h4>
              <p>
                fluxos de conversas únicas e estudo constante para localizar
                pontos de melhorias
              </p>
            </div>
            <div class="col-lg-3 col-md-6 benefit">
              <h4>ALERTAS:</h4>
              <p>
                receba notificações, por e-mail ou SMS, dos seus principais
                indicadores
              </p>
            </div>
            <div class="col-lg-3 col-md-6 benefit">
              <h4>SATISFAÇÃO GARANTIDA:</h4>
              <p>efetividade em todos os antendimentos</p>
            </div>
            <div class="col-lg-3 col-md-6 benefit">
              <h4>100% NA NUVEM:</h4>
              <p>escalabilidade, menor investimento e maior segurança</p>
            </div>
          </div>

          <div class="button">
            <button class="btn-about" type="button" cursor="pointer">
              REVOLUCIONE SEU ATENDIMENTO
            </button>
          </div>
        </div>
      </div>

      {/* 7° Sessão */}
      <div class="because">
        <div class="section-header text-center">
          <h2 class="title">Porque o pontalplay!</h2>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="because-item">
              <div class="because-img">
                <img src={because2} alt="Team" />
              </div>
              <div class="because-text">
                <h2 class="title">Não desligamos chamadas</h2>
                <p class="subtitle">
                  Fim das ligações desligadas utilizadas para manter a taxa de
                  ocupação alta
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="because-item">
              <div class="because-img">
                <img src={because3} alt="Team" />
              </div>
              <div class="because-text">
                <h2 class="title">
                  Melhores modelos de inteligência artificial
                </h2>
                <p class="subtitle">
                  Personalização de jornadas cognitivas por meio do design
                  conversacional
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="because-item">
              <div class="because-img">
                <img src={because1} alt="Team" />
              </div>
              <div class="because-text">
                <h2 class="title">Muito mais autonomia para você</h2>
                <p class="subtitle">
                  Configure os horários e intervalos das chamadas para manter a
                  satisfação do cliente
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="because-item">
              <div class="because-img">
                <img src={because4} alt="Team" />
              </div>
              <div class="because-text">
                <h2 class="title">Conformidade com a Lgpd</h2>
                <p class="subtitle">
                  Operação de acordo com as normas da Lei Geral de Proteção de
                  dados - LGPD
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="button">
          <button class="btn-about" type="button" cursor="pointer">
            SAIBA MAIS
          </button>
        </div>
      </div>

      {/* Session 8 -  Para a sua empresa*/}

      <div class="bussiness">
        <div class="col bussiness-items" align="center">
          <h3>PARA A SUA EMPRESA</h3>
          <div class="col-sm">
            <img src={money} alt="Cobrança" />
            <h4>COBRANÇA</h4>
            <p>
              Obtenha os melhores resultados e melhore a performance de suas
              campanhas utilizando<br></br> a Inteligência Artificial em
              conjunto com o alto poder de discagem
            </p>
          </div>
          <div class="col-sm">
            <img src={store} alt="Varejo" />
            <h4>VAREJO</h4>
            <p>
              Faça prospecção ativa e mantenha um bom relacionamento ao tirar
              dúvidas,<br></br> enviar pesquisas e informar promoções, tudo de
              forma automatizada.
            </p>
          </div>
          <div class="col-sm">
            <img src={health} alt="Saúde" />
            <h4>SAÚDE</h4>
            <p>
              Otimize o tempo ao atualizar cadastros, informar resultados
              <br></br> de exames e agendar consultas com seu agente virtual
            </p>
          </div>
          <a href=".banner" rel="noreferrer">
            QUERO SABER MAIS!
          </a>
        </div>
      </div>

      {/* Section Testemonials */}
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
            <div class="carousel-caption work">
              <div class="person">
                <img src={avatar} alt="pessoa" width="70px" />
                <h5>Marcos Guerra</h5>
              </div>
              <p>Programador</p>
            </div>
          </div>
          {/* <div class="carousel-item" data-bs-interval="2000">
            <p class="texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              facilis praesentium ad quasi nulla voluptate quibusdam beatae
              iusto molestiae reiciendis. Ducimus adipisci in odio alias?
              Accusamus architecto harum asperiores omnis.
            </p>
            <div class="carousel-caption d-md-block">
              <h5>Marcos Guerra</h5>
              <p>Programador</p>
            </div>
          </div>
          <div class="carousel-item">
            <p class="texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              facilis praesentium ad quasi nulla voluptate quibusdam beatae
              iusto molestiae reiciendis. Ducimus adipisci in odio alias?
              Accusamus architecto harum asperiores omnis.
            </p>
            <div class="carousel-caption d-md-block">
              <h5>Marcos Guerra</h5>
              <p>Programador</p>
            </div>
          </div> */}
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

      <div class="footer">
        <div class="row">
          <div class="col-lg-3 col-md-6" align="left">
            <div class="card-body">
              <img src={logo_tech} alt="logo" width="200px" />
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card-body">
              <h5 class="card-title">PRODUTOS</h5>
              <ul class="nav flex-column">
                <li class="nav-item">pontalsms</li>
                <li class="nav-item">pontalbot</li>
                <li class="nav-item">pontalomni</li>
                <li class="nav-item">pontalemail</li>
                <li class="nav-item">pontalmaestro</li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.pontaltech.com.br/pontal-gestor/"
                  >
                    pontalgestor
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card-body">
              <h5 class="card-title">SOBRE NÓS</h5>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.pontaltech.com.br/cultura/"
                  >
                    Cultura
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://jobs.kenoby.com/pontaltech"
                  >
                    Carreira
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.pontaltech.com.br/contato/"
                  >
                    Endereço
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.pontaltech.com.br/contato/"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card-body">
              <ul class="nav flex-column">
                <li class="nav-item">+55 (11) 99919-8973</li>
                <li class="nav-item">+55 (11) 2830-5400</li>
              </ul>

              <ul class="copyright">
                <li class="nav-item">
                  <p class="card-text" href="#">
                    | Copyright 2019 Pontaltech
                  </p>
                </li>
                <li class="nav-item">
                  <p class="card-text" href="#">
                    | Todos os direitos reservados
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
