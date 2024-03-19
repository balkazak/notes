<template>
  <div>
    <v-app-bar
        darken
        elevate-on-scroll
        absolute
        class="header"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Company name</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <img src="@/assets/logo.svg" alt="" width="200">
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Главная</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon >
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Мои Заметки</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <div id="app" class="card-overlay">
      <v-app>
        <div
            :class="{
          'sm-main-style': $vuetify.breakpoint.smAndDown,
          'md-main-style': $vuetify.breakpoint.mdAndUp,
        }"
        >
          <router-view />
        </div>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");

.v-navigation-drawer__content {
  padding: 25px;
}


.v-list--dense .v-list-item .v-list-item__icon, .v-list-item--dense .v-list-item__icon {
  margin-right: 10px;
}

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #1976d2 !important;
  color: white;
}

.v-btn--fab.v-size--default .v-icon, .v-btn--fab.v-size--small .v-icon, .v-btn--icon.v-size--default .v-icon, .v-btn--icon.v-size--small .v-icon {
  color: white!important;
}

#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

.sm-main-style {
  margin: auto;
  width: 95%;
}
.md-main-style {
  margin: auto;
  width: 70%;
}

.footer-md {
  padding: 30px 0px;
}
.footer-md a {
  text-decoration: none;
  color: white !important;
  font-size: 1.1rem;
  font-family: cursive;
  font-weight: 600;
}

.footer-sm {
  padding: 20px 0px;
}
.footer-sm a {
  text-decoration: none;
  color: white !important;
  font-size: 0.8rem;
  font-family: cursive;
  font-weight: 600;
}
</style>