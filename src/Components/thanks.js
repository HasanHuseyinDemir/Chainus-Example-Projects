import { html, setComponent } from "chainus";

export function Thanks() {
  return html`<h3>Thank You for using <slot />!</h3>`;
}
setComponent("thanks", Thanks);
