<script setup>
import { useFlash } from '@/composables/useFlash'

let { flash } = useFlash()
</script>

<template>
  <div>
    <p>
      <button @click="flash('Yay!', 'It works on this page! WOW!', 'info')">Click Me</button>
    </p>
  </div>
</template>
