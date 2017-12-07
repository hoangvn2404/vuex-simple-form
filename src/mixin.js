import { mapGetters } from 'vuex'
export default {
  data: () => ({
    touch: false
  }),

  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: [String, Boolean],
      default: null
    },
    type: {
      type: String,
      default: 'text',
      validator: function(value) {
        return ['text', 'password', 'number', 'date', 'checkbox', 'radio', 'textarea', 'select'].includes(value)
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
      this.serverErrors.clear(this.name)
    }
  },
  computed: {
    ...mapGetters(['form', 'clientErrors', 'serverErrors']),
    hideLabel() {
      return this.label === false
    },
    error: {
      cache: false,
      get() {
        if (this.serverErrors.has(this.name)) return this.serverErrors.get(this.name)
        if (this.clientErrors.has(this.name)) return this.clientErrors.get(this.name)
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
        return this.serverErrors.any()
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
  },
  filters: {
    capitalize: function(value) {
      if (!value) return ''
      value = value
        .toString()
        .replace('_', ' ')
        .replace('-', ' ')
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
