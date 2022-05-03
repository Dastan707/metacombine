<template>
  <q-page>
  <div class="row">
    <div class="filter-card col-auto q-pa-sm bg-grey-3">
    <!-- <q-scroll-area
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      style="height: 600px; width: 210px"
    > -->
    <!-- <q-form
      @submit="onSubmit"
      @reset="onReset"
    > -->
      <div class="column">
        <div class="text-h6">Billboard players</div>
        <div class="row justify-between q-my-sm">
          <div class="row">
            <q-btn
              icon="expand_more"
              class="no-shadow"
              flat
              size="xs"
              padding="xs"
              v-if="!showRequests"
              @click="showRequests = !showRequests"
            />
            <q-btn
              icon="expand_less"
              class="no-shadow"
              flat
              size="xs"
              padding="xs"
              v-else
              @click="showRequests = !showRequests"
            />
            <div>Request</div>
          </div>
          <q-btn
            icon="add"
            color="primary"
            size="xs"
            padding="xs"
            @click="addRequests"
          />
        </div>
        <div v-if="showRequests">
          <q-option-group
            name="request"
            v-model="requests"
            :options="requestsOpt"
            color="secondary"
            type="checkbox"
          />
        </div>
        <div class="column justify-center">
          <q-btn
            color="secondary"
            size="sm"
            icon-right="close"
            class="q-mb-sm"
            v-for="req in requests"
            :key="req.id"
            :label="req"
            @click="deleteReq(req)"
          />
        </div>
        <div class="row justify-between q-my-sm">
          <div class="row">
            <q-btn
              icon="expand_more"
              class="no-shadow"
              flat
              size="xs"
              padding="xs"
              v-if="!showGames"
              @click="showGames = !showGames"
            />
            <q-btn
              icon="expand_less"
              class="no-shadow"
              flat
              size="xs"
              padding="xs"
              v-else
              @click="showGames = !showGames"
            />
            <div>Game</div>
          </div>
          <q-btn
            icon="add"
            color="primary"
            size="xs"
            padding="xs"
            @click="addGames"
          />
        </div>
        <div v-if="showGames">
          <q-option-group
            name="game"
            v-model="games"
            :options="gamesOpt"
            color="secondary"
            type="checkbox"
          />
        </div>
        <div class="column justify-center">
          <q-btn
            align="between"
            color="secondary"
            size="sm"
            icon-right="close"
            class="q-mb-sm"
            v-for="game in games"
            :key="game.id"
            :label="game"
            @click="deleteGame(game)"
          />
        </div>
        <div class="row justify-between q-my-sm">
          <div class="row">
            <q-btn
                icon="expand_more"
                class="no-shadow"
                flat
                size="xs"
                padding="xs"
                v-if="!showDevices"
                @click="showDevices = !showDevices"
              />
              <q-btn
                icon="expand_less"
                class="no-shadow"
                flat
                size="xs"
                padding="xs"
                v-else
                @click="showDevices = !showDevices"
              />
            <div>Device</div>
          </div>
          <q-btn
            icon="add"
            color="primary"
            size="xs"
            padding="xs"
            @click="addDevices"
          />
        </div>
         <div v-if="showDevices">
          <q-option-group
            v-model="devices"
            :options="devicesOpt"
            color="secondary"
            type="checkbox"
          />
        </div>
        <div class="column justify-center">
        <q-btn
            align="between"
            color="secondary"
            size="sm"
            icon-right="close"
            class="q-mb-sm"
            v-for="device in devices"
            :key="device.id"
            :label="device"
            @click="deleteDevice(device)"
          />
        </div>
        <div class="q-mt-sm">Free spots</div>
        <q-range
          v-model="freeSpot"
          :min="0"
          :max="100"
          color="secondary"
        />
        <div class="row no-wrap justify-between items-center">
          <q-btn class="full-width" :label="freeSpot.min"/>
          <q-btn class="full-width" :label="freeSpot.max"/>
        </div>
        <div class="q-mt-sm">Date until</div>
        <q-input v-model="date" filled type="date"  />
        <q-btn
          label="Apply"
          color="secondary"
          size="sm"
          class="q-my-sm"
          type="submit"
          @click="save"
        />
        <q-btn
          label="Reset"
          size="sm"
          type="reset"
          @click="reset"
        />
      </div>
      <!-- </q-form> -->
    <!-- </q-scroll-area> -->
    </div>
    <div class="col q-pa-sm">
      <div class="row justify-between items-center">
          <div class="text-subtitle1">You selected:</div>
          <div class="text-subtitle1">Sort By:</div>
      </div>
      <div class="row justify-between items-center">
          <div class="row col-9">
            <q-chip
              v-for="filterItem in selectedFilters"
              :key="filterItem.id"
              color="secondary"
              clickable
              removable
              @remove="deleteSelectedFilter(filterItem)"
            >
              {{filterItem.type}} : {{filterItem.item}}
            </q-chip>
          </div>
          <div class="row items-end">
            <div class="q-mr-sm">7324 всего</div>
            <select class="bg-teal" style="width: 8rem" ></select>
            </div>
      </div>

      <div class="row q-mt-md q-ml-sm">
        <div class="result-card q-mr-sm">
          <div class="row justify-between items-center bg-grey-3 q-pa-sm">
            <div class="row items-center">
              <q-avatar class="q-mr-sm" square>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="text-subtitle1">WhaleMC#1</div>
            </div>
            <div class="row items-center">
              <div class="q-mr-sm">01/01/2022</div>
              <q-icon name="favorite" size="sm" />
            </div>
          </div>
          <div class="row justify-between bg-grey-2 q-pa-sm">
          <div class="column">
            <div class="row">
              <q-avatar size="sm" class="q-mr-sm" square>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="text-subtitle2">Building up a guild</div>
            </div>
            <div class="row q-mt-sm">
              <q-avatar size="sm" class="q-mr-sm" square>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="column">
                <div>500 hours + in Axie infinity</div>
                <div>5 hours + daily online</div>
              </div>
            </div>
            <div class="q-mt-sm">
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            </div>
            <q-btn label="Apply" color="secondary" padding="xs" size="sm" />
          </div>
          <div class="col-3">
          <div class="column items-end">
            <div>
            <q-btn color="secondary" padding="xs" size="sm" label="9/10"/>
            </div>
            <div class="row items-center q-mt-sm">
              <q-icon class="q-mr-sm" name="fa-brands fa-apple" size="xs" />
              <q-icon class="q-mr-sm" name="fa-brands fa-windows" size="xs" />
              <q-icon name="fa-brands fa-android" size="xs" />
            </div>
            <div class="q-mt-md col-3">
              <div class="text-subtitle2 row justify-end">Games</div>
              <div class="row wrap">
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" class="games-img q-mr-xs" alt="" />
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" class="games-img q-mr-xs" alt="" />
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" class="games-img" alt=""/>
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" class="games-img q-mt-xs q-mr-xs" alt="" />
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" class="games-img q-mt-xs q-mr-xs" alt="" />
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>

        <div class="result-card">
          <div class="row justify-between items-center bg-grey-3 q-pa-sm">
            <div class="row items-center">
              <q-avatar class="q-mr-sm" square>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="text-subtitle1">WhaleMC#1</div>
            </div>
            <div class="row items-center">
              <div class="q-mr-sm">01/01/2022</div>
              <q-icon name="favorite" size="sm" />
            </div>
          </div>
          <div class="row justify-between bg-grey-2 q-pa-sm">
          <div class="column">
            <div class="row">
              <q-avatar size="sm" class="q-mr-sm" square>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="text-subtitle2">Building up a guild</div>
            </div>
            <div class="row q-mt-sm">
              <q-avatar size="sm" class="q-mr-sm" square>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="column">
                <div>500 hours + in Axie infinity</div>
                <div>5 hours + daily online</div>
              </div>
            </div>
            <div class="q-mt-sm">
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            </div>
            <q-btn label="Apply" color="secondary" padding="xs" size="sm" />
          </div>
          <div class="col-3">
          <div class="column items-end">
            <div>
            <q-btn color="secondary" padding="xs" size="sm" label="9/10"/>
            </div>
            <div class="row items-center q-mt-sm">
              <q-icon class="q-mr-sm" name="fa-brands fa-apple" size="xs" />
              <q-icon class="q-mr-sm" name="fa-brands fa-windows" size="xs" />
              <q-icon name="fa-brands fa-android" size="xs" />
            </div>
            <div class="q-mt-md">
              <div class="text-subtitle2 row justify-end">Games</div>
              <div class="row wrap">
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img q-mr-xs" >
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img q-mr-xs" >
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img">
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img q-mt-xs q-mr-xs" >
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img q-mt-xs q-mr-xs" >
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>

        <div class="result-card q-mr-sm q-mt-sm">
          <div class="row justify-between items-center bg-grey-3 q-pa-sm">
            <div class="row items-center">
              <q-avatar class="q-mr-sm" square>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="text-subtitle1">WhaleMC#1</div>
            </div>
            <div class="row items-center">
              <div class="q-mr-sm">01/01/2022</div>
              <q-icon name="favorite" size="sm" />
            </div>
          </div>
          <div class="row justify-between bg-grey-2 q-pa-sm">
          <div class="column">
            <div class="row">
              <q-avatar size="sm" class="q-mr-sm" square>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="text-subtitle2">Building up a guild</div>
            </div>
            <div class="row q-mt-sm">
              <q-avatar size="sm" class="q-mr-sm" square>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="column">
                <div>500 hours + in Axie infinity</div>
                <div>5 hours + daily online</div>
              </div>
            </div>
            <div class="q-mt-sm">
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            </div>
            <q-btn label="Apply" color="secondary" padding="xs" size="sm" />
          </div>
          <div class="col-3">
          <div class="column items-end">
            <div>
            <q-btn color="secondary" padding="xs" size="sm" label="9/10"/>
            </div>
            <div class="row items-center q-mt-sm">
              <q-icon class="q-mr-sm" name="fa-brands fa-apple" size="xs" />
              <q-icon class="q-mr-sm" name="fa-brands fa-windows" size="xs" />
              <q-icon name="fa-brands fa-android" size="xs" />
            </div>
            <div class="q-mt-md">
              <div class="text-subtitle2 row justify-end">Games</div>
              <div class="row wrap">
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img q-mr-xs" >
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img q-mr-xs" >
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img">
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img q-mt-xs q-mr-xs" >
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img q-mt-xs q-mr-xs" >
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>

        <div class="result-card q-mt-sm">
          <div class="row justify-between items-center bg-grey-3 q-pa-sm">
            <div class="row items-center">
              <q-avatar class="q-mr-sm" square>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="text-subtitle1">WhaleMC#1</div>
            </div>
            <div class="row items-center">
              <div class="q-mr-sm">01/01/2022</div>
              <q-icon name="favorite" size="sm" />
            </div>
          </div>
          <div class="row justify-between bg-grey-2 q-pa-sm">
          <div class="column">
            <div class="row">
              <q-avatar size="sm" class="q-mr-sm" square>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="text-subtitle2">Building up a guild</div>
            </div>
            <div class="row q-mt-sm">
              <q-avatar size="sm" class="q-mr-sm" square>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="column">
                <div>500 hours + in Axie infinity</div>
                <div>5 hours + daily online</div>
              </div>
            </div>
            <div class="q-mt-sm">
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            </div>
            <q-btn label="Apply" color="secondary" padding="xs" size="sm" />
          </div>
          <div class="col-3">
          <div class="column items-end">
            <div>
            <q-btn color="secondary" padding="xs" size="sm" label="9/10"/>
            </div>
            <div class="row items-center q-mt-sm">
              <q-icon class="q-mr-sm" name="fa-brands fa-apple" size="xs" />
              <q-icon class="q-mr-sm" name="fa-brands fa-windows" size="xs" />
              <q-icon name="fa-brands fa-android" size="xs" />
            </div>
            <div class="q-mt-md">
              <div class="text-subtitle2 row justify-end">Games</div>
              <div class="row wrap">
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img q-mr-xs" >
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img q-mr-xs" >
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img">
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img q-mt-xs q-mr-xs" >
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" class="games-img q-mt-xs q-mr-xs" >
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'BillboardPage',
  setup () {
    const filterData = ref([])
    const showRequests = ref(true)
    const requests = ref([])
    const showGames = ref(true)
    const games = ref([])
    const date = ref('')
    const showDevices = ref(true)
    const devices = ref([])
    const selectedFilters = ref([])

    return {
      date,
      showRequests,
      requests,
      showGames,
      games,
      showDevices,
      devices,
      filterData,
      selectedFilters,
      freeSpot: ref({
        min: 0,
        max: 100
      }),
      requestsOpt: [
        {
          label: 'Building up a team',
          value: 'building up a team'
        },
        {
          label: 'Building up a guild',
          value: 'building up a guild'
        }
      ],
      gamesOpt: [
        {
          label: 'Axie Infinity',
          value: 'axie infinity'
        },
        {
          label: 'Tron',
          value: 'tron'
        }
      ],
      devicesOpt: [
        {
          label: 'PC',
          value: 'pc'
        },
        {
          label: 'Android',
          value: 'android'
        }
      ],
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      }
    }
  },
  methods: {
    save () {
      this.selectedFilters = this.filterData
    },
    reset () {
      this.requests = []
      this.devices = []
      this.games = []
      this.selectedFilters = []
      this.filterData = []
    },
    addRequests () {
      this.requests.forEach((item) => {
        this.filterData.push({
          item,
          type: 'Request'
        })
      })
      this.showRequests = false
    },
    addGames () {
      this.games.forEach((item) => {
        this.filterData.push({
          item,
          type: 'Game'
        })
      })
      this.showGames = false
    },
    addDevices () {
      this.devices.forEach((item) => {
        this.filterData.push({
          item,
          type: 'Device'
        })
      })
      this.showDevices = false
    },
    deleteReq (req) {
      const id = this.requests.indexOf(req)
      this.requests.splice(id, 1)
    },
    deleteGame (game) {
      const id = this.requests.indexOf(game)
      this.games.splice(id, 1)
    },
    deleteDevice (device) {
      const id = this.requests.indexOf(device)
      this.devices.splice(id, 1)
    },
    deleteSelectedFilter (item) {
      const id = this.filterData.indexOf(item)
      this.filterData.splice(id, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.result-card{
  width: 49%;
}
.games-img{
  width: 30%;
}
</style>
