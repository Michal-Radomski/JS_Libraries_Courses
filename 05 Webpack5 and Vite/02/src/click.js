// import _ from 'lodash'

export default function () {
  let p = document.createElement("p");
  //p.innerText = 'on-demand codes'
  p.innerText = join(["on-demand", "codes"], " ");
  document.body.append(p);
}
