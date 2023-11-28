import { html, Mount } from "chainus";
import { Counter } from "./Components/counter";
import { Thanks } from "./Components/thanks";

function Main() {
  return html` <div>
    <h2>Hello Everyone!</h2>
    <Counter />
    <Thanks><i>Chainus</i></Thanks>
  </div>`;
}

Mount("#app", Main);
