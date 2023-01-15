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
      v-for="(option,i) in formattedOptions"
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
        v-for="(option,  i) in formattedOptions"
        :key="i"
        @click="handleOptionClickRegion(i)"
    >
      <div class="multiselect__checkbox"></div>
      <div class="multiselect__text" >
        {{ option.region }}
      </div>
    </div>

    <div
        class="multiselect__option"
        :class="{ 'multiselect__option--checked': option.checked }"
        v-for="(option,  i) in formattedOptions"
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
export default {
  data() {
    return{
      focused: false,
      optionsTop: '34px'
    }
  },
  computed: {
    formattedOptions() {
      let fo = this.options.map(option => {
        //let checked = true; //når denne kjører så er det selected - hvorfor blir ikke den true under?
        let checked = this.value.some( v => v === option.name.common); //TODO her står det egt option[this.valueProperty]
        console.log(option.name.common)
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
      let newValue = [...this.value];

      console.log(clickedValue)
      let existIndex = this.value.findIndex(v => v === clickedValue);

      //if the country does not exist in the list with selected countries
      if (existIndex === -1) {
        newValue.push(clickedValue)
      } else {
        newValue.splice(existIndex, 1)
      }
      this.$emit("input", newValue)

    },
    handleOptionClick(i) {
      let clickedValue = this.options[i][this.valueProperty].common; //TODO: må kanskje endre denne til [this.valueProperty]
      let newValue = [...this.value];

      console.log(clickedValue)
      let existIndex = this.value.findIndex( v => v === clickedValue);

      //if the country does not exist in the list with selected countries
      if(existIndex === -1 ) {
        newValue.push(clickedValue)
      } else {
        newValue.splice(existIndex, 1)
      }
      this.$emit("input", newValue)
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
    value: {
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
  }

}
</script>

<style scoped  src="./../styles/CountryPickerStyle.css"></style>