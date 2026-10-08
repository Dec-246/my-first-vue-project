<!--
 This is part of the composition API. The optional API uses the 'export default' property.
 -->
<!--
  setup is attribute added to script tag  that behind scenes compiler picks up on and
  applies series of transitions to make everything function as expected
  -->
<script setup>
import { useFlash } from '@/composables/useFlash'

let { flash } = useFlash()
</script>

<template>
  <main>
    <!-- if referencing globally then we might want to do 'the-welcome' -->
    <!-- if we have component only being used once then 'The' is ideal -->
    <!-- <TheWelcome /> -->

    <p>
      <button @click="flash('Test', 'It Works!')">Click Me</button>
    </p>
  </main>
</template>
