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
                imageUrl: 'https://vignette.wikia.nocookie.net/poohadventures/images/1/1b/Jimmy_neutron.jpg/revision/latest/scale-to-width-down/220?cb=20160212185406',
                name: 'Jimmy',
                views: 7,
                count: 3,
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
                id: 3,
                userid: 10,
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41s46Ca33CL.jpg',
                name: 'Johnny Bravo',
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
                imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Daffy_Duck.svg/1200px-Daffy_Duck.svg.png',
                name: 'Daffy Duck',
                views: 7,
                count: 3,
            },
            {
                id: 3,
                userid: 10,
                imageUrl: 'https://www.thewrap.com/wp-content/uploads/2016/05/garfield-movie.jpg',
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
            }, {
                count: 1,
                id: 6,
                imageUrl: "https://vignette.wikia.nocookie.net/looneytunesshowfanon/images/a/a4/Homer_Simpson_SWAG.jpg/revision/latest?cb=20130415233646",
                name: "this is a test",
                userId: 1,
                views: 53,
            }, {
                count: 3,
                id: 29,
                imageUrl: "http://www.madmonkeyhostels.com/wp-content/uploads/2017/05/Placeholder-Image-400x250.jpg?fd3260",
                name: "Code Monkey",
                userId: 1,
                views: 15,
            }, {
                count: 2,
                id: 30,
                imageUrl: "https://i.pinimg.com/736x/01/59/40/01594057534c60f94af3165f26d85629--monkey-humor-toddler-christmas.jpg",
                name: "Monkey",
                userId: 1,
                views: 5,
            }, {
                count: 1,
                id: 31,
                imageUrl: "https://www.99inspiration.com/wp-content/uploads/2016/01/Amazing-Landscape-Photography-by-Daniel-Herr-04.jpg",
                name: "Nature",
                userId: 1,
                views: 0,
            }, {
                count: 3,
                id: 32,
                imageUrl: "https://i.pinimg.com/736x/69/8a/f9/698af98ed6ed7af5c519255b7d3c148b--tacoma-washington-washington-state.jpg",
                name: "Tacoma",
                userId: 1,
                views: 23,
            }, {
                count: 1,
                id: 39,
                imageUrl: "http://images5.fanpop.com/image/photos/30400000/Yoshi-snowboard-yoshi-30430714-455-480.png",
                name: "Yoshi",
                userId: 1,
                views: 2,
            }, {
                count: 2,
                id: 33,
                imageUrl: "https://www.nationalparks.org/sites/default/files/yosemite-merced.jpg",
                name: "Yosemite",
                userId: 1,
                views: 15,
            }, {
                count: 1,
                id: 34,
                imageUrl: "https://www.nationalparks.org/sites/default/files/yosemite-merced.jpg",
                name: "Yoga",
                userId: 1,
                views: 3,
            }, {
                count: 3,
                id: 35,
                imageUrl: "https://vignette.wikia.nocookie.net/sonic/images/2/27/SFModernSonicRender.png/revision/latest?cb=20171108084934",
                name: "Sonic",
                userId: 1,
                views: 15,
            }, {
                count: 4,
                id: 36,
                imageUrl: "https://supermariorun.com/assets/img/stage/mario03.png",
                name: "Mario",
                userId: 1,
                views: 0,
            }, {
                count: 4,
                id: 37,
                imageUrl: "https://volumearchives.files.wordpress.com/2015/09/luigi-coins-new-super-mario-bros-2.png",
                name: "luigi",
                userId: 1,
                views: 4,
            }, {
                count: 2,
                id: 38,
                imageUrl: "https://vignette.wikia.nocookie.net/fantendo/images/c/c7/CrashifiedSmashified.png/revision/latest?cb=20160401195714",
                name: "Crash",
                userId: 1,
                views: 9,
            }, {
                count: 0,
                id: 40,
                imageUrl: "https://media.nintendo.com/nintendo/bin/5H164jJPiotlaTwpDmk0p-7CLtEl6Y_S/U9GsEP4CdmSaWMacSqjv1ftJ6q4VVe2n.png",
                name: "Mario and Yoshi",
                userId: 1,
                views: 0,
            }, {
                count: 1,
                id: 42,
                imageUrl: "https://vignette.wikia.nocookie.net/crashban/images/c/cc/Crash-bandicoot-n-sane-trilogy-character-two-column-03-ps4-eu-05jul17.png/revision/latest?cb=20170718153026",
                name: "Crash 2",
                userId: 1,
                views: 0
            }

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
            }, {
                count: 1,
                id: 6,
                imageUrl: "https://vignette.wikia.nocookie.net/looneytunesshowfanon/images/a/a4/Homer_Simpson_SWAG.jpg/revision/latest?cb=20130415233646",
                name: "this is a test",
                userId: 1,
                views: 53,
            }, {
                count: 3,
                id: 29,
                imageUrl: "http://www.madmonkeyhostels.com/wp-content/uploads/2017/05/Placeholder-Image-400x250.jpg?fd3260",
                name: "Code Monkey",
                userId: 1,
                views: 15,
            }, {
                count: 2,
                id: 30,
                imageUrl: "https://i.pinimg.com/736x/01/59/40/01594057534c60f94af3165f26d85629--monkey-humor-toddler-christmas.jpg",
                name: "Monkey",
                userId: 1,
                views: 5,
            }, {
                count: 1,
                id: 31,
                imageUrl: "https://www.99inspiration.com/wp-content/uploads/2016/01/Amazing-Landscape-Photography-by-Daniel-Herr-04.jpg",
                name: "Nature",
                userId: 1,
                views: 0,
            }, {
                count: 3,
                id: 32,
                imageUrl: "https://i.pinimg.com/736x/69/8a/f9/698af98ed6ed7af5c519255b7d3c148b--tacoma-washington-washington-state.jpg",
                name: "Tacoma",
                userId: 1,
                views: 23,
            }, {
                count: 2,
                id: 33,
                imageUrl: "https://www.nationalparks.org/sites/default/files/yosemite-merced.jpg",
                name: "Yosemite",
                userId: 1,
                views: 15,
            }, {
                count: 1,
                id: 34,
                imageUrl: "https://www.nationalparks.org/sites/default/files/yosemite-merced.jpg",
                name: "Yoga",
                userId: 1,
                views: 3,
            }, {
                count: 3,
                id: 35,
                imageUrl: "https://vignette.wikia.nocookie.net/sonic/images/2/27/SFModernSonicRender.png/revision/latest?cb=20171108084934",
                name: "Sonic",
                userId: 1,
                views: 15,
            }, {
                count: 4,
                id: 36,
                imageUrl: "https://supermariorun.com/assets/img/stage/mario03.png",
                name: "Mario",
                userId: 1,
                views: 0,
            }, {
                count: 4,
                id: 37,
                imageUrl: "https://volumearchives.files.wordpress.com/2015/09/luigi-coins-new-super-mario-bros-2.png",
                name: "luigi",
                userId: 1,
                views: 4,
            }, {
                count: 2,
                id: 38,
                imageUrl: "https://vignette.wikia.nocookie.net/fantendo/images/c/c7/CrashifiedSmashified.png/revision/latest?cb=20160401195714",
                name: "Crash",
                userId: 1,
                views: 9,
            }, {
                count: 1,
                id: 39,
                imageUrl: "http://images5.fanpop.com/image/photos/30400000/Yoshi-snowboard-yoshi-30430714-455-480.png",
                name: "Yoshi",
                userId: 1,
                views: 2,
            }, {
                count: 0,
                id: 40,
                imageUrl: "https://media.nintendo.com/nintendo/bin/5H164jJPiotlaTwpDmk0p-7CLtEl6Y_S/U9GsEP4CdmSaWMacSqjv1ftJ6q4VVe2n.png",
                name: "Mario and Yoshi",
                userId: 1,
                views: 0,
            }, {
                count: 1,
                id: 42,
                imageUrl: "https://vignette.wikia.nocookie.net/crashban/images/c/cc/Crash-bandicoot-n-sane-trilogy-character-two-column-03-ps4-eu-05jul17.png/revision/latest?cb=20170718153026",
                name: "Crash 2",
                userId: 1,
                views: 0
            }

        ],
        activeVaults: [],
        activeKeeps: [
            {
                id: 2,
                userid: 9,
                imageUrl: "https://wallpaperbrowse.com/media/images/750806.jpg",
                name: "Tree House?",
                views: 7,
                count: 3,
            }, {
                count: 1,
                id: 34,
                imageUrl: "https://www.nationalparks.org/sites/default/files/yosemite-merced.jpg",
                name: "Yoga",
                userId: 1,
                views: 3,
            }, {
                count: 3,
                id: 35,
                imageUrl: "https://vignette.wikia.nocookie.net/sonic/images/2/27/SFModernSonicRender.png/revision/latest?cb=20171108084934",
                name: "Sonic",
                userId: 1,
                views: 15,
            }, {
                count: 4,
                id: 36,
                imageUrl: "https://supermariorun.com/assets/img/stage/mario03.png",
                name: "Mario",
                userId: 1,
                views: 0,
            }, {
                count: 4,
                id: 37,
                imageUrl: "https://volumearchives.files.wordpress.com/2015/09/luigi-coins-new-super-mario-bros-2.png",
                name: "luigi",
                userId: 1,
                views: 4,
            }, {
                count: 2,
                id: 38,
                imageUrl: "https://vignette.wikia.nocookie.net/fantendo/images/c/c7/CrashifiedSmashified.png/revision/latest?cb=20160401195714",
                name: "Crash",
                userId: 1,
                views: 9,
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
            console.log("setUserKeeps: ", payload)
            state.userKeeps = payload
        },
        setActiveKeep(state, payload) {
            state.activeKeep = payload
        },
        setActiveVaultKeeps(state, payload) {
            state.activeKeeps = payload
        },
        setActiveVaults(state, payload) {
            state.activeVaults = payload
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
                        dispatch('getVaults')
                        dispatch('getUserKeeps')
                        router.push({ name: 'Home' })
                    }
                    else {
                        commit('setUser', {})
                        dispatch('getAllKeeps')
                        dispatch('getVaults')
                        dispatch('getUserKeeps')
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
                    dispatch('massageKeepData', { data: res.data, num: 2, set: "setActiveVaults" })
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
                    dispatch('massageKeepData', { data: res.data, num: 4, set: "setKeeps" })
                    console.log('Get Keeps: ', res)
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        massageKeepData({ commit, dispatch }, payload) {
            var arrayIndex = 0;
            var outArray4 = [[], [], [], []];
            var outArray2 = [[], []];
            for (var i = 0; i < payload.data.length; i++) {
                var thumbnail = payload.data[i];
                if (payload.num == 4) {
                    outArray4[arrayIndex].push(thumbnail);
                    arrayIndex++;
                }
                if (payload.num == 2) {
                    outArray2[arrayIndex].push(thumbnail);
                    arrayIndex++;
                }
                if (arrayIndex == payload.num) {
                    arrayIndex = 0;
                }
            }
            if (payload.num == 2) {
                commit(`${payload.set}`, outArray2)
            } else {
                commit(`${payload.set}`, outArray4)
            }
        },
        getUserKeeps({ commit, dispatch }) {
            var userId = this.state.user.id;
            api('keeps/user/' + userId)
                .then(res => {
                    dispatch('massageKeepData', { data: res.data, num: 4, set: "setUserKeeps" })
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
                    dispatch('massageKeepData', { data: res.data, num: 4, set: "setActiveVaultKeeps" })
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
        removeKeepFromVault({ commit, dispatch }, payload) {
            api.delete('vaultkeeps/vaults/' + payload.vaultId + '/keeps/' + payload.keepId, )
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

    }

})

export default store