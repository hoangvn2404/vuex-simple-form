<template lang="pug">
.form-group.row
  label.col-form-label(:for='field' 
                       v-if='!hideLabel' 
                       :class="form.horizontal ? 'col-sm-2' : 'col-sm-12'") {{ label || field }}
  div(:class="form.horizontal ? 'col-sm-10' : 'col-sm-12'")
    select.form-control(:placeholder='placeholder' 
                        :name='field'
                        v-model='form[field]' 
                        :class="{'is-invalid': invalid }"
                        @change="editInput()")
      option(v-for='item in options' :key='item.value' :value='item.value' :selected="item.value == form[field]") {{ item.text }}
    .invalid-feedback(v-if='touch') {{ error }}
</template>
<script>
import fieldMixin from '../mixin'
export default {
  mixins: [fieldMixin]
}
</script>
