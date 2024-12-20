import { defineStore } from 'pinia';
import type { ModalState, InsightData, StudentData, IframeModalData } from '../types';

export const useModalStore = defineStore('modal', {
  state: () => ({
    modal: {
      isOpen: false,
      type: '',
    } as ModalState,
    insightData: {
      groupName: '',
      reportType: 'Snapshot',
    } as InsightData,
    studentData: {
      email: '',
      page: 'Dashboard',
    } as StudentData,
    iframeModal: {
      isOpen: false,
      url: '',
      title: '',
    } as IframeModalData,
  }),
  actions: {
    openModal(type: string) {
      this.modal.isOpen = true;
      this.modal.type = type;
    },
    closeModal() {
      this.modal.isOpen = false;
      this.modal.type = '';
    },
    openIframeModal(url: string, title: string) {
      this.iframeModal.isOpen = true;
      this.iframeModal.url = url;
      this.iframeModal.title = title;
    },
    closeIframeModal() {
      this.iframeModal.isOpen = false;
      this.iframeModal.url = '';
      this.iframeModal.title = '';
    },
  },
  persist: true,
});