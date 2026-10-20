<script setup>
import TeamHeader from '@/Components/Teams/TeamHeader.vue'
import TeamMembers from '@/Components/Teams/TeamMembers.vue'
import TeamFooter from '@/Components/Teams/TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore'
import Modal from '@/Components/Modal.vue'
import { ref } from 'vue'

let team = useTeamStore()
team.fill()
// Example of calling a store action.
setTimeout(() => {
  team.grow(25)
}, 2000)
let showModal = ref(false)
</script>

<template>
  <!-- listen for add event and set showmodal to true -->
  <TeamHeader @add="showModal = true" />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />
</template>
