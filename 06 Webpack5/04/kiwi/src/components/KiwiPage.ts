import Heading from "./heading/Heading";
import KiwiImage from "./kiwi-image/KiwiImage";

export default class KiwiPage {
  render() {
    const heading = new Heading();
    heading.render("kiwi");
    const kiwiImage = new KiwiImage();
    kiwiImage.render();
  }
}
