<template>
  <div>
    <v-app-bar flat dark >
      <v-spacer></v-spacer>
      <router-link to="/" custom v-slot="{ navigate }">
       <img @click="navigate" role="link" class="" :src="require('../assets/qsociallogo.png')" height="30"/>
       </router-link>
      <v-btn to="/account/restore" text dark class="ml-5 text-capitalize font-weight-regular">
        Account
      </v-btn>
      <v-btn to="/transaction" text dark class="ml-5 text-capitalize font-weight-regular">
        Transaction
      </v-btn>
      <v-btn to="/account" text dark class="ml-5 text-capitalize font-weight-regular">
        Dashboard
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" xs="12" sm="5" md="5" lg="5" xl="5" >
          <v-card class="pa-10 ma-10 grey lighten-4" light>
            <p class="text-center"><v-btn class="text-capitalize blue--text mt-7" width="25vw" outlined @click="generateAccount()">Generate Account</v-btn></p>
            <v-divider class="ma-10"></v-divider>
            <h5 class="text-center font-weight-regular mt-5">Already have an account? <v-btn to="/account/restore" class="text-capitalize ml-3 font-weight-regular" outlined>Restore Account</v-btn></h5>
          </v-card>
          <h4 class="text-center font-weight-regular">Powered By Qsocial</h4>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
  </div>
</template>

<script>
import { ethers } from "ethers";

export default {
  data: () => ({
    
  }),
  methods: {
    generateAccount() {
      const wallet = ethers.Wallet.createRandom();

      console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
      console.log(`Address: ${wallet.address}`);

      // pushing account address and mnemonic to localstorage
      localStorage.setItem("address", wallet.address);
      localStorage.setItem("mnemonic", wallet.mnemonic.phrase);   

      // pushing account to localstorage using json stringify
      let accountList = JSON.parse(localStorage.getItem("accountList")) || [];

      accountList.push({
        address: wallet.address,
        mnemonic: wallet.mnemonic.phrase
      });

      localStorage.setItem("accountList", JSON.stringify(accountList));

      localStorage.setItem("SET_MYMNEMONIC_CONNECTED", true);
      localStorage.setItem("SET_WALLET_NAME", "myMnemonic");

      //window.location.href = `/account`;
      this.$router.push("/account");
      
    },
  }

}
</script>

<style>
</style>

