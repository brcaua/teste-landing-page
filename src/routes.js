import { Route, Switch } from "react-router-dom";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={() => <h1>Home</h1>} />
      <Route path="/product" exact component={() => <h1>Sobre o produto</h1>} />
      <Route path="/signup" exact component={() => <h1>Cadastrar-se</h1>} />
      <Route path="/login" exact component={() => <h1>Login</h1>} />
    </Switch>
  );
}
