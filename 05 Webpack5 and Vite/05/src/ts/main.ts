import "../scss/page.scss";

const btn = document.getElementById("btn") as HTMLButtonElement;
btn.onclick = () => {
  import("./click.ts").then(({ default: click }) => {
    click();
  });
};
