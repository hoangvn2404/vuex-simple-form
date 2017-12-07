import FormObject from '../Objects/Form'
const Form = {
  state: {
    form: new FormObject()
  },
  mutations: {
    SET_FORM(state, form) {
      state.form = new FormObject({ ...form })
    }
  },
  actions: {
    set_form({ commit }, form) {
      commit('SET_FORM', form)
    }
  },
  getters: {
    form: state => state.form,
    clientErrors: state =>
      state.form.clientErrors.record(state.form.validations ? state.form.validations(state.form) : {}),
    serverErrors: state => state.form.serverErrors,
    disabled: (state, getters) => [getters.clientErrors.any(), getters.serverErrors.any()].includes(true)
  }
}

export default Form
