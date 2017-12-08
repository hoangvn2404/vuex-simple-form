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
    validateErrors: state =>
      state.form.validateErrors.record(state.form.validator ? state.form.validator(state.form.data()) : {}),
    disabled: (state, getters) => [getters.validateErrors.any(), getters.form.errors.any()].includes(true)
  }
}

export default Form
