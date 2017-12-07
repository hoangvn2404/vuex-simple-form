class Errors {
  constructor() {
    this.errors = {}
  }

  has(field) {
    return this.errors.hasOwnProperty(field)
  }

  any() {
    return Object.keys(this.errors).length > 0
  }

  get(field) {
    if (this.errors[field]) {
      if (typeof this.errors[field] === 'string') return this.errors[field]
      return this.errors[field].join(', ')
    }
  }

  record(errors) {
    this.errors = errors
    return this
  }

  clear(field) {
    if (field) {
      delete this.errors[field]
      return
    }
    this.errors = {}
  }
}
export default Errors
