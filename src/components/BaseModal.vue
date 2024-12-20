<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

defineProps<{
  isOpen: boolean;
  title: string;
  fullWidth?: boolean;
}>();

defineEmits<{
  (e: 'close'): void;
}>();

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close');
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});
</script>

<template>
  <Transition name="modal">
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur-sm"></div>
      <div class="flex min-h-full items-center justify-center p-4">
        <div 
          class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 hover:shadow-2xl"
          :class="{ 'sm:max-w-lg': !fullWidth, 'sm:max-w-[90vw]': fullWidth }"
        >
          <div class="absolute right-0 top-0 pr-4 pt-4">
            <button
              type="button"
              class="rounded-full bg-white text-gray-400 hover:text-gray-500 transition-transform hover:scale-110 p-1"
              @click="$emit('close')"
            >
              <span class="sr-only">Close</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="text-center sm:text-left">
            <h3 class="text-lg font-medium leading-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 mb-4">
              {{ title }}
            </h3>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
}

.modal-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}
</style>