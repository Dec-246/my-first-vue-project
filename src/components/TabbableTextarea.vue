<script setup>
// defining props here for the v-model on home screen
defineProps({
  modelValue: String,
})
// need to define action to emit to call the modelValue. - needed to make v-model and cuwstom components work
let emit = defineEmits(['update:modelValue'])
// single function to handle tab press
function onTabPress(e) {
  // getting the target of the event (the text area if we're typing in the text area box)
  let textarea = e.target
  let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd
  // using .value to access the node
  textarea.value = val.substring(0, start) + '\t' + val.substring(end)
  textarea.selectionStart = textarea.selectionEnd = start + 1
}
</script>
<!-- registering events here -->
<template>
  <!-- if user hits Tab key inside text area, stop browsers default behaviour -->

  <!-- grab exact text in text area once user releases any key, send this exact text to parent component (HomeView) -
    update:modelValue is Vue's special internal event name keeping v-model updated. -->

  <!-- look at incoming data (modelValue - from parent component props), force textarea to show text. -->
  <textarea
    @keydown.tab.prevent="onTabPress"
    @keyup="emit('update:modelValue', $event.target.value)"
    v-text="modelValue"
  />
</template>
