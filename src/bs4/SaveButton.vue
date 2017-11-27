<template lang="pug">
button.btn.btn-primary.pull-right(type='submit' :disabled='form.isLoading === true || disabled === true')
  template(v-if='form.isLoading')
    span Saving... &nbsp
    i.fa.fa-spinner.fa-spin
  template(v-else)
    | {{ text }}
</template>

<<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    text: {
      default: 'Save',
      type: String
    }
  },
  computed: mapGetters(['form', 'disabled'])
}
</script>

