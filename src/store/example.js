import axios from 'axios'
const state = {
  player: [],
  games: [],
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
  }
}

const actions = {
  async getPlayerInfo ({ commit }) {
    await axios.get('http://localhost:3000/player')
      .then((res) => {
        commit('setPlayerInfo', res.data)
      })
  },
  async getGamesInfo ({ commit }) {
    await axios.get('http://localhost:3000/games')
      .then((res) => {
        commit('setGamesInfo', res.data)
      })
  }
}

const mutations = {
  setPlayerInfo (state, data) {
    state.player = data
  },
  setGamesInfo (state, data) {
    state.games = data
  },
  setGuildInfo (state, data) {
    state.guild = data
  },
  setExperienceInfo (state, data) {
    state.p2e_experience = data
  }
}

export default {
  state, getters, actions, mutations
}
