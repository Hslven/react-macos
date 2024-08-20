import { create } from 'zustand';

import { createSystemSlice, type ISystemSlice } from './slices/system';
import { createUserSlice, type IUserSlice } from './slices/user';

export const useStore = create<ISystemSlice & IUserSlice>((...func) => ({
  ...createUserSlice(...func),
  ...createSystemSlice(...func),
}));

// 本来是吧每个模块写到里面，比如下面这个格式，但是一想可以使用 useSystem，useUser 这种方式，纯纯没事找干，也不符合官方写法
/* 
interface IStore {
  user: IUserSlice;
  system: ISystemSlice;
}

如果符合上面格式，我是在里面这样写的
export const createSystemSlice: StateCreator<{ system: ISystemSlice }> = () => ({
*/
