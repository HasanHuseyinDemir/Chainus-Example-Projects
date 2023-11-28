import { state, html, setComponent } from "chainus";

export function Counter() {
  const [x, setX] = state(0);

  function increase() {
    setX(x() + 1);
  }
  function decrease() {
    setX(x() - 1);
  }
  return html`
    <div>
      <p>Count: ${x}</p>
      <button onclick="${increase}">Increase</button>
      <button onclick="${decrease}">Decrease</button>
    </div>
  `;
}
setComponent("counter", Counter);
