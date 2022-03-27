<template>
  <div>
    <SideBar />
    <v-row class="pa-10">
      <v-col cols="12" xs="6" sm="4" lg="3" md="3" xl="3">
        <h1 class="font-weight-regular">Channel content</h1>
        <v-text-field
          outlined
          dense
          placeholder="search"
          append-icon="mdi-magnify"
          class="mt-5"
        ></v-text-field>
      </v-col>
      <v-spacer />
      <v-col cols="12" xs="6" sm="4" lg="3" md="3" xl="3">
        <p class="text-end">
          <v-btn :id="BUTTON_ID" large dark text class="black">
            Record video
          </v-btn>
        </p>
      </v-col>
    </v-row>
    <!-- Table data -->
    <v-row>
      <!-- Table data -->
      <v-col cols="12" xs="12" sm="12" lg="12" md="12" xl="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h2>Video</h2>
                </th>
                <th class="text-left">
                  <h2>Title</h2>
                </th>
                <th class="text-left">
                  <h2>Upload Date</h2>
                </th>
                <th class="text-left">
                  <h2>Status</h2>
                </th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="video in videos" :key="video.id">
                <td>
                  <v-responsive class="pt-5">
                    <iframe
                      :src="video.embedurl"
                      frameborder="0"
                      width="200"
                      height="150"
                      webkitallowfullscreen
                      mozallowfullscreen
                      allowfullscreen
                    ></iframe>
                  </v-responsive>
                </td>
                <td>
                  <h3>{{ video.title }}</h3>
                </td>
                <td>{{ video.uploadDate }}</td>
                <td>{{ video.status }}</td>
                <td>
                  <!-- Manage button -->
                  <v-dialog v-model="dialog" persistent max-width="70vw">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        small
                        dark
                        text
                        class="black"
                      >
                        Manage
                      </v-btn>
                    </template>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" xs="6" sm="6" md="5" lg="5" xl="5">
                            <iframe
                              :src="video.embedurl"
                              frameborder="0"
                              width="500"
                              height="400"
                              webkitallowfullscreen
                              mozallowfullscreen
                              allowfullscreen
                            ></iframe>
                          </v-col>
                          <v-spacer></v-spacer>

                          <v-col
                            cols="12"
                            xs="6"
                            sm="6"
                            md="5"
                            lg="5"
                            xl="5"
                            class="ma-5"
                          >
                            <v-form>
                              <h3>Product:</h3>
                              <v-text-field
                                v-model="video.product"
                                outlined
                                dense
                              ></v-text-field>
                              <h3>Title:</h3>
                              <v-text-field
                                v-model="video.title"
                                outlined
                                dense
                              ></v-text-field>
                              <h3>Status:</h3>
                              <v-text-field
                                v-model="video.status"
                                outlined
                                dense
                              ></v-text-field>
                            </v-form>
                          </v-col>
                        </v-row>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                            type="submit"
                          >
                            Save
                          </v-btn>
                        </v-card-actions>
                      </v-container>
                    </v-card>
                  </v-dialog>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SideBar from '@/components/SideBarStudio'

export default {
  name: 'Content',
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
