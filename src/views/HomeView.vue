<!--
 This is part of the composition API. The optional API uses the 'export default' property.
 -->
<!--
  setup is attribute added to script tag  that behind scenes compiler picks up on and
  applies series of transitions to make everything function as expected
  -->
<script setup>
import { useStorage } from '@/composables/useStorage'

// going to use storage for food
let food = useStorage('food', 'tacos')
let age = useStorage('age', '21')
</script>

<template>
  <main>
    <!-- if referencing globally then we might want to do 'the-welcome' -->
    <!-- if we have component only being used once then 'The' is ideal -->
    <!-- <TheWelcome /> -->

    <p>what is your favourite food? <input type="text" v-model="food" /></p>

    <p>How old are you? <input type="text" v-model="age" /></p>
  </main>
</template>
