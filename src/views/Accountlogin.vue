<template>
  <div>
    <v-app-bar flat dark color="#E9EEF4">
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
      <v-btn to="/account/restore" text light class="ml-5 text-capitalize font-weight-regular">
        Account
      </v-btn>
      <v-btn to="/transaction" text light class="ml-5 text-capitalize font-weight-regular">
        Transaction
      </v-btn>
      <v-btn to="/account" text light class="ml-5 text-capitalize font-weight-regular">
        Dashboard
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
        <v-card dark class="pa-10 ma-10 grey darken-3">
          <h5 class="font-weight-regular">Mnemonics</h5>
          <v-textarea
            placeholder="write your mnemonics"
            label="write your mnemonics"
            name="mnemonics"
            v-model="content"
            solo
            flat
            light
            class="mt-3"
            @change="loadMnemonic('change', $event)"
            @input="loadMnemonic('input', $event)"
            type="text"
          >
          </v-textarea>
          <p class="text-center">
            <v-btn class="text-capitalize" width="39vw" dark outlined @click="restoreAccount()"
              >Restore Account</v-btn
            >
          </p>
          <v-divider></v-divider>
          <h5 class="text-center font-weight-regular mt-5">
            Don't have an account?
            <v-btn
              to="/account/register"
              class="text-capitalize ml-3"
              dark
              outlined
              >Create Account</v-btn
            >
          </h5>
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
    content: ""
  }),
  methods: {
    loadMnemonic(type, content) {
      this.content = content;
      console.log(type, content);
      
    },
    restoreAccount() {
      let mnemonic = this.content;
      let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
      console.log(mnemonicWallet.privateKey);

      // adding to localstorage
      localStorage.setItem("address", mnemonicWallet.address);
      localStorage.setItem("mnemonic", this.content);

      // pushing account to localstorage account list
      let accountList = JSON.parse(localStorage.getItem("accountList")) || [];

      accountList.push({
        address: mnemonicWallet.address,
        mnemonic: this.content
      });

      localStorage.setItem("accountList", JSON.stringify(accountList));

      localStorage.setItem("SET_MYMNEMONIC_CONNECTED", true);
      localStorage.setItem("SET_WALLET_NAME", "myMnemonic");

      // redirecting to account dashboard
      this.$router.push("/account");

    }
  }
};
</script>

<style>
</style>

