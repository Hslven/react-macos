import type { StateCreator } from 'zustand';

// ! 废弃⚠️
//  声明模块后可以直接在模块导入时使用类型, StateCreator是原生的
// import type { StateCreator, IStore, ISystemSlice } from 'zustand';
// declare namespace zustand ，这个是另外声明模块
declare namespace store {
  interface IStore {
    user: StateCreator<IUserSlice>;
    system: StateCreator<ISystemSlice>;
  }

  interface IUserSlice {
    typoraDoc: string;
  }

  interface ISystemSlice {
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
}
