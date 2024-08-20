import type { StateCreator } from 'zustand';
// import { enterFullScreen, exitFullScreen } from "~/utils";

export interface ISystemSlice {
  // dark: boolean;
  theme: 'light' | 'dark';
  // volume: number;
  // brightness: number;
  // wifi: boolean;
  // bluetooth: boolean;
  // airdrop: boolean;
  // fullscreen: boolean;
  // toggleDark: () => void;
  // toggleWIFI: () => void;
  // toggleBluetooth: () => void;
  // toggleAirdrop: () => void;
  // toggleFullScreen: (v: boolean) => void;
  // setVolume: (v: number) => void;
  // setBrightness: (v: number) => void;
}

export const createSystemSlice: StateCreator<ISystemSlice> = () => ({
  theme: 'dark',
  // volume: 100,
  // brightness: 80,
  // wifi: true,
  // bluetooth: true,
  // airdrop: true,
  // fullscreen: false,
  // toggleDark: () =>
  //   set((state) => {
  //     if (!state.dark) document.documentElement.classList.add('dark');
  //     else document.documentElement.classList.remove('dark');
  //     return { dark: !state.dark };
  //   }),
  // toggleWIFI: () => set((state) => ({ wifi: !state.wifi })),
  // toggleBluetooth: () => set((state) => ({ bluetooth: !state.bluetooth })),
  // toggleAirdrop: () => set((state) => ({ airdrop: !state.airdrop })),
  // toggleFullScreen: (v) =>
  //   set(() => {
  //     v ? enterFullScreen() : exitFullScreen();
  //     return { fullscreen: v };
  //   }),
  // setVolume: (v) => set(() => ({ volume: v })),
  // setBrightness: (v) => set((state) => ({ ...state, brightness: v })),
  // setBrightness: (v) => set(() => ({ brightness: v })),
});
