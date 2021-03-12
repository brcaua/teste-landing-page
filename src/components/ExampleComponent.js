import Recaptcha from "react-google-invisible-recaptcha";
import { Component } from "react";
export default class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", phone: "" };
    this.onSubmit = this.onSubmit.bind(this);
    this.onResolved = this.onResolved.bind(this);
  }
 onSubmit = (e) => {
   e.preventDefault()
   window.grecaptcha.ready(() => {
    window.grecaptcha
      .execute("6LdyTnsaAAAAAOhcw2-Hltlbtl-WkWV38ad5LptS", {
        action: "submit",
      })
      .then((token) => {
        this.submitData(token);
      });
  });
   if (this.state.name && this.state.phone === "") {
     alert("Validation failed! Input cannot be empty.");
     this.recaptcha.reset();
   } else {
     this.recaptcha.execute();
     alert(
       "Solicitação enviada com sucesso. Você receberá uma chamada em instantes!"
     );
   }
  const submitData = (token) => {
    fetch(`${window.location.protocol}//${window.location.host}/test`, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
      body:JSON.stringify({
        name: this.state.name,
        phone: this.state.phone,
        "g-recaptcha-response": token
      }),
    })
      .then((res) => {
        alert("Solicitação enviada com sucesso. Você receberá uma chamada em instantes!");
    }).catch(err => {
        alert("Desculpe, não conseguimos completar sua solicitação, tente mais tarde");
      })
  }
 }
  onResolved() {
    alert("Recaptcha resolved with response: " + this.recaptcha.getResponse());
  }
  render() {
    return (
      <form>
        <input
          type="text"
          required
          value={this.state.value}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <input
          required
          type="tel"
          value={this.state.value}
          onChange={(event) => this.setState({ phone: event.target.value })}
        />
        <button onClick={this.onSubmit}>Submit</button>
        <Recaptcha
          ref={(ref) => (this.recaptcha = ref)}
          sitekey="6LcalHgaAAAAAJEo2BQbaWnS4psWvTpaSdDrUYHS"
          onResolved={this.onResolved}
        />
      </form>
    );
  }
}
