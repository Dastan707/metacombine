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
        </div>
        </div>
        <q-btn color="secondary" label="Register" />
      </q-toolbar>
    </q-header>

    <q-page-container style="padding: 0px">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
  color: #fff;
}
</style>
