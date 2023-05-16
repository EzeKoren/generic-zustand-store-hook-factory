import { type StoreApi, type UseBoundStore } from "zustand";

export const storeHookFactory = <T extends {}>(store: UseBoundStore<StoreApi<T>>) => {
  const getStore = <R extends keyof T>(key: R): T[R] => store((state) => state[key]);

  const setStore = <S extends keyof T>(key: S, value: T[S]) => {
    const newState: Partial<T> = {};

    newState[key] = value;

    store.setState(newState);
  };

  return { getStore, setStore };
};
