<!-- ---------------------------------------------------------------------------------- -->
<!-- ------------------- EP: 20 - COMPOSABLE EXAMPLE: LOCAL STORAGE ------------------- -->
<!-- ---------------------------------------------------------------------------------- -->
<!--
 This is part of the composition API. The optional API uses the 'export default' property.
 -->
<!--
  setup is attribute added to script tag  that behind scenes compiler picks up on and
  applies series of transitions to make everything function as expected
  -->
<!-- <script setup>
import { useStorage } from '@/composables/useStorage'

// going to use storage for food
let food = useStorage('food', 'tacos')
let age = useStorage('age', '21')
</script> -->

<!-- <template>
  <main> -->
<!-- if referencing globally then we might want to do 'the-welcome' -->
<!-- if we have component only being used once then 'The' is ideal -->
<!-- <TheWelcome /> -->

<!-- <p>what is your favourite food? <input type="text" v-model="food" /></p>

    <p>How old are you? <input type="text" v-model="age" /></p>
  </main>
</template> -->
<!-- ---------------------------------------------------------------------------------------- -->
<!-- ------------------- EP: 21 - Refactor to defineProps and defineEmits ------------------- -->
<!-- ---------------------------------------------------------------------------------------- -->
<!-- <script setup>
import TabbableTextarea from '@/components/TabbableTextarea.vue'
import { ref } from 'vue'
let comment = ref('initial textarea value')
</script>

<template>
  <main>
    <form>
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px" />
    </form>
  </main>
</template> -->
<!-- ---------------------------------------------------------------------------------------- -->
<!-- ------------------- EP: 22 - Store State in an External File
 ------------------- -->
<!-- ---------------------------------------------------------------------------------------- -->
<script setup>
import Quiz from '@/components/Quiz/Quiz.vue'
</script>

<template>
  <main>
    <Quiz />
  </main>
</template>
