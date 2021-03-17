// import CallForm from "./components/CallForm";
import "./App.css";
// import CallForm from "./components/CallForm";
// import ExampleComponent from "./components/ExampleComponent";

function App() {
  return (
    <div className="App">
      {/* <CallForm /> */}

        {/* 1ª Sessão */}
      <div class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <a href="index.html" class="navbar-brand"><span>KLIS</span></a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav ml-auto">
                        <a href="#" class="nav-item nav-link active">Home</a>
                        <a href="#" class="nav-item nav-link">About</a>
                        <a href="#" class="nav-item nav-link">Service</a>
                        <a href="#" class="nav-item nav-link">Price</a>
                        <a href="#" class="nav-item nav-link">Barber</a>
                        <a href="#" class="nav-item nav-link">Gallery</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu">
                                <a href="blog.html" class="dropdown-item">Blog Page</a>
                                <a href="single.html" class="dropdown-item">Single Page</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </div>

        {/* 2ª Sessão */}
        <div class="hero">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <div class="hero-text">
                            <h1>HTML5 Template for Salon Website</h1>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare velit non. Aliqua metus tortor auctor quis sem.
                            </p>
                            <a class="btn" href="https://htmlcodex.com/barber-shop-template">Download Now</a>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 d-none d-md-block">
                        <div class="hero-image">
                            <img src="img/hero.png" alt="Hero Image"/>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                    <span></span>
                </button>
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
        <div class="about">
            <div class="container">
                <div class="row align-items-center">
                    TODA LIGAÇÃO IMPORTA ...
                </div>
            </div>
        </div>







      
    </div>
  );
}

export default App;
