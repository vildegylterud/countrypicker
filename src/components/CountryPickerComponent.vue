<template>
<div
    class="multiselect"
    @click="handleClick"
    @blur="focused = false"
    tabindex="-1 "
    :style="{width: width}"
>

  <div
      class="multiselect__selected"
      v-for="(option,i) in this.formattedOptions"
      :key="i"
      v-show="option.checked"
  >
    {{ option }}
    <span class="multiselect__remove"
          @click="
          preventClose($event);
          handleOptionClick(i)"> &times; </span>
  </div>

  <div class="multiselect__options" v-show="focused" :style="{top: optionsTop}" @click="preventClose">

    <div
        class="multiselect__option"
        :class="{ 'multiselect__option--checked': option.checked }"
        v-for="(option,  i) in this.formattedOptions"
        :key="i"
        @click="handleOptionClick(i)"
    >
      <div class="multiselect__checkbox"></div>
      <div class="multiselect__text" >
        {{ option }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return{
      focused: false,
      optionsTop: '34px'
    }
  },
  computed: {
    formattedOptions() {
      let fo = this.options.map((option) => {

        //let checked = true; //når denne kjører så er det selected - hvorfor blir ikke den true under?
        let checked = this.modelValue.some( v => v === option);//TODO her står det egt option[this.valueProperty]

        console.log(checked)
        //console.log(option.name.common) // checked og option.name.common er samme verdi altså checked er ikke en boolean
        return { ...option, checked };
      });
      console.log(fo)
      return fo;
    }
  },
  methods: {
    handleClick() {
      this.focused = !this.focused
    },
    preventClose(e) {
      e.stopPropagation();
    },
    handleOptionClickRegion(i) {
      let clickedValue = this.options[i].region; //TODO: må kanskje endre denne til [this.valueProperty]
      let newValue = [...this.modelValue];

      //console.log(clickedValue)
      let existIndex = this.modelValue.findIndex(v => v === clickedValue);

      //if the country does not exist in the list with selected countries
      if (existIndex === -1) {
        newValue.push(clickedValue)
      } else {
        newValue.splice(existIndex, 1)
      }
      this.$emit("input", newValue)

    },
    handleOptionClick(i) {
      let clickedValue = this.options[i]; //TODO: må kanskje endre denne til [this.valueProperty]
      let newValue = [...this.modelValue];

      let existIndex = this.modelValue.findIndex( v => v === clickedValue);

      //if the country does not exist in the list with selected countries
      if(existIndex === -1 ) {
        newValue.push(clickedValue)
      } else {
        newValue.splice(existIndex, 1)
      }
      console.log(newValue)
      this.$emit("update:modelValue", newValue)
    }
  },

  props: {
    width: {
      type: String,
      default: '650px'
    },
    options: {
      type: Array,
      default: () => []
    },
    modelValue: {
      default: () => []
    },
    placeholder: {
      type: String,
      default: "Click to select"
    },
    displayProperty: {
      type: String,
      default: "name"
    },
    valueProperty: {
      type: String,
      default: "value",
    },
  },
  emits: ['update:modelValue'],

}
</script>

<style scoped  src="./../styles/CountryPickerStyle.css"></style>