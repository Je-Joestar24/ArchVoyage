const state = {
    display: {
        id: -1,
        title: "",
        img: ""
    }
}

const getters = {
    getDisplay: () => state.display
}

const mutations = {
    setDisplay: (config) => {
        state.display = config;
    }
}

export { state, getters, mutations };