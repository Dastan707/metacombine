<template>
  <q-page>
    <div class="row">
      <div class="column items-center fixed-center">
      <div>
        <img src="../assets/combineLogo.png" alt="logo">
        <div class="text-h7">meta<strong>combine</strong></div>
      </div>
      <div class="column items-center" v-if="isConnected">
        <div class="row items-center">
          <q-icon name="lens" size="10px" color="secondary" class="q-mr-xs" />
          <div>{{address_short}}</div>
        </div>
        <div>
          <div class="text-subtitle2 text-center q-mt-md">Для продолжения выберите тип учетной записи</div>
          <div v-if="!type" class="row q-gutter-xl col-2 q-mt-md">
            <div class="column">
              <q-btn icon="person" stack size="40px" flat @click="type = 'player'" />
              <div class="text-subtitle2 text-center">Игрок</div>
            </div>
            <div class="column">
              <q-btn icon="sports_esports" stack size="40px" flat @click="type = 'game'" />
              <div class="text-subtitle2 text-center">Игра</div>
            </div>
            <div class="column">
              <q-btn icon="groups" stack size="40px" flat @click="type = 'guild'"/>
              <div class="text-subtitle2 text-center">Гильдия</div>
            </div>
          </div>
        </div>

        <div v-if="type == 'player'">
          <div class="row items-center">
            <q-btn class="q-mr-sm" icon="person" stack size="lg" flat />
            <div>Регистрация игрока</div>
          </div>
          <div>
             <q-stepper
              v-model="step"
              vertical
              color="primary"
              animated
            >
              <q-step
                :name="1"
                title="Select campaign settings"
                icon="settings"
                :done="step > 1"
              >
                For each ad campaign that you create, you can control how much you're willing to
                spend on clicks and conversions, which networks and geographical locations you want
                your ads to show on, and more.

                <q-stepper-navigation>
                  <q-btn @click="step = 2" color="primary" label="Continue" />
                </q-stepper-navigation>
              </q-step>

              <q-step
                :name="2"
                title="Create an ad group"
                caption="Optional"
                icon="create_new_folder"
                :done="step > 2"
              >
                An ad group contains one or more ads which target a shared set of keywords.

                <q-stepper-navigation>
                  <q-btn @click="step = 4" color="primary" label="Continue" />
                  <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
                </q-stepper-navigation>
              </q-step>

              <q-step
                :name="3"
                title="Ad template"
                icon="assignment"
                disable
              >
                This step won't show up because it is disabled.
              </q-step>

              <q-step
                :name="4"
                title="Create an ad"
                icon="add_comment"
              >
                Try out different ad text to see what brings in the most customers, and learn how to
                enhance your ads using features like ad extensions. If you run into any problems with
                your ads, find out how to tell if they're running and how to resolve approval issues.

                <q-stepper-navigation>
                  <q-btn color="primary" label="Finish" @click="finishStep" />
                  <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
                </q-stepper-navigation>
              </q-step>
            </q-stepper>
          </div>
        </div>

        <div v-if="type == 'game'">
          <div class="row items-center">
            <q-btn class="q-mr-sm" icon="sports_esports" stack size="lg" flat />
            <div>Регистрация игры</div>
          </div>
          <div>
             <q-stepper
              v-model="step"
              vertical
              color="primary"
              animated
            >
              <q-step
                :name="1"
                title="Select campaign settings"
                icon="settings"
                :done="step > 1"
              >
                For each ad campaign that you create, you can control how much you're willing to
                spend on clicks and conversions, which networks and geographical locations you want
                your ads to show on, and more.

                <q-stepper-navigation>
                  <q-btn @click="step = 2" color="primary" label="Continue" />
                </q-stepper-navigation>
              </q-step>

              <q-step
                :name="2"
                title="Create an ad group"
                caption="Optional"
                icon="create_new_folder"
                :done="step > 2"
              >
                An ad group contains one or more ads which target a shared set of keywords.

                <q-stepper-navigation>
                  <q-btn @click="step = 4" color="primary" label="Continue" />
                  <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
                </q-stepper-navigation>
              </q-step>

              <q-step
                :name="3"
                title="Ad template"
                icon="assignment"
                disable
              >
                This step won't show up because it is disabled.
              </q-step>

              <q-step
                :name="4"
                title="Create an ad"
                icon="add_comment"
              >
                Try out different ad text to see what brings in the most customers, and learn how to
                enhance your ads using features like ad extensions. If you run into any problems with
                your ads, find out how to tell if they're running and how to resolve approval issues.

                <q-stepper-navigation>
                  <q-btn color="primary" label="Finish" @click="finishStep" />
                  <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
                </q-stepper-navigation>
              </q-step>
            </q-stepper>
          </div>
        </div>

        <div v-if="type == 'guild'">
          <div class="row items-center">
            <q-btn class="q-mr-sm" icon="groups" stack size="lg" flat />
            <div>Регистрация гильдии</div>
          </div>
          <div>
             <q-stepper
              v-model="step"
              vertical
              color="primary"
              animated
            >
              <q-step
                :name="1"
                title="Select campaign settings"
                icon="settings"
                :done="step > 1"
              >
                For each ad campaign that you create, you can control how much you're willing to
                spend on clicks and conversions, which networks and geographical locations you want
                your ads to show on, and more.

                <q-stepper-navigation>
                  <q-btn @click="step = 2" color="primary" label="Continue" />
                </q-stepper-navigation>
              </q-step>

              <q-step
                :name="2"
                title="Create an ad group"
                caption="Optional"
                icon="create_new_folder"
                :done="step > 2"
              >
                An ad group contains one or more ads which target a shared set of keywords.

                <q-stepper-navigation>
                  <q-btn @click="step = 4" color="primary" label="Continue" />
                  <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
                </q-stepper-navigation>
              </q-step>

              <q-step
                :name="3"
                title="Ad template"
                icon="assignment"
                disable
              >
                This step won't show up because it is disabled.
              </q-step>

              <q-step
                :name="4"
                title="Create an ad"
                icon="add_comment"
              >
                Try out different ad text to see what brings in the most customers, and learn how to
                enhance your ads using features like ad extensions. If you run into any problems with
                your ads, find out how to tell if they're running and how to resolve approval issues.

                <q-stepper-navigation>
                  <q-btn color="primary" label="Finish" @click="finishStep" />
                  <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
                </q-stepper-navigation>
              </q-step>
            </q-stepper>
          </div>
        </div>

      </div>
      <div class="q-mt-sm column" v-else>
        <div class="text-subtitle2 text-center">Для начала работы подключитесь с помощью <strong>Metamask</strong></div>
        <div class="row justify-center">
          <q-btn class="q-mt-sm" label="Connect" color="secondary" @click="connectToWallet" />
        </div>
      </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'RegisterPage',
  setup () {
    const registerPlayer = ref(false)
    const step = ref(1)
    const type = ref('')
    return {
      registerPlayer,
      step,
      type
    }
  },
  computed: {
    ...mapGetters({
      isConnected: 'isConnected',
      address: 'address',
      address_short: 'address_short'
    })
  },
  methods: {
    ...mapActions({
      connectToWallet: 'connectToWallet'
    }),
    finishStep () {
      this.type = null
      this.step = 1
    }
  }
}
</script>
