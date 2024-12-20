<script setup lang="ts">
import { ref } from 'vue';
import { useModalStore } from '../stores/modal';
import BaseModal from './BaseModal.vue';

const store = useModalStore();

const studentPages = ['Dashboard', 'Profile', 'Portfolio'];

const email = ref(store.studentData.email);
const page = ref(store.studentData.page);

const handleViewInsight = () => {
  store.studentData.email = email.value;
  store.studentData.page = page.value;
  
  const url = `https://www.thrively.com/ext/test_partner/student/${email.value}/${page.value.toLowerCase()}`;
  store.openIframeModal(url, `Student ${page.value} - ${email.value}`);
  store.closeModal();
};
</script>

<template>
  <BaseModal
    :is-open="store.modal.type === 'student'"
    title="Student Details"
    @close="store.closeModal()"
  >
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Student Email</label>
        <input
          v-model="email"
          type="email"
          class="input-animated mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm px-4 py-2"
          placeholder="Enter student email"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Page</label>
        <select
          v-model="page"
          class="select-animated mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm px-4 py-2"
        >
          <option v-for="p in studentPages" :key="p" :value="p">
            {{ p }}
          </option>
        </select>
      </div>
      <div class="mt-5 sm:mt-6">
        <button
          type="button"
          class="ripple button-animated inline-flex w-full justify-center rounded-md px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
          @click="handleViewInsight"
        >
          View Insight
        </button>
      </div>
    </div>
  </BaseModal>
</template>