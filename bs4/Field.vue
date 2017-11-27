<template lang="pug">
.form-group.row
  label.col-form-label(:for='field' 
                       v-if='!hideLabel' 
                       :class="form.horizontal ? 'col-sm-2' : 'col-sm-12'") {{ label || field }}
  div(:class="form.horizontal ? 'col-sm-10' : 'col-sm-12'")
    input.form-control(:type='type'
                        :placeholder='placeholder' 
                        :name='field'
                        v-model='form[field]' 
                        :class="{'is-invalid': invalid }"
                        @keydown="editInput()")
    .invalid-feedback(v-if='touch') {{ error }}
</template>
<script>
import fieldMixin from '../mixin'
export default {
  mixins: [fieldMixin]
}
</script>
