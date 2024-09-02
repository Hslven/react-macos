// export * from './configs';

export interface MacActions {
  setLogin: (value: boolean) => void;
  shut: () => void;
  restart: () => void;
  sleep?: () => void;
}

export { IWallpaperData } from './configs/wallpaper';
export { IUser } from './configs/user';
export { store } from './configs/store';
