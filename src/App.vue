<template>


  <!-- 
##     ##    ###    ########   #######  ##     ## ######## ######## 
###   ###   ## ##   ##     ## ##     ## ##     ## ##       ##       
#### ####  ##   ##  ##     ## ##     ## ##     ## ##       ##       
## ### ## ##     ## ########  ##     ## ##     ## ######   ######   
##     ## ######### ##   ##   ##  ## ## ##     ## ##       ##       
##     ## ##     ## ##    ##  ##    ##  ##     ## ##       ##       
##     ## ##     ## ##     ##  ##### ##  #######  ######## ######## 
  -->
  <div class="marquee w-full h-12 overflow-hidden position-relative">
    <ul class="marquee-content h-full flex" ref="mq">
      <!-- main -->
      <!-- 1 -->
      <li class="flex justify-center items-center flex-shrink-0 text-white transform scale-75 lg:scale-100"
        v-for="coin in tenItems" :key="coin.name"> 
        <div class="flex justify-between w-3/4">
          <!-- ticker -->
          <div class="flex items-center">
            <img :src="coin.image" alt="coin logo" class="w-4 h-4 lg:w-6 lg:h-6 rounded-full mr-4 object-cover" />
            <div class="hidden lg:block">
              <p class="font-bold">{{ coin.name }}</p>
              <p class="text-xs uppercase tracking-widest ">
                {{ coin.symbol }}
              </p>
            </div>
          </div>
          <!-- price -->
          <div>
            <p class="font-bold text-xs lg:text-base flex justify-end ">
              {{ $filters.commaSep(coin.current_price) }}
            </p>
            <!-- percent red -->
            <p class="font-bold text-xs text-red-400 flex justify-end items-center "
              v-if="$filters.priceChange(coin.price_change_percentage_24h)">
              <fa icon="caret-down" class="mr-1" />
              {{ coin.price_change_percentage_24h }}%
            </p>
            <!-- percent green -->
            <p class="font-bold text-xs text-green-400 flex justify-end items-center " v-else>
              <fa icon="caret-up" class="mr-1" />
              {{ coin.price_change_percentage_24h }}%
            </p>
          </div>
        </div>
      </li>

      <!-- clones -->
      <!-- 1 -->
      <li class="flex justify-center items-center flex-shrink-0 text-white transform scale-75 lg:scale-100"
        v-for="coin in clone" :key="coin.name">
        <div class="flex justify-between w-3/4">
          <!-- ticker -->
          <div class="flex items-center">
            <img :src="coin.image" alt="coin logo" class="w-4 h-4 lg:w-6 lg:h-6 rounded-full mr-4 " />
            <div class="hidden lg:block">
              <p class="font-bold">{{ coin.name }}</p>
              <p class="text-xs uppercase tracking-widest">
                btc
              </p>
            </div>
          </div>
          <!-- price -->
          <div>
            <p class="font-bold flex justify-end text-xs lg:text-base">
              {{ coin.current_price }}
            </p>
            <!-- percent red -->
            <p class="font-bold text-xs text-red-400 flex justify-end items-center "
              v-if="$filters.priceChange(coin.price_change_percentage_24h)">
              <fa icon="caret-down" class="mr-1" />
              {{ coin.price_change_percentage_24h }}%
            </p>
            <!-- percent green -->
            <p class="font-bold text-xs text-green-400 flex justify-end items-center " v-else>
              <fa icon="caret-up" class="mr-1" />
              {{ coin.price_change_percentage_24h }}%
            </p>

          </div>
        </div>
      </li>

    </ul>
  </div>

  <!-- 
######## ##     ## ######## ##    ## ########  ######  
##       ##     ## ##       ###   ##    ##    ##    ## 
##       ##     ## ##       ####  ##    ##    ##       
######   ##     ## ######   ## ## ##    ##     ######  
##        ##   ##  ##       ##  ####    ##          ## 
##         ## ##   ##       ##   ###    ##    ##    ## 
########    ###    ######## ##    ##    ##     ######  
  -->

  <section class="event">
    <div class="container mx-auto py-4 lg:py-24 flex flex-wrap justify-center text-white gap-8">
      <!-- 1 -->
      <div class="card">
        <div class="card__header">
          <img src="./assets/news2.jpg" alt="card__image" class="card__image" width="600">
        </div>
        <div class="card__body">
          <span class="tag">Price</span>
          <h4>Back to the top</h4>
          <p>Bitcoin’s price has been hovering between $22,000 and $24,000 this week but there’s still more momentum behind digital assets as of late compared to a month ago. Last week, bitcoin surged to its highest price since the crypto market crashed in June, hitting $24,000.</p>
        </div>
      </div>
      <div class="card">
        <div class="card__header">
          <img src="./assets/news.jpg" alt="card__image" class="card__image" width="600">
        </div>
        <div class="card__body">
          <span class="tag">Inovation</span>
          <h4>Is blockchain the future?</h4>
          <p>Blockchain could be a revolution in the way everyone—businesses, governments, organizations and individuals—work together. It provides a simple, secure way to establish trust for virtually any kind of transaction, helping simplify the movement of money</p>
        </div>
      </div>
      <div class="card">
        <div class="card__header">
          <img src="./assets/news3.jpg" alt="card__image" class="card__image" width="600">
        </div>
        <div class="card__body">
          <span class="tag">Security</span>
          <h4>Keep your coins safe</h4>
          <p>Phishing attempts using cryptocurrency target crypto wallet private keys — necessary to access funds within the wallet. Scammers send an email to entice victims to visit a specially designed website where they are asked to provide private key information.</p>
        </div>
      </div>
    </div>
  </section>
  <!--
########    ###    ########  ##       ######## 
   ##      ## ##   ##     ## ##       ##       
   ##     ##   ##  ##     ## ##       ##       
   ##    ##     ## ########  ##       ######   
   ##    ######### ##     ## ##       ##       
   ##    ##     ## ##     ## ##       ##       
   ##    ##     ## ########  ######## ########     
  -->
  <div class="container mx-auto pt-18 pb-48 px-2">
    <!-- search -->
    <div class="flex justify-center pb-2 ">
      <div class="relative">
        <input type="text" placeholder="search..." 
          class="border border-gray-500 rounded p-2 focus:outline-none focus:ring-1 focus:ring-black focus:ring- bg-black-700 text-white"
          v-model="search" />
        <fa icon="search" class="text-gray-500 absolute right-2 top-2/4 transform -translate-y-1/2" />
      </div>
    </div>
    <!-- table -->
    <table class="table-fixed cursor-pointer border-collapse">
      <!-- head -->
      <thead>
        <tr class="text-left text-white text-base ">
          <th class="w-1/4 p-4">Name</th>
          <th class="w-1/4">Price</th>
          <th class="w-1/4">1h %</th>
          <th class="w-1/4 hidden sm:table-cell">Market Cap</th>
          <th class="w-1/4 hidden sm:table-cell">Volume</th>
        </tr>
      </thead>
      <!-- body -->
      <tbody class="divide-y text-white">
        <!-- 1 -->
        <tr class="text-sm hover:bg-gray-900 transition duration-300 border-solid border-blue-900 border-opacity-80"
          v-for="coin in matchingNames" :key="coin.name"
          >
          <td class="p-4 flex items-center">
            <p class="mr-2">{{ coin.market_cap_rank }}</p>
            <img :src="coin.image" alt="coin logo" class="w-6 h-6 rounded-full mr-1" />
            <p class="font-bold mr-1">{{ coin.name }}</p>
            <p class="uppercase text-gray-500 hidden sm:table-cell">
              {{ coin.symbol }}
            </p>
          </td>
          <td class="font-bold">
            R$ {{ $filters.commaSep(coin.current_price) }}
          </td>
          <td class=" font-bold">
            <div class="text-red-500" v-if="$filters.priceChange(coin.price_change_percentage_24h)">
              <fa icon="caret-down" class="mr-1" />{{ coin.market_cap_change_percentage_24h }}%
            </div>
            <div class="text-green-500" v-else>
              <fa icon="caret-up" class="mr-1" />{{ coin.market_cap_change_percentage_24h }}%
            </div>
          </td>
          <td class="hidden sm:table-cell">
            R$ {{ $filters.commaSep(coin.market_cap) }}
          </td>
          <td class="pr-4 hidden sm:table-cell">
            {{ $filters.commaSep(coin.total_volume) }}
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import "./assets/tailwind.css";
import axios from 'axios'
import { ref } from '@vue/reactivity'
import { computed, watchEffect } from "vue";

export default {
  name: "App",
  setup() {
    const coins = ref([])
    const clone = ref([])
    const search = ref([])

    // Api call (get)
    const getCoins = async () => {
      try {
        const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h")
        coins.value = res.data


      } catch (err) {
        console.log(err)
      }
    }

    setInterval(() => {
      getCoins()
    }, 2000);

    //filter top 10 coins by performance (out of 100) for marquee
    const tenItems = computed(() => {
      return coins.value.slice(0, 10);
    });
    // clone
    watchEffect(() => {
      const dup = coins.value.slice(0, 5)
      clone.value = dup;
    });
    // find matching names in search bar
    const matchingNames = computed(() => {
      return coins.value.filter((coin) => coin.id.includes(search.value)).slice(0, 15)
    })


    return { tenItems, clone, matchingNames, search}
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: rgb(22, 22, 22);
}

/* cards */

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
  height:300px
}

.card {
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background-color: black;

}



.card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  background-color: rgb(0, 0, 0);
}


.tag {
  align-self: flex-start;
  padding: .25em .75em;
  border-radius: 1em;
  font-size: .75rem;
  
}

.tag+.tag {
  margin-left: .5em;
}

.tag{
  background-color: #2e76d4bb;
  color: #050801;
  box-shadow: 0 0 1px #2e76d4bb,
              0 0 6px #2e76d4bb,
              0 0 12px #2e76d4bb,
              0 0 50px #2e76d4bb;
  
  color: #fafafa;
}

.card__body h4 {
  font-size: 1.5rem;
  text-transform: capitalize;
}

/* Marquee */

.marquee-content {
  animation: scrolling 20s linear infinite;
}

.marquee{
  background-color: black;
}

.marquee-content:hover {
  animation-play-state: paused;
}

.marquee-content li {
  width: 20%;
}

.marquee:before,
.marquee:after {
  position: absolute;
  top: 0;
  width: 10rem;
  height: 3em;
  content: "";
  z-index: 1;
}

.marquee:before {
  left: 0;
  background: linear-gradient(to right, #111 0%, transparent 100%);
}

.marquee:after {
  right: 0;
  background: linear-gradient(to left, #111 0%, transparent 100%);
}

/* Events section */
.event {
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
}

.event:before {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6em;
  content: "";
  z-index: 1;
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-200%);
  }
}
</style>
