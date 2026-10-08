<!--
 This is part of the composition API. The optional API uses the 'export default' property.
 -->
<!--
  setup is attribute added to script tag  that behind scenes compiler picks up on and
  applies series of transitions to make everything function as expected
  -->
<script setup>
import TheWelcome from '@/components/TheWelcome.vue'

let message = $ref('Hello, World!')

setTimeout(() => {
  message = 'I have been changed'
}, 2000)
</script>

<template>
  <main>
    <!-- if referencing globally then we might want to do 'the-welcome' -->
    <!-- if we have component only being used once then 'The' is ideal -->
    <TheWelcome />

    <p>{{ message }}</p>

    <p>
      <input type="text" v-model="message" />
    </p>
  </main>
</template>
