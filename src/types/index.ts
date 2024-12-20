export interface ModalState {
  isOpen: boolean;
  type: string;
}

export interface InsightData {
  groupName: string;
  reportType: string;
}

export interface StudentData {
  email: string;
  page: string;
}

export interface IframeModalData {
  isOpen: boolean;
  url: string;
  title: string;
}