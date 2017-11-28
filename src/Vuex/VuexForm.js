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
    validations: state => (state.form.validations ? state.form.validations(state.form) : {}),
    disabled: state => {
      const validationsErr = Object.keys(state.form.validations ? state.form.validations(state.form) : {}).length > 0
      const serverErr = state.form.errors ? state.form.errors.any() : false
      return [validationsErr, serverErr].includes(true)
    }
  }
}

export default Form
