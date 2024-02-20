import { defineStore, acceptHMRUpdate } from "pinia";
import type { BrandedTheme } from "~/interfaces/theme";
import { DEFAULT_THEME } from "~/themes/default";

export interface AppState {
  theme: BrandedTheme;
}

export const useAppStore = defineStore("app", {
  state: (): AppState => ({
    theme: DEFAULT_THEME,
  }),
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
