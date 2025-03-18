import { useState } from 'react';

/**
 * Interface représentant le résultat de l'utilisation du hook useModal.
 * @template T - Le type de l'élément sélectionné.
 */
interface UseModalResult<T> {
  isModalOpen: boolean; // Indique si la modal est ouverte.
  selectedItem: T; // L'élément actuellement sélectionné.
  openModal: (item: T) => void; // Fonction pour ouvrir la modal avec un élément donné.
  closeModal: () => void; // Fonction pour fermer la modal.
}

/**
 * Hook personnalisé pour gérer l'état d'une modal.
 * @template T - Le type de l'élément sélectionné.
 * @param initialState - L'état initial de l'élément sélectionné.
 * @returns {UseModalResult<T>} - Un objet contenant les fonctions et les états pour gérer la modal.
 */
export function useModal<T>(initialState: T): UseModalResult<T> {
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour indiquer si la modal est ouverte.
  const [selectedItem, setSelectedItem] = useState<T>(initialState); // État pour l'élément actuellement sélectionné.

  /**
   * Fonction pour ouvrir la modal avec un élément donné.
   * @param item - L'élément à sélectionner.
   */
  const openModal = (item: T) => {
    setSelectedItem(item); // Met à jour l'élément sélectionné.
    setIsModalOpen(true); // Ouvre la modal.
  };

  /**
   * Fonction pour fermer la modal.
   */
  const closeModal = () => {
    setIsModalOpen(false); // Ferme la modal.
  };

  return {
    isModalOpen,
    selectedItem,
    openModal,
    closeModal
  };
}
