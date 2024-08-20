import type { StateCreator } from 'zustand';
export interface IUserSlice {
  typoraDoc: string;
}
export const createUserSlice: StateCreator<IUserSlice> = () => ({
  typoraDoc: `# Hi 👋\nThis is a simple clone of [Typora](https://typora.io/). Built on top of [Milkdown](https://milkdown.dev/), an open-source WYSIWYG markdown editor.`,
});
