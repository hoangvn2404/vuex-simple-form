# ![Form For](./assets/logo.png)
VueJS form with vuex, inspired by Rails gem simple_form ```html <form @submit.prevent='onSubmit'>
    <field for='title' />
    <field for='description' />
    <field for='completed' type='checkbox' :collection='options.completed' />
    <field for='completed' type='radio' :collection='options.completed_radio' />
    <field for='days' type='checkbox' :collection='options.days' :inline='true' />
    <button class='btn btn-primary' type='submit'>
      Save
    </button>
  </form> ``` Just wanna play with it? [Check out my sandboxes](https://codesandbox.io/s/0mxvw6zwrv)
## Installation
Install the core package: ```bash npm install vue-simple-form --save ```
## Vuex setup
import VuexForm from the package ```javascript import VuexForm from 'vuex-simple-form' Vue.use(Vuex) const store = new Vuex.Store({
  modules: {
  	form: VuexForm,
    ... // your other modules
  }
})
``` then add store to our Vue App ```javascript new Vue({
  el: '#app',
  store: store,
  template: '<App/>',
  components: { App }
})
``` Vuex form module provide you with the following getters & actions **Getters** * ` form (Object)` our current form object * ` validations 
(Object)` client side validation error * ` disabled (Boolean)` return true if form pass all validation checking (both client & server side) 
**Actions** * `` set_form({form_object})`` set the form
    
### Create new form
```javsacript import { mapActions } from 'vuex' export default {
  data: () => ({
    todo: {
      title: 'a',
      description: 'def',
      completed: true,
      days: [1,2]
    }
  }),
  
  methods: {
    ...mapActions(['set_form'])
  },
  created: function() {
    this.set_form({
      ...this.todo
    })
  }
}
```
### Import the Field Component
Currently vuex-simple-form only support Bootstrap 4 input components, more are coming. Don't forget to add Bootstrap 4 CSS to your 
application, the easiest way is to add CDN to your `index.html` file ```html <link rel="stylesheet" 
href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" 
integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
      crossorigin="anonymous"> ``` You only need to import only one Component for all type of input ```javascript import { BS4Field as Field 
} from 'vuex-simple-form'
export default {
	components: { Field },
    ... // your component data, methods, computed, etc
}
``` Following are all field props you can use
| Property | Description | Type | Required | Default | --------- |:-----------:|:-----:|:--------:|:-------:| for | the variable that the 
|input present | String | `Yes` | | type | `text` `password` `number` `date` `checkbox` `radio` `textarea` `select` | String | `No` | `text` 
|label | label for the input, if you pass a string, it will be the label, pass `false` for turn off label | String/Boolean | `No` | the 
|field name placeholder | placeholder | String | `No` | `null` collection | options for input with type `checkbox/radio/select`| `[{text: 
|xxx, value: xxx}, ...]` or `[a,b,c]` | `No`| `[]`
| inline | additional option for input type `checkbox/radio/select` to set all the options stay in one line | Boolean | `No` | `false`
When using with pug/jade templating language for writing html, you could make form with very few lines of code like this ```html <template 
lang='pug'> form(@submit.prevent='onSubmit')
  field(for='title')
  field(for='first_name')
  field(for='description')
  field(for='completed', type='checkbox', :collection='options.completed')
  field(for='completed', type='radio', :collection='options.completed_radio')
  field(for='days', type='checkbox', :collection='options.days', :inline='true')
  button.btn.btn-primary(type='submit', :disabled='disabled') Save </template> ```
## Validation
There are four validation trigger states: `mount, focus, change, blur` The default validation is `validate="focus,change,blur"`. To disable 
validation use `validate={false}`. Validation takes into consideration both custom validators and HTML 5 validations, in this order.
## Motivation
FormFor is inspired by [Simple Form](https://github.com/plataformatec/simple_form), a gem that greatly facilitates creating forms in Rails.
