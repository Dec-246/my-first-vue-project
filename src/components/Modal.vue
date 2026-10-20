<script setup>
defineProps({
  show: Boolean,
})
</script>

<template>
  <!-- creating transition styling for cleaner code/ less duplicated code.
   using Modal as a name to reference the styles from below.

   Can optionally put style code inside transition tags but would lead to duplicated code. -->
  <Transition name="modal">
    <!-- only show div if 'show' is true -->
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div>
          <slot>default body</slot>
        </div>

        <footer class="modal-footer">
          <slot name="footer">
            <button @click="$emit('close')">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<!-- applying styling in same file -->
<!-- these styles are only for this file therefore no requirement for global styles file. -->
<style>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}
/* vw means viewPort Width */
.modal-container {
  background: white;
  padding: 1rem;
  width: 88vw;
  max-width: 500px;
  border-radius: 7px;
}
.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}
.modal-footer button {
  background: #ddd;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}
.modal-footer button:hover {
  background: #c8c8c8;
}

/* enter from means we starts with the modal having 0% opacity and
   enter to means once the modal is displayed, it will have 100% opacity.  */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-to,
.modal-leave-from {
  opacity: 100;
}
</style>
