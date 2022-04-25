import axios from 'axios'
const state = {
  player: [],
  game: {},
  guild: {},
  p2e_experience: [],
  userNft: [
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' }
  ]
}

const getters = {
  player: (state) => {
    return state.player
  },
  games: (state) => {
    return state.games
  },
  guild: (state) => {
    return state.guild
  },
  p2e_experience: (state) => {
    return state.p2e_experience
  },
  userNft: (state) => {
    return state.userNft
  },
  game: (state) => {
    return state.game
  }
}

const actions = {
  async getPlayerInfo ({ commit }) {
    await axios.get('http://localhost:3000/player')
      .then((res) => {
        commit('setPlayerInfo', res.data)
      })
  },
  async getGuildInfo ({ commit }) {
    await axios.get('http://localhost:3000/guild')
      .then((res) => {
        commit('setGuildInfo', res.data)
      })
  },
  async getGameInfo ({ commit }) {
    await axios.get('http://localhost:3000/game')
      .then((res) => {
        commit('setGameInfo', res.data)
      })
  }
}

const mutations = {
  setPlayerInfo (state, data) {
    state.player = data
  },
  setGuildInfo (state, data) {
    state.guild = data
  },
  setExperienceInfo (state, data) {
    state.p2e_experience = data
  },
  setGameInfo (state, data) {
    state.game = data
  }
}

export default {
  state, getters, actions, mutations
}
