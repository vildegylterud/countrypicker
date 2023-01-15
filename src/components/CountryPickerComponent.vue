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
    {{ option.name.common }}
    <span class="multiselect__remove"
          @click="
          preventClose($event);
          handleOptionClick(i)"> &times; </span>
  </div>

  <div class="multiselect__options" v-show="focused" :style="{top: optionsTop}" @click="preventClose">
    <div
        class="multiselect__option"
        :class="{ 'multiselect__option--checked': option.checked }"
        v-for="(option,  i) in regions"
        :key="i"
        @click="handleRegionClick(i)"
    >
      <div class="multiselect__checkbox"></div>
      <div class="multiselect__text options-group" >
        {{ option }}
      </div>
    </div>

    <div
        class="multiselect__option"
        :class="{ 'multiselect__option--checked': option.checked }"
        v-for="(option,  i) in this.formattedOptions"
        :key="i"
        @click="handleOptionClick(i)"
    >
      <div class="multiselect__checkbox"></div>
      <div class="multiselect__text" >
        {{ option.name.common }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {getCountryByRegion} from "@/service/countries";

export default {
  data() {
    return {
      focused: false,
      optionsTop: '34px',
      regions: ["Europe", "America", "Asia", "Americas", "Oceania", "Africa"]
    }
  },
  computed: {
    formattedOptions() {
      let fo = this.options.map((option) => {

        //TODO: denne må sjekke alle  - den setter bare første element som true
        let checkedCountries = this.modelValue.some(v => v === option.name.common);

        console.log(checkedCountries, option)

        return {...option, checked: checkedCountries};
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
    async handleRegionClick(i) {
      let clickedRegion = this.regions[i];

      const clickedValue = await getCountryByRegion(clickedRegion);
      const allValues = clickedValue.map(v => v.name.common)

      let newValue = [...this.modelValue];

      let existIndex = this.modelValue.findIndex(v => v === allValues);

      if (existIndex === -1) {
        newValue.push(allValues)
        console.log(newValue)
      } else {
        newValue.splice(existIndex, 1)
      }
      this.$emit("update:modelValue", newValue[i])

    },

    handleOptionClick(i) {
      let clickedValue = this.options[i].name.common;
      let newValue = [...this.modelValue];

      console.log(newValue)

      let existIndex = this.modelValue.findIndex( v => v === clickedValue);

      //if the country does not exist in the list with selected countries
      if(existIndex === -1 ) {
        newValue.push(clickedValue)
      } else {
        newValue.splice(existIndex, 1)
      }
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