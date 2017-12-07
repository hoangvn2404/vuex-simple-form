<template lang="pug">
.form-group.row
  label.col-form-label(:for='name'
                       v-if='!hideLabel'
                       :class="form.horizontal ? 'col-sm-2' : 'col-sm-12'") {{ label || name | capitalize }}
  div(:class="form.horizontal ? 'col-sm-10' : 'col-sm-12'")
    template(v-if="type === 'select'")
      select.form-control(:placeholder='placeholder'
                          :name='name'
                          v-model='form[name]'
                          :class="{'is-invalid': invalid }"
                          @change="editInput()")
        option(v-for='item in options' :key='item.value' :value='item.value' :selected="item.value == form[name]") {{ item.text }}

    template(v-if="type === 'radio'")
      .form-check(v-for='item in options' :class="{ 'form-check-inline': inline }")
        label.form-check-label
          input.form-check-input(type='radio'
                                 v-model='form[name]'
                                 :value='item.value'
                                 @change="editInput()")
          | {{ item.text }}
      input.form-control(:class="{'is-invalid': invalid }" type='hidden')
    template(v-if="type === 'checkbox'")
      .form-check(v-for='item in options' :class="{ 'form-check-inline': inline }")
        label.form-check-label
          input.form-check-input(type='checkbox'
                                 v-model='form[name]'
                                 :value='item.value'
                                 @change="editInput()")
          | {{ item.text }}
      input.form-control(:class="{ 'is-invalid': invalid }" type='hidden')

    template(v-if="type === 'textarea'")
      textarea.form-control(:placeholder='placeholder'
                            :name='name'
                            v-model='form[name]'
                            :class="{'is-invalid': invalid }"
                            @keydown="editInput()")

    template(v-if="['text', 'password', 'number', 'date'].includes(type)")
      input.form-control(:type='type'
                          :placeholder='placeholder'
                          :name='name'
                          v-model='form[name]'
                          :class="{'is-invalid': invalid }"
                          @keydown="editInput()")
    .invalid-feedback(v-if='touch') {{ error }}
</template>
<script>
import Mixin from '../mixin'
export default {
  mixins: [Mixin]
}
</script>
