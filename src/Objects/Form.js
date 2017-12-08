import Errors from './Errors'

class Form {
  constructor(data) {
    for (let field in data) {
      this[field] = data[field]
    }
    this.errors = new Errors()
    this.validateErrors = new Errors()
  }

  data() {
    let fields = { ...this }
    delete fields.errors
    delete fields.validateErrors
    delete fields.validator
    delete fields.horizontal
    delete fields.isLoading
    return fields
  }

  reset() {
    for (let field in this.data()) {
      this[field] = ''
    }
    this.errors.clear()
    this.validateErrors.clear()
  }
}

export default Form
