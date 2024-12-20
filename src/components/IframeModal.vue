<script setup lang="ts">
import { useModalStore } from '../stores/modal';
import BaseModal from './BaseModal.vue';

const store = useModalStore();
</script>

<template>
  <BaseModal
    :is-open="store.iframeModal.isOpen"
    :title="store.iframeModal.title"
    :full-width="true"
    @close="store.closeIframeModal()"
  >
    <div class="w-full h-[80vh]">
      <iframe
        :src="store.iframeModal.url"
        class="w-full h-full border-0 rounded"
        allow="fullscreen"
      ></iframe>
    </div>
  </BaseModal>
</template>