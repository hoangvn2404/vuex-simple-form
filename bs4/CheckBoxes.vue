<template lang="pug">
.form-group.row
  label.col-form-label(:for='field' 
                       v-if='!hideLabel' 
                       :class="form.horizontal ? 'col-sm-2' : 'col-sm-12'") {{ label || field }}
  div.text-left(:class="form.horizontal ? 'col-sm-10' : 'col-sm-12'")
    .form-check(v-for='item in options' :class="{ 'form-check-inline': inline }")
      label.form-check-label
        input.form-check-input(type='checkbox' 
                               v-model='form[field]' 
                               :value='item.value' 
                               @change="editInput()")
        | {{ item.text }}
    input.form-control(:class="{ 'is-invalid': invalid }" type='hidden')
    .invalid-feedback(v-if='touch') {{ error }}
</template>
<script>
import fieldMixin from '../mixin'
export default {
  mixins: [fieldMixin]
}
</script>
