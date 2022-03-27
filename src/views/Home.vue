<template>
  <v-app id="inspire" color="#E9EEF4">
    <SideBar />
    <!-- <v-divider color="black" class="mt-0 pt-0" dark></v-divider> -->
    <v-container fluid class="" >
      <v-row>
        <v-col cols="12" md="12" lg="12" class="ml-15 pl-8 pt-0 mt-0">
          <v-toolbar flat color="rgba(0,0,0,0)" class="mt-1">
            <v-toolbar-title>Trending</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </v-col>

        <v-sheet
          class="mx-auto mt-n3"
          elevation="8"
          max-width="100%"
          color="black"
        >
          <v-slide-group
            v-model="model"
            class="pa-4"
            cener-active
            show-arrows
            dark
          >
            <v-slide-item v-for="slide in slides" :key="slide.id">
              <v-card class="ma-4" height="200" width="200">
                <v-img
                  class="white--text align-end"
                  :src="slide.src"
                  height="200px"
                >
                  <v-card-title>{{ slide.text }}</v-card-title>
                </v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-row>

      <v-row class="grey lighten-3" color="#E9EEF4">
        <v-col cols="12" sm="3" class="grey lighten-3">
          <v-sheet rounded="lg" min-height="268" class="grey lighten-3"></v-sheet>
        </v-col>

        <v-col cols="12" sm="4" class="mt-2 pt-5">
          <v-row>
            <v-sheet min-height="50vh" rounded="lg">
              <v-card width="100%">
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3" size="80">
                    <v-img
                      class="elevation-6"
                      alt=""
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>@gthemenace</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-btn rounded color="error" dark>
                      Follow
                    </v-btn>
                    <v-btn color="black" icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </v-row>
                </v-list-item>
                <v-card-text class="text-h5 font-weight-bold">
                  "Turns out semicolon-less style is easier and safer in TS
                  because most gotcha edge cases are type invalid as well."
                </v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" class="">
                      <video
                        className="video"
                        controls
                        width="270px"
                      >
                        <source src="https://i.imgur.com/FTBP02Y.mp4" type="video/mp4" />
                      </video>
                    </v-col>
                    <v-col cols="12" sm="4" class="">
                      <v-sheet rounded="lg" min-height="">
                        <v-card
                          width="100%"
                          class="text-xs-center"
                          outlined
                          color="white"
                        >
                          <v-list-item class="grow">
                            <v-row align="center" justify="start">
                              <v-icon class="mr-1">
                                mdi-heart
                              </v-icon>
                              <span class="subheading mr-2">256</span>
                              <span class="mr-1">·</span>
                              <v-icon class="mr-1">
                                mdi-share-variant
                              </v-icon>
                              <span class="subheading">45</span>
                              <v-btn color="black" icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                              </v-btn>
                            </v-row>
                          </v-list-item>
                        </v-card>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-sheet>
          </v-row>

          <v-row>
            <v-sheet min-height="50vh" rounded="lg">
              <v-card width="100%">
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3" size="80">
                    <v-img
                      class="elevation-6"
                      alt=""
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>@timmytam</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-btn rounded color="error" dark>
                      Follow
                    </v-btn>
                    <v-btn color="black" icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </v-row>
                </v-list-item>
                <v-card-text class="text-h5 font-weight-bold">
                  When your fries give you attitude #getInMyBelly
                  When your fries give you attitude #getInMyBelly
                </v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" class="">
                      <video
                        className="video"
                        controls
                        width="270px"
                      >
                        <source src="https://i.imgur.com/1A7AKoF.mp4" type="video/mp4" />
                      </video>
                    </v-col>
                    <v-col cols="12" sm="4" class="">
                      <v-sheet rounded="lg" min-height="">
                        <v-card
                          width="100%"
                          class="text-xs-center"
                          outlined
                          color="white"
                        >
                          <v-list-item class="grow">
                            <v-row align="center" justify="start">
                              <v-icon class="mr-1">
                                mdi-heart
                              </v-icon>
                              <span class="subheading mr-2">256</span>
                              <span class="mr-1">·</span>
                              <v-icon class="mr-1">
                                mdi-share-variant
                              </v-icon>
                              <span class="subheading">45</span>
                              <v-btn color="black" icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                              </v-btn>
                            </v-row>
                          </v-list-item>
                        </v-card>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-sheet>
          </v-row>
        </v-col>

        <v-col cols="12" sm="3">
          <v-sheet rounded="lg" min-height="268" class="grey lighten-3">
            <!--  -->
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="2">
          <v-sheet rounded="lg" min-height="">
            <template>
              <strong>Live Now</strong>
              <v-card width="100%">
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3" size="80">
                    <v-img
                      class="elevation-6"
                      alt=""
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>@gthemenace</v-list-item-title>
                    <v-list-item-subtitle>John Leider</v-list-item-subtitle>
                    <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </template>
          </v-sheet>

          <v-sheet rounded="lg" min-height="268" class="mt-5">
            <template>
              <strong>Upcoming</strong>
              <v-card width="100%">
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3" size="80">
                    <v-img
                      class="elevation-6"
                      alt=""
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>@gthemenace</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-card-text class="text-h5 font-weight-bold">
                  "Turns out semicolon-less style is easier and safer in TS
                  because most gotcha edge cases are type invalid as well."
                </v-card-text>
              </v-card>
            </template>
          </v-sheet>

          <v-sheet rounded="lg" min-height="" class="mt-5">
            <strong>Suggested</strong>
            <v-card width="100%">
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3" size="80">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>@gthemenace</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-btn rounded color="error" dark>
                    Follow
                  </v-btn>
                </v-row>
              </v-list-item>
            </v-card>
          </v-sheet>

          <v-sheet rounded="lg" min-height="" class="mt-5">
            <strong>Top Followers</strong>
            <v-card width="100%">
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3" size="80">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>@gthemenace</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-btn rounded color="error" dark>
                    Follow
                  </v-btn>
                </v-row>
              </v-list-item>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>

    </v-container>
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar'

export default {
  name: 'Home',
  components: {
    SideBar,
  },
  data: () => ({
    model: null,
    slides: [
      { id: 1, src: require('@/assets/01.jpg'), text: 'Cheb Khaled' },
      { id: 2, src: require('@/assets/02.jpeg'), text: 'Soolking' },
      { id: 3, src: require('@/assets/03.png'), text: 'Chakira' },
      { id: 4, src: require('@/assets/04.jpg'), text: 'Cheb Khaled' },
      { id: 5, src: require('@/assets/05.jpeg'), text: 'Soolking' },
      { id: 6, src: require('@/assets/06.png'), text: 'Chakira' },
      { id: 7, src: require('@/assets/07.jpg'), text: 'Cheb Khaled' },
      { id: 8, src: require('@/assets/08.jpeg'), text: 'Soolking' },
      { id: 9, src: require('@/assets/09.png'), text: 'Chakira' },
      { id: 10, src: require('@/assets/10.jpg'), text: 'Cheb Khaled' },
      { id: 11, src: require('@/assets/11.jpeg'), text: 'Soolking' },
      { id: 12, src: require('@/assets/12.png'), text: 'Chakira' },
    ],
  }),
}
</script>
