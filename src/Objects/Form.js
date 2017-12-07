import Errors from './Errors'

class Form {
  constructor(data) {
    for (let field in data) {
      this[field] = data[field]
    }
    this.serverErrors = new Errors()
    this.clientErrors = new Errors()
    this.isLoading = false
  }

  data() {
    let fields = { ...this }
    delete fields.serverErrors
    delete fields.clientErrors
    delete fields.validations
    delete fields.horizontal
    delete fields.isLoading
    return fields
  }

  reset() {
    for (let field in this.data()) {
      this[field] = ''
    }
    this.serverErrors.clear()
    this.clientErrors.clear()
  }
}

export default Form
