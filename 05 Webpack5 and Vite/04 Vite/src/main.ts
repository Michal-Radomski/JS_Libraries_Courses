import "./style.scss";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);