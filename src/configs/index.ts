/* 
踩坑 1：这种导出会吧对象变成 symbol 类型导致包裹在 default。 例如 wallpapers.default.dark 而不是 wallpapers.dark
export * as wallpapers from './wallpapers';
{
    "default": {
        "dark": "img/ui/wallpaper-dark.jpg",
        "light": "img/ui/wallpaper-light.jpg"
    }
  }
下面这种就不会
export { default as wallpapers } from './wallpapers';
*/

// 还是比较喜欢这种写法，不过这里可能会有比较多的类型，采用这种写法可能会显得比较冗余
// import wallpapers from './wallpapers';
// export { wallpapers };
export { default as wallpapers } from './wallpapers';
export { default as user } from './user';
