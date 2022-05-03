<template>
  <!-- <q-layout view="lHh Lpr lFf" class="container"> -->
  <q-layout view="hHh lpR fFf" class="container">

    <q-header bordered style="position: relative">
      <q-toolbar class="q-py-sm q-px-md row no-wrap justify-between">
        <div class="row no-wrap">
        <q-toolbar-title shrink>
          MetaCombine
        </q-toolbar-title>

        <div class="q-ml-xs q-gutter-md row items-center">
          <router-link to="/player">
            Players
          </router-link>
          <router-link to="/games">
            Games
          </router-link>
          <router-link to="/guild">
            Guilds
          </router-link>
          <router-link to="/billboard">
            Billboard
          </router-link>
        </div>
        </div>
        <div v-if="isConnected">
        <q-btn icon="notifications" flat round>
          <q-badge color="red" floating>0</q-badge>
        </q-btn>
        <q-btn icon="account_circle" flat >
          <q-menu>
          <q-list>
            <q-item @click="disconnectWallet" clickable v-close-popup>
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
          </q-menu>
        </q-btn>
        </div>
        <q-btn v-else to="/register" color="secondary" label="Register" />
      </q-toolbar>
    </q-header>

    <q-page-container style="padding: 0px">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default defineComponent({
  name: 'MainLayout',
  computed: {
    ...mapGetters({
      isConnected: 'isConnected'
    })
  },
  methods: {
    ...mapActions({
      disconnectWallet: 'disconnectWallet'
    })
  }
})
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
  color: #fff;
}
</style>
