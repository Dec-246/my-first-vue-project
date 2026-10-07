<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <!-- if referencing globally then we might want to do 'the-welcome' -->
    <!-- if we have component only being used once then 'The' is ideal -->
    <TheWelcome />
  </main>
</template>
