<script setup lang="ts">
import { ref, computed } from 'vue';
import { useModalStore } from '../stores/modal';
import BaseModal from './BaseModal.vue';

const store = useModalStore();

const reportTypes = ['Snapshot', 'Learner Profile', 'Wellbeing Index', 'Hope Index'];

const groupName = ref(store.insightData.groupName);
const reportType = ref(store.insightData.reportType);

const handleViewInsight = () => {
  store.insightData.groupName = groupName.value;
  store.insightData.reportType = reportType.value;
  
  const url = `https://www.thrively.com/insights/${reportType.value.toLowerCase().replace(' ', '_')}/${groupName.value}`;
  store.openIframeModal(url, `${reportType.value} - ${groupName.value}`);
  store.closeModal();
};
</script>

<template>
  <BaseModal
    :is-open="store.modal.type === 'insights'"
    title="View Insights"
    @close="store.closeModal()"
  >
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Group Name</label>
        <input
          v-model="groupName"
          type="text"
          class="input-animated mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm px-4 py-2"
          placeholder="Enter group name"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
        <select
          v-model="reportType"
          class="select-animated mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm px-4 py-2"
        >
          <option v-for="type in reportTypes" :key="type" :value="type">
            {{ type }}
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