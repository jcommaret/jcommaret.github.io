import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** `false` pendant le prérendu et l'hydratation, `true` ensuite côté client. */
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
