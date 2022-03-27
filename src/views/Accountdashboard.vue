<template>
  <div>
    <v-app-bar flat dark>
      <v-spacer></v-spacer>
      <router-link to="/" custom v-slot="{ navigate }">
        <img
          @click="navigate"
          role="link"
          class=""
          :src="require('@/assets/qsociallogo.png')"
          height="30"
        />
      </router-link>
      <v-btn
        to="/account/restore"
        text
        dark
        class="ml-5 text-capitalize font-weight-regular"
      >
        Account
      </v-btn>
      <v-btn
        to="/transaction"
        text
        dark
        class="ml-5 text-capitalize font-weight-regular"
      >
        Transaction
      </v-btn>
      <v-btn
        to="/account"
        text
        dark
        class="ml-5 text-capitalize font-weight-regular"
      >
        Dashboard
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" xs="12" sm="7" md="7" lg="7" xl="7">
        <v-card class="pa-10 ma-10 grey lighten-4" light>
          <v-row>
            <v-avatar color="red"></v-avatar>
            <h4 class="ma-3 font-weight-regular">{{ accountAddress }}</h4>
            <v-icon class="green--text ml-5 mb-1">mdi-wallet</v-icon>
            <h4 class="mt-3 ml-1">{{ amount }} MATIC</h4>
            <v-spacer />
            <v-btn @click="logout" icon>
              <v-icon class="red--text">mdi-power</v-icon>
            </v-btn>
          </v-row>
          <div v-if="isAdmin">
            <v-row>
              <v-spacer />
              <v-btn to="/create" class="green ma-3" dark>
                Create NFTs or Assets
              </v-btn>
              <v-spacer />
            </v-row>
          </div>
          <div v-else>
            <v-row>
              <v-spacer />
              <v-btn to="/nft" class="green ma-3" dark>Buy Asset</v-btn>
              <v-spacer />
            </v-row>
            <v-row>
              <v-spacer />
              <v-btn to="/my-nfts" class="green ma-3" dark>My Assets</v-btn>
              <v-spacer />
            </v-row>
          </div>

          <v-divider class="mt-5"></v-divider>
          <p class="text-center">
            <v-btn icon class="pa-14 mt-5" style="border: solid 1px black;">
              <img :src="require('@/assets/polygonmark.png')" height="50px" />
            </v-btn>
          </p>
          <h1 class="text-center font-weight-regular">{{ amount }} MATIC</h1>
          <v-row class="mt-5">
            <h2 class="font-weight-regular">Mnemonic</h2>
            <v-spacer></v-spacer>
            <v-btn dark text class="blue text-capitalize">save</v-btn>
          </v-row>
          <v-row class="mt-5">
            <h6 class="ma-1 pa-1 blue white--text">{{ mnemonic }}</h6>
          </v-row>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
//import AlgorandClient from "../services/algorandsdk";
//import algosdk from "algosdk";
import { ethers } from 'ethers'

export default {
  data: () => ({
    selectedFile: '',
    currency: '',
    price: '',
    amount: '',
    accountAddress: '',
    isAdmin: true,
    mnemonic: '',
  }),
  methods: {
    logout: function () {
      localStorage.removeItem('SET_METAMASK_CONNECTED')
      localStorage.removeItem('SET_WALLET_NAME')
      localStorage.removeItem('SET_MYMNEMONIC_CONNECTED')
      localStorage.removeItem('accountList')
      localStorage.removeItem('mnemonic')
      localStorage.removeItem('address')
      localStorage.removeItem('price')
      localStorage.removeItem('assetid')
      localStorage.removeItem('creator')
      //this.$router.push({ name: "Home" });
      window.location.href = '/'
      //this.$router.replace("home");
    },
  },
  async created() {
    let userAddress
    let userMnemonic

    if (localStorage.getItem('address')) {
      userAddress = localStorage.getItem('address')
      this.accountAddress = userAddress
    }

    if(localStorage.getItem('mnemonic')) {
      userMnemonic = localStorage.getItem('mnemonic')
      this.mnemonic = userMnemonic
    }

    if (userMnemonic && userAddress) {
      const wallet = ethers.Wallet.fromMnemonic(this.mnemonic)
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const account = wallet.connect(provider)
      const balance = await account.getBalance()
      this.amount = balance / 1000000000000000000
      this.accountAddress = userAddress
    }
  },
  async mounted() {
    let userAddress
    let userMnemonic

    if (localStorage.getItem('address')) {
      userAddress = localStorage.getItem('address')
      this.accountAddress = userAddress
    }

    if(localStorage.getItem('mnemonic')) {
      userMnemonic = localStorage.getItem('mnemonic')
      this.mnemonic = userMnemonic
    }

    if (userMnemonic && userAddress) {
      const wallet = ethers.Wallet.fromMnemonic(this.mnemonic)
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const account = wallet.connect(provider)
      const balance = await account.getBalance()
      this.amount = balance / 1000000000000000000
      this.accountAddress = userAddress
    }
  },
}
</script>

<style></style>
