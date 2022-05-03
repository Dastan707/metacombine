/* eslint-disable */
import axios from 'axios'
import { Cookies } from 'quasar'
import 'https://www.unpkg.com/web3@1.6.1/dist/web3.min.js'
var web3 = null

const state = {
  isConnected: false,
  address: null,
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
  isConnected: (state) => {
    return state.isConnected
  },
  address: (state) => {
    return state.address
  },
  address_short: (state) => {
    var address = state.address
    if (!address) return ''
    var small = address.slice(0, 6) + ' ... ' + address.slice(-6)
    return small
  },
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
  async connectToWallet ({ commit, dispatch }) {
    if (typeof ethereum == 'undefined') {
        alert('Metamask extension not found. Please install it')
        return
    }

    web3 = new Web3(ethereum)

    var cc_id = await web3.utils.hexToNumber(await ethereum.request({
        method: "eth_chainId"
      }));
    if (cc_id != 80001) {
        try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x13881' }],
            });
        } catch (e) {
            if (e.code == -32002) {
                alert('You already made request to connect. Accept it in window')
            }
        }
    }

    await ethereum.request({
        method: "wallet_requestPermissions",
        params: [{
            eth_accounts: {},
        }]
    });

    var addresses = await ethereum.request({
        method: "eth_accounts"
    });
    if (addresses && addresses.length > 0) {
        var address = addresses[0]
        commit('setAddress', address)
        commit('setConnectToWallet', true)
    }
  },
  async disconnectWallet ({ commit }) {
      commit('setConnectToWallet', false)
  },
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
  },
  setAddress (state, data) {
    state.address = data
  },
  setConnectToWallet (state, data) {
    state.isConnected = data
  }
}

export default {
  state, getters, actions, mutations
}
