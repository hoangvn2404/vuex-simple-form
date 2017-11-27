class Errors {
  constructor() {
    this.errors = {}
    this.general = null
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
    if (typeof errors === 'string') {
      this.general = errors
    } else {
      this.errors = errors
    }
  }

  clear(field) {
    if (field) {
      delete this.errors[field]
      return
    }
    this.errors = {}
    this.general = null
  }
}
export default Errors
