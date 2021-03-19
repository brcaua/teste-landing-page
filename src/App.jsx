// import CallForm from "./components/CallForm";
import "./App.css";
// import CallForm from "./components/CallForm";
// import ExampleComponent from "./components/ExampleComponent";
import logo from './assets/pontaltech.svg';
import banner from './assets/banner.png';
import bannerv1 from './assets/bannerv1.png';

function App() {
    return (
        <div className="App">
            {/* <CallForm /> */}
            {/* 1ª Sessão */}
            <div className="navbar navbar-expand-md bg-dark navbar-dark">
                <div class="container-fluid">
                    <a href="index.html" class="navbar-brand">
                        <span>
                            <img src={logo}/>
                        </span>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav ml-auto">
                            <div class="nav-item"><a href="#" class="nav-item nav-link active">Conheça e viva essa experiência</a></div>
                            <a href="#" class="nav-item nav-link">Nossas soluções</a>
                            <a href="#" class="nav-item nav-link">Benefícios</a>
                            <a href="#" class="nav-item nav-link">Perguntas frequentes</a>
                            <a href="#" class="nav-item nav-link">Contato</a>
                            {/* <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu">
                                    <a href="blog.html" class="dropdown-item">Blog Page</a>
                                    <a href="single.html" class="dropdown-item">Single Page</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* 2ª Sessão */}
            <div className="banner">
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
            <div class="about">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-6">
                            <div class="about-img">
                                Vivencie essa experiência
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6">
                            <div class="section-header text-left">
                                {/* <p>Learn About Us</p> */}
                                <h2>Receba uma ligação do nosso agente virtual</h2>
                            </div>
                            {/* <div class="about-text">
                                <p>
                                    .
                                </p>
                                <p>
                                    .
                                </p>
                                <a class="btn" href="">Learn More</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* 4ª Sessão */}
            <div class="info">
                <div class="container-fluid">
                    <div class="align-items-center">
                        <p class="title">Toda ligação importa</p>
                        <p class="subtitle">Nosso time de <span>agentes virtuais reserva</span> garante <br></br>que todas as suas ligações sejam conectadas.</p>
                        <p class="description">Além de otimizar sua operação, mantendo todos os agentes sempre <br></br> ocupados, o Pontalplay! ainda disponibiliza um time de <strong>agentes virtuais reserva</strong>, <br></br> que entram em jogo automaticamente toda vez que o número de ligações atendidas <br></br>for maior do que os agentes virtuais contratados.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
