<template>
  <nav>
    <v-navigation-drawer app dark color="#E9EEF4">
      <div class="text-center mt-1">
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
      <v-btn class="ma-2" outlined color="indigo">
        Connect Wallet
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: 'SideBarStudio',
  data: () => ({
    selectedItem: 0,
    appTitle: 'Qsocial',
    items: [
      { icon: 'mdi-view-dashboard', text: 'Dashboard', link: '/studio' },
      { icon: 'mdi-content-duplicate', text: 'Content', link: '/studio/content' },
      { icon: 'mdi-youtube-studio', text: 'Mint Video', link: '/studio/create' },
      
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
      { icon: 'mdi-upload-outline', title: 'Upload Video', link: '/studio/channel/videos/upload' },
      { icon: 'mdi-surround-sound', title: 'Go Live', link: '/studio/channel/livestreaming' },
    ],
  }),
}
</script>

<style>
.image {
  border: 2px solid #2ebfaf;
}
</style>
