<template>
  <q-page class="q-mt-sm">
    <div class="row">
      <div class="row justify-around col-3">
        <div class="text-h7">PLAYERS</div>
        <div class="text-h7">GAMES</div>
        <div class="text-h7">GUILDS</div>
      </div>
      <div class="row justify-center col">
        <div class="text-h6">Nick</div>
      </div>
      </div>
      <div class="row justify-between">
      <div class="col-3">
      <div class="column">
        <div class="row justify-around items-center">
          <div>
            <q-avatar size="3rem">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>
          </div>
          <div>
            <div class="text-subtitle1">Nick</div>
            <div class="text-subtitle3">Hello, how are you?</div>
          </div>
          <div class="self-end">
            <div class="text-caption">12:59</div>
          </div>
          <hr style="width: 90%">
        </div>
        <div class="row justify-around items-center">
          <div>
            <q-avatar size="3rem">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>
          </div>
          <div>
            <div class="text-subtitle1">Nick</div>
            <div class="text-subtitle3">Hello, how are you?</div>
          </div>
          <div class="self-end">
            <div class="text-caption">12:59</div>
          </div>
          <hr style="width: 90%">
        </div>
        <div class="row justify-around items-center">
          <div>
            <q-avatar size="3rem">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>
          </div>
          <div>
            <div class="text-subtitle1">Nick</div>
            <div class="text-subtitle3">Hello, how are you?</div>
          </div>
          <div class="self-end">
            <div class="text-caption">12:59</div>
          </div>
          <hr style="width: 90%">
        </div>
        <div class="row justify-around items-center">
          <div>
            <q-avatar size="3rem">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>
          </div>
          <div>
            <div class="text-subtitle1">Nick</div>
            <div class="text-subtitle3">Hello, how are you?</div>
          </div>
          <div class="self-end">
            <div class="text-caption">12:59</div>
          </div>
          <hr style="width: 90%">
        </div>
        <div class="row justify-around items-center">
          <div>
            <q-avatar size="3rem">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>
          </div>
          <div>
            <div class="text-subtitle1">Nick</div>
            <div class="text-subtitle3">Hello, how are you?</div>
          </div>
          <div class="self-end">
            <div class="text-caption">12:59</div>
          </div>
          <hr style="width: 90%">
        </div>
      </div>
      </div>
      <div class="q-pa-sm col-4">
        <div>
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar4.jpg"
            :text="['hey, how are you?']"
            sent
            stamp="7 minutes ago"
          />
          <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :text="[`doing fine, how r you?`]"
            stamp="4 minutes ago"
          />
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar4.jpg"
            :text="['hey, how are you?']"
            sent
            stamp="7 minutes ago"
          />
          <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :text="[`doing fine, how r you?`]"
            stamp="4 minutes ago"
          />
        </div>
      </div>
      <div class="col-3"></div>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'ChatPage'
}
</script>
