import { useState } from 'react';

interface UseModalResult<T> {
  isModalOpen: boolean;
  selectedItem: T;
  openModal: (item: T) => void;
  closeModal: () => void;
}

export function useModal<T>(initialState: T): UseModalResult<T> {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T>(initialState);

  const openModal = (item: T) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    selectedItem,
    openModal,
    closeModal
  };
}
