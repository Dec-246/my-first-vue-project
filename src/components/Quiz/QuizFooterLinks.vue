<script setup>
import { state } from '@/stores/quizStore.js'
</script>

<template>
  <div>
    <h5>{{ state.name }}</h5>

    <button @click="state.name = 'A New Quiz Name'">Change Quiz Name</button>

    <ul>
      <li><a href="#">Get a job</a></li>
      <li><a href="#">Contact us</a></li>
    </ul>
  </div>
</template>
