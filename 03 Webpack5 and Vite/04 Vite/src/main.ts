import "./style.scss";
// import { setupCounter } from "./counter.ts";

// document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
// `;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const btn = document.getElementById("btn") as HTMLButtonElement;
btn.onclick = () => {
  import("./click.ts").then(({ default: click }) => {
    click();
  });
};
