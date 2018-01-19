import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import $ from 'jquery'
import index from 'vue';
let base = window.location.host.indexOf('localhost') > -1 ? '//localhost:5000/' : '/'

let api = axios.create({
    baseURL: base + 'api/',
    timeout: 20000,
    withCredentials: true
})

let auth = axios.create({
    baseURL: base,
    timeout: 5000,
    withCredentials: true
})

vue.use(vuex)

var store = new vuex.Store({
    state: {
        user: {
            userName: "Jaime",
            id: 1,
            email: "jaime.ambriz@yahoo.com"
        },
        keeps: [
            {
              id: 2,
              userid: 9,
              imageUrl: 'https://wallpaperbrowse.com/media/images/750806.jpg',
              name: 'Tree House?',
              views: 7,
              count: 3,
            },
            {
              id: 3,
              userid: 10,
              imageUrl: 'https://wallpaperbrowse.com/media/images/picture-56.jpg',
              name: 'Tell Me More....',
              views: 8,
              count: 4,
            },
            {
              id: 2,
              userid: 9,
              imageUrl:
                'https://www.nationalparks.org/sites/default/files/yosemite-merced.jpg',
              name: 'Thats Pretty Neat',
              views: 7,
              count: 3,
            },
            {
              description: 'The Simpsons',
              id: 7,
              imageUrl:
                'https://vignette.wikia.nocookie.net/looneytunesshowfanon/images/a/a4/Homer_Simpson_SWAG.jpg/revision/latest?cb=20130415233646',
              name: 'The Simpsons',
              userId: 1,
            },
            {
              id: 2,
              userid: 9,
              imageUrl:
                'http://4.bp.blogspot.com/-B6Syeg7oh4A/TbZ0wbk6p0I/AAAAAAAABF0/Ex8CqsVqRx8/s1600/funny-monkey.jpg',
              name: 'Monkey',
              views: 7,
              count: 3,
            },
            {
              id: 3,
              userid: 10,
              imageUrl:
                'https://pmcvariety.files.wordpress.com/2014/07/the-simpsons-emmy-nomination-snub.jpg?w=1000&h=563&crop=1',
              name: 'The Simpsons',
              views: 8,
              count: 4,
            },
            {
              id: 2,
              userid: 9,
              imageUrl:
                'https://i.pinimg.com/736x/c4/ed/76/c4ed76ada1b7bcf669a7e1ee828f945f--cartoon-tv-cartoon-characters.jpg',
              name: 'Family Guy',
              views: 7,
              count: 3,
            },
            {
              id: 3,
              userid: 10,
              imageUrl:
                'https://vignette.wikia.nocookie.net/sonic/images/2/27/SFModernSonicRender.png/revision/latest?cb=20171108084934',
              name: 'Sonic',
              views: 8,
              count: 4,
            },
            {
              id: 2,
              userid: 9,
              imageUrl:
                'https://vignette.wikia.nocookie.net/videogamefanon/images/2/23/Luigi.jpg/revision/latest?cb=20110226020111',
              name: 'Luigi',
              views: 7,
              count: 3,
            },
            {
              id: 2,
              userid: 9,
              imageUrl: 'https://wallpaperbrowse.com/media/images/750806.jpg',
              name: 'Tree House?',
              views: 7,
              count: 3,
            },
            {
              id: 3,
              userid: 10,
              imageUrl: 'https://wallpaperbrowse.com/media/images/picture-56.jpg',
              name: 'Tell Me More....',
              views: 8,
              count: 4,
            },
            {
              id: 2,
              userid: 9,
              imageUrl:
                'https://www.nationalparks.org/sites/default/files/yosemite-merced.jpg',
              name: 'Thats Pretty Neat',
              views: 7,
              count: 3,
            },
            {
              description: 'The Simpsons',
              id: 7,
              imageUrl:
                'https://vignette.wikia.nocookie.net/looneytunesshowfanon/images/a/a4/Homer_Simpson_SWAG.jpg/revision/latest?cb=20130415233646',
              name: 'The Simpsons',
              userId: 1,
            },
            {
              id: 2,
              userid: 9,
              imageUrl:
                'http://4.bp.blogspot.com/-B6Syeg7oh4A/TbZ0wbk6p0I/AAAAAAAABF0/Ex8CqsVqRx8/s1600/funny-monkey.jpg',
              name: 'Monkey',
              views: 7,
              count: 3,
            },
            {
              id: 3,
              userid: 10,
              imageUrl:
                'https://pmcvariety.files.wordpress.com/2014/07/the-simpsons-emmy-nomination-snub.jpg?w=1000&h=563&crop=1',
              name: 'The Simpsons',
              views: 8,
              count: 4,
            },
            {
              id: 2,
              userid: 9,
              imageUrl:
                'https://i.pinimg.com/736x/c4/ed/76/c4ed76ada1b7bcf669a7e1ee828f945f--cartoon-tv-cartoon-characters.jpg',
              name: 'Family Guy',
              views: 7,
              count: 3,
            },
            {
              id: 3,
              userid: 10,
              imageUrl:
                'https://vignette.wikia.nocookie.net/sonic/images/2/27/SFModernSonicRender.png/revision/latest?cb=20171108084934',
              name: 'Sonic',
              views: 8,
              count: 4,
            },
            {
              id: 2,
              userid: 9,
              imageUrl:
                'https://vignette.wikia.nocookie.net/videogamefanon/images/2/23/Luigi.jpg/revision/latest?cb=20110226020111',
              name: 'Luigi',
              views: 7,
              count: 3,
            },
          ],
        vaults: [
            {
                description: "The Simpsons",
                id: 7,
                imageUrl: "https://vignette.wikia.nocookie.net/looneytunesshowfanon/images/a/a4/Homer_Simpson_SWAG.jpg/revision/latest?cb=20130415233646",
                name: "The Simpsons",
                userId: 1
            }, {
                description: "cool cars",
                id: 7,
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMJe3ShGTWUmfKo0AU5RdS-nqcpaXQ6Zj1hDHlklKZF3C_TQi",
                name: "Cars",
                userId: 1
            }, {
                description: "cute dogs",
                id: 7,
                imageUrl: "http://img.izismile.com/img/img8/20150228/640/real_life_doppelgangers_of_some_of_the_simpsons_characters_640_11.jpg",
                name: "Dogs",
                userId: 1
            }, {
                description: "cute dogs",
                id: 7,
                imageUrl: "http://img.izismile.com/img/img8/20150228/640/real_life_doppelgangers_of_some_of_the_simpsons_characters_640_11.jpg",
                name: "Dogs",
                userId: 1
            }, {
                description: "look alikes",
                id: 7,
                imageUrl: "https://i.pinimg.com/736x/b1/f0/5a/b1f05ae2a8c6543dea35b572107bbb58.jpg",
                name: "Doppelganger",
                userId: 1
            }, {
                description: "The Simpsons",
                id: 7,
                imageUrl: "https://vignette.wikia.nocookie.net/looneytunesshowfanon/images/a/a4/Homer_Simpson_SWAG.jpg/revision/latest?cb=20130415233646",
                name: "The Simpsons",
                userId: 1
            }],
        userKeeps: [
            {
                id: 2,
                userid: 9,
                imageUrl: "https://wallpaperbrowse.com/media/images/750806.jpg",
                name: "Tree House?",
                views: 7,
                count: 3,
            }, {
                id: 3,
                userid: 10,
                imageUrl: "https://wallpaperbrowse.com/media/images/picture-56.jpg",
                name: "Tell Me More....",
                views: 8,
                count: 4,
            }, {
                id: 2,
                userid: 9,
                imageUrl: "https://wallpaperbrowse.com/media/images/750913.jpg",
                name: "Thats Pretty Neat",
                views: 7,
                count: 3,
            }, {
                id: 2,
                userid: 9,
                imageUrl: "https://wallpaperbrowse.com/media/images/750806.jpg",
                name: "Tree House?",
                views: 7,
                count: 3,
            }, {
                id: 3,
                userid: 10,
                imageUrl: "https://wallpaperbrowse.com/media/images/picture-56.jpg",
                name: "Tell Me More....",
                views: 8,
                count: 4,
            }, {
                id: 2,
                userid: 9,
                imageUrl: "https://wallpaperbrowse.com/media/images/750913.jpg",
                name: "Thats Pretty Neat",
                views: 7,
                count: 3,
            }],
        activeVault: {},
        activeKeeps: [
            {
                id: 2,
                userid: 9,
                imageUrl: "https://wallpaperbrowse.com/media/images/750806.jpg",
                name: "Tree House?",
                views: 7,
                count: 3,
            }, {
                id: 3,
                userid: 10,
                imageUrl: "https://wallpaperbrowse.com/media/images/picture-56.jpg",
                name: "Tell Me More....",
                views: 8,
                count: 4,
            }, {
                id: 2,
                userid: 9,
                imageUrl: "https://wallpaperbrowse.com/media/images/750913.jpg",
                name: "Thats Pretty Neat",
                views: 7,
                count: 3,
            }],
        activeKeep: {},
        error: {}
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setKeeps(state, payload) {
            state.keeps = payload
        },
        setVaults(state, payload) {
            state.vaults = payload
        },
        setUserKeeps(state, payload) {
            state.userKeeps = payload
        },
        setActiveKeep(state, payload) {
            state.activeKeep = payload
        },
        setActiveVaultKeeps(state, payload) {
            state.activeKeeps = payload
        }
    },
    actions: {
        // ********** User **********
        login({ commit, dispatch }, payload) {
            auth.post('accounts/login', payload)
                .then(res => {
                    commit('setUser', res.data)
                    console.log('Login: ', res)
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        register({ commit, dispatch }, payload) {
            auth.post('accounts/register', payload)
                .then(res => {
                    console.log('Register: ', res)
                    commit('setUser', res.data)
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        authenticate({ commit, dispatch }) {
            auth('accounts/authenticate')
                .then(res => {
                    console.log('authenticate: ', res)
                    if (res.data != "") {
                        commit('setUser', res.data)
                        dispatch('getAllKeeps')
                        router.push({ name: 'Home' })
                    }
                    else {
                        commit('setUser', {})
                    }
                })
                .catch(err => {
                    router.push({ name: 'Home' })
                })
        },
        logout({ commit, dispatch }) {
            auth.delete('accounts/logout')
                .then(res => {
                    commit('setUser', {})
                    router.push({ name: 'Home' })
                })
                .catch(err => {
                    router.push({ name: 'Home' })
                })
        },
        // ********** Vaults **********
        getVaults({ commit, dispatch }) {
            var userId = this.state.user.id;
            api('vaults/user/' + userId)
                .then(res => {
                    commit('setVaults', res.data)
                    console.log('Get Usesr Vaults: ', res)
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        createVault({ commit, dispatch }, payload) {
            api.post('vaults', payload)
                .then(res => {
                    console.log('Create Vault ', res)
                    dispatch('getVaults')
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        updateVault({ commit, dispatch }, payload) {
            api.put('vaults/' + payload.vaultId, payoald)
                .then(res => {
                    console.log('Update Vault ', res)
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        deleteVault({ commit, dispatch }, payload) {
            api.delete('vaults/' + payload)
                .then(res => {
                    console.log('Delete Vault ', res)
                    dispatch('getVaults')
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        // ********** Keeps **********
        getAllKeeps({ commit, dispatch }) {
            api('keeps')
                .then(res => {
                    commit('setKeeps', res.data)
                    console.log('Get Keeps: ', res)
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        massageKeepData(array) {
            var arrayIndex = 0
            var outArray = [[], [], [], []]
            for (var i = 0; i < array.length; i++) {
                var thumbnail = array[i];
                outArray[arrayIndex].push(thumbnail);
                arrayIndex++
                if (arrayIndex == 4) {
                    arrayIndex = 0
                }
            }
            return outArray
        },
        getUserKeeps({ commit, dispatch }) {
            var userId = this.state.user.id;
            api('keeps/user/' + userId)
                .then(res => {
                    commit('setUserKeeps', res.data)
                    console.log('Get User Keeps: ', res)
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        getKeepsByVaultId({ commit, dispatch }, payload) {
            api('keeps/vaults/' + payload)
                .then(res => {
                    console.log('Get Keeps By ValutId: ', res)
                    commit('setActiveVaultKeeps', res.data)
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        setActiveKeep({ commit, diapatch }, payload) {
            commit('setActiveKeep', payload)
        },
        createKeep({ commit, dispatch }, payload) {
            api.post('keeps', payload)
                .then(res => {
                    dispatch('getAllKeeps')
                    dispatch('getUserKeeps')
                    console.log('Create Keep: ', res)
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        addKeepToVault({ commit, dispatch }, payload) {
            api.post('vaultkeeps', payload)
                .then(res => {
                    console.log('Added Keep To Vault: ', res)
                    
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        removeKeepFromVault({commit, dispatch}, payload){
            api.delete('vaultkeeps/vaults/'+ payload.vaultId +'/keeps/' + payload.keepId, )
            .then(res => {
                console.log('RemoveKeepFromVault: ', res.data)
                dispatch('getKeepsByVaultId', payload.vaultId)
            })
        },
        updateKeep({ commit, dispatch }, payload) {
            api.put('keeps/' + payload.id, payload)
                .then(res => {
                    console.log('Update Keep: ', res)
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        deleteKeep({ commit, dispatch }, payload) {
            api.delete('keeps/' + payload)
                .then(res => {
                    console.log('Delete Keep: ', res)
                    dispatch('getUserKeeps')
                    dispatch('getAllKeeps')
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        // ********** VaultKeeps **********
        //addKeepToVault()
        //removeKeepFromVault()
    }

})

export default store