// eslint-disable-next-line import/named
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faClipboardUser,
  faBox,
  faUtensils,
  faCircleCheck,
  faMugHot,
  faChalkboard,
  faGift
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faLinkedin,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

library.add(
  faClipboardUser,
  faBox,
  faUtensils,
  faCircleCheck,
  faMugHot,
  faChalkboard,
  faGift,
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faLinkedin,
  faYoutube
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("fa", FontAwesomeIcon);
});
