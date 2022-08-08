import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretUp,
  faCaretDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCaretUp, faCaretDown, faSearch);

const app = createApp(App);
app.component("fa", FontAwesomeIcon);
app.mount("#app");


//custom filter
app.config.globalProperties.$filters= {
  //percentage green or red
  priceChange(value){
    value = value.toString();
    if(value.includes("-")){
      return value;
    } else {
      return "";
    }
  },

  //code for comma separation
  commaSep(value){
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
