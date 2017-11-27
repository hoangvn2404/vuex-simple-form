import { mapGetters } from 'vuex'
export default {
  data: () => ({
    touch: false
  }),

  props: {
    field: {
      type: String,
      required: true
    },
    label: {
      type: [String, Boolean],
      default: null
    },
    type: {
      type: String,
      validator: function(value) {
        return ['password', 'number', 'date', 'checkbox', 'hidden'].includes(value)
      }
    },
    placeholder: [String],
    inline: Boolean,
    collection: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    editInput() {
      this.touch = true
      this.form.errors.clear(this.field)
    }
  },
  computed: {
    ...mapGetters(['form', 'validations']),
    hideLabel() {
      return this.label === false
    },
    error: {
      cache: false,
      get() {
        if (this.form.errors.has(this.field)) return this.form.errors.get(this.field)
        if (this.validations[this.field]) return this.validations[this.field].join(', ')
        return null
      }
    },
    invalid: {
      cache: false,
      get() {
        if (this.touch === false) return false
        return !!this.error
      }
    },
    anyErrorsFromServer: {
      cache: false,
      get() {
        return this.form.errors.any()
      }
    },
    options() {
      if (typeof this.collection[0] === 'object') return this.collection
      return this.collection.map(c => ({ value: c, text: c }))
    }
  },
  watch: {
    anyErrorsFromServer: function(boolean) {
      if (boolean) this.touch = true
    }
  }
}
