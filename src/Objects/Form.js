import Errors from './Errors'

class Form {
  constructor(data) {
    for (let field in data) {
      this[field] = data[field]
    }
    this.errors = new Errors()
    this.isLoading = false
  }

  data() {
    let fields = { ...this }
    delete fields.errors
    delete fields.isLoading
    delete fields.validations
    delete fields.horizontal
    delete fields.url
    delete fields.method
    delete fields.prefix
    delete fields.submited
    return fields
  }

  recordErrors(errors) {
    this.errors.record(errors)
  }

  reset() {
    for (let field in this.fields()) {
      this[field] = ''
    }
    this.errors.clear()
  }
}

export default Form
