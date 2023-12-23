import $ from "jquery";

export function createElem(tag: string, innerText: string) {
  let elem = "<" + tag + "/>";
  $(elem).text(innerText).appendTo("body");
}
