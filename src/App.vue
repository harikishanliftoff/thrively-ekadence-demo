<script setup lang="ts">
import { useModalStore } from './stores/modal';
import InsightsModal from './components/InsightsModal.vue';
import StudentDetailsModal from './components/StudentDetailsModal.vue';
import IframeModal from './components/IframeModal.vue';

const store = useModalStore();
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl transition-all duration-300 hover:rotate-0 hover:scale-105"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 transition-transform duration-300">
        <div class="max-w-md mx-auto">
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <h1 class="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 mb-8 hover:scale-105 transition-transform duration-300">
                Thrively Partner Demo App
              </h1>
              <div class="space-y-4">
                <button
                  @click="store.openModal('insights')"
                  class="ripple button-animated w-full px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Insights
                </button>
                <button
                  @click="store.openModal('student')"
                  class="ripple button-animated w-full px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Student Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <InsightsModal />
    <StudentDetailsModal />
    <IframeModal />
  </div>
</template>