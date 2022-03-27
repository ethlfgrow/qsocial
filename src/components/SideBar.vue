<template>
  <nav>
    <v-navigation-drawer app dark color="#E9EEF4">
      <div class="text-center mt-4">
        <h1>
          <a href="/">
            <img src="@/assets/qsociallogo.png" alt="Qsocial" height="40" />
          </a>
        </h1>
        <!-- <v-divider color="black" class="mt-4"></v-divider> -->
        <v-avatar class="my-5" size="60">
          <v-img
            src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
            class="image"
          ></v-img>
        </v-avatar>
        <h1 class="black--text">Alison Burgas</h1>
        <h6 class="grey--text">admin@admin.com</h6>
        <v-btn rounded color="#2EBFAF" outlined>Book Appointment</v-btn>
      </div>
      <v-divider class="mx-10 mt-3"></v-divider>
      <v-list dense class="mt-5">
        <v-list-item-group v-model="selectedItem" color="white">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            v-slot="{ active }"
            :to="item.link"
          >
            <v-list-item-icon class="ml-6">
              <v-icon
                v-text="item.icon"
                :color="active ? 'black' : 'grey'"
              ></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.text"
                :class="active ? 'black--text' : 'grey--text'"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="mt-16" v-slot="{ active }">
            <v-list-item-icon class="ml-6">
              <v-icon :color="active ? 'black' : 'grey'">
                mdi-exit-to-app
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title :class="active ? 'black--text' : 'grey--text'">
                Logout
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#F5F6FA" flat>
      <!-- <v-text-field dense label="Search..." color="black"></v-text-field> -->
      <v-text-field
        label="Search"
        prepend-inner-icon="mdi-magnify"
        outlined
        dense
        class="mt-5"
        color="black"
      ></v-text-field>
      <v-spacer></v-spacer>

      <template>
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="mr-4">
                mdi-video-plus
              </v-icon>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items2"
                :key="index"
                :to="item.link"
              >
                <v-icon class="mr-4">{{ item.icon }}</v-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
      <v-col cols="12" xs="1" sm="1" md="1" lg="1" xl="1">
        <v-select
          v-model="e1"
          :items="items3"
          outlined
          @input="changedLabel"
          label="Social Graph"
          dense
          class="mt-7"
        ></v-select>
      </v-col>
      <div v-if="isConnected">
        <v-card flat color="transparent" class="ma-4"><h2>{{balance}} MATIC</h2></v-card>
      </div>
      <div v-else>
      </div>
      <v-dialog v-model="dialog" width="600">
        <template v-slot:activator="{ on, attrs }">
          <div v-if="!isConnected">
            <v-btn
              width="10vw"
              v-bind="attrs"
              v-on="on"
              color="indigo"
              outlined
              class="ma-2"
            >
              Connect to Wallet
            </v-btn>
          </div>

          <div v-else>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  v-bind="attrs"
                  v-on="on"
                  outlined
                  large
                  light
                  class="ml-5 mt-2"
                  @show="connectedToAccount()"
                >
                  Connected To Account
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  link
                  :to="item.link"
                  v-for="(item, index) in itemss"
                  :key="index"
                  @click="menuActionClick(item.action)"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </template>
        <v-card class="pa-4">
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="12" xs="7" sm="7" md="7" lg="7" xl="7">
              <v-card-title class="text-h5 text-center pb-6">
                CONNECT TO WALLET
              </v-card-title>
 
              <p class="text-center">
                <v-btn
                  width="12vw"
                  x-large
                  text
                  outlined
                  @click="loginmetamask"
                  
                >
                  <img
                    class="mr-2"
                    :src="require('@/assets/metamaskWallet.png')"
                    height="20"
                  />
                  MetaMask
                </v-btn>
              </p>
              <p class="text-center">
                <v-btn
                  class="mt-3"
                  width="12vw"
                  x-large
                  text
                  outlined
                  @click="loginwalletconnect"
                >
                  <img
                    class="mr-2"
                    :src="require('@/assets/wallet-connect.svg')"
                    height="20"
                  />
                  WalletConnect
                </v-btn>
              </p>
              <p class="text-center">
                <v-btn
                  class="mt-3"
                  width="12vw"
                  x-large
                  text
                  outlined
                  @click="loginmymnemonic"
                  to="/account/restore"
                >
                  <img
                    class="mr-2"
                    :src="require('@/assets/TrustWallet.png')"
                    height="20"
                  />
                  Web3 Mnemonic
                </v-btn>
              </p>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-card>
      </v-dialog>
    </v-app-bar>
  </nav>
</template>

<script>
import Web3 from 'web3'
import { bus } from '../main'

export default {
  name: 'SideBar',
  data: () => ({
    isConnected: false,
    dialog: false,
    selectedItem: 0,
    appTitle: 'Qsocial',
    loggedIn: true,
    itemss: [
      { title: 'Account Dashboard', link: '/account' },
      { title: 'My NFTs', link: '/my-nfts' },
      { title: 'Create NFTs', link: '/create' },
      { title: 'Logout', link: '/', action: 'logout' },
    ],
    items: [
      { icon: 'mdi-home', text: 'Shorts', link: '/' },
      { icon: 'mdi-youtube-gaming', text: 'Gaming', link: '/gaming' },
      { icon: 'mdi-youtube-studio', text: 'Studio', link: '/studio' },
      {
        icon: 'mdi-account-check-outline',
        text: 'Subscription',
        link: '/subscription',
      },
      { icon: 'mdi-youtube-tv', text: 'TV', link: '/tv' },
      { icon: 'mdi-shopping-outline', text: 'Shop Now', link: '/shop' },
      { icon: 'mdi-charity', text: 'Causes', link: '/causes' },
      { icon: 'mdi-home-outline', text: 'Services', link: '/services' },
      { icon: 'mdi-music', text: 'Music', link: '/music' },
      { icon: 'mdi-cogs', text: 'Settings', link: '/settings' },
    ],
    items2: [
      {
        icon: 'mdi-upload-outline',
        title: 'Upload Video',
        link: '/studio/channel/videos/upload',
      },
      {
        icon: 'mdi-surround-sound',
        title: 'Go Live',
        link: '/studio/channel/livestreaming',
      },
    ],
    items3: ['Polygon', 'Lens Protocol'],
    e1: 'Ethereum',
    selected: null,
    loading: false,
    provider: null,
    account: '',
    balance: '?',
  }),

  methods: {
    changedLabel(event) {
      console.log('event in changedLabel')
      console.log(event)

      this.selected = event
      bus.$emit('socialgraph', selectedItem)

      localStorage.setItem('SET_CONNECTOR', selectedItem)
    },
    logout: function () {
      this.provider = null;
      this.account = '';
      localStorage.removeItem("SET_METAMASK_CONNECTED");
      localStorage.removeItem("SET_WALLET_NAME");
      localStorage.removeItem("SET_MYMNEMONIC_CONNECTED");
      localStorage.removeItem("accountList");
      localStorage.removeItem("mnemonic");
      localStorage.removeItem("address");
      localStorage.removeItem("price");
      localStorage.removeItem("assetid");
      localStorage.removeItem("creator");
      //this.$router.push({ name: "Home" });
      window.location.href = "/";
      //this.$router.replace("home");
    },
    menuActionClick(action) {
      if (action === "test") {
        alert('TEST!!')
      } else if (action === "logout") {
        //alert('LOGOUT!!')
        this.logout();
      }
    },
    async loginmetamask() {
      
      // ensure Metamask is installed
      if (!window.ethereum) {
        window.alert(
          'Non-Ethereum browser detected. You should consider trying MetaMask!',
        )
        
      }
      // show Metamask prompt
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      // connect Metamask to web3.js and get a web3 provider instance
      const web3 = new Web3(window.ethereum);
      
      this.provider = web3;
      
      // retrieve Metamask accounts from web3
      const accounts = await web3.eth.getAccounts();
      console.log("in loginmetamask")
      console.log(accounts[0])
      this.account= accounts[0];

      this.isConnected = true;
      console.log("connected");
      localStorage.setItem("SET_METAMASK_CONNECTED", true);
      localStorage.setItem("SET_WALLET_NAME", "myMetamask");
      localStorage.setItem("address", accounts[0]);

      const correctedAccount = web3.utils.toChecksumAddress(this.account);
      const balanceInWei = await web3.eth.getBalance(correctedAccount);
      // convert balance from wei to ether
      this.balance = Number(web3.utils.fromWei(balanceInWei, 'ether')).toFixed(4);
    },
    async loginwalletconnect() {
      this.loading = true

      await new Promise((resolve) => setTimeout(resolve, 3000))

      this.loading = false
    },
    async loginmymnemonic() {},
    async remove() {
      this.loading = true

      await new Promise((resolve) => setTimeout(resolve, 3000))

      this.loading = false
    },
  },
  async mounted() {
    //await this.loadAlgoSigner();
    //await this.loadBlockchainData();
  },
  async created() {
    //await this.loadAlgoSigner();
    //await this.loadBlockchainData();
  },
}
</script>

<style>
.image {
  border: 2px solid #2ebfaf;
}
</style>
