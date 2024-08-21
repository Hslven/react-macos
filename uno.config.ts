import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  presetIcons,
} from 'unocss';

const colorReg = (prefix: string) => new RegExp('^' + prefix + '-([0-9a-z]+)(/(\\d+))?$');

const colorAttr = (prefix: string, [, color, , opacity]: RegExpMatchArray) => {
  let lightColor = '',
    darkColor = '';

  if (['black', 'white'].includes(color)) {
    lightColor = color;
    darkColor = color === 'white' ? 'black' : 'white';
  } else {
    lightColor = `gray-${color}`;
    darkColor = `gray-${((+color === 900 || +color === 50 ? 950 : 900) - +color).toString()}`;
  }

  const attr = `${prefix}-${lightColor}${opacity ? '/' + opacity : ''}`;
  const darkAttr = `${prefix}-${darkColor}${opacity ? '/' + opacity : ''}`;

  return `${attr} dark:${darkAttr}`;
};

export default defineConfig({
  // +    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
  rules: [['cc-grid-shadow', { 'box-shadow': '0px 1px 5px 0px rgba(0, 0, 0, 0.3)' }]],
  // 这里是一些自定义的快捷方式，可以通过这些快捷方式来快速的应用一些样式，左侧是快捷方式，右侧是对应的样式
  shortcuts: [
    ['flex-center', 'flex items-center justify-center'],
    ['hstack', 'flex items-center'],
    ['vstack', 'flex-col items-center'],
    ['no-outline', 'outline-none focus:outline-none'],
    [colorReg('text-c'), (v) => colorAttr('text', v)],
    [colorReg('border-c'), (v) => colorAttr('border', v)],
    [colorReg('bg-c'), (v) => colorAttr('bg', v)],
    ['shadow-menu', 'shadow-md shadow-black/25 dark:shadow-black/50'],
    ['window-btn', 'w-12 h-12 text-black rounded-full flex items-center justify-center no-outline'],
    ['border-menu', 'border-gray-500/50'],
    [
      'menu-box',
      'fixed top-36 text-black bg-gray-200/90 border border-gray-500/50 rounded-lg shadow-md shadow-black/25 dark:shadow-black/50',
    ],
    [
      'safari-btn',
      'h-6 outline-none focus:outline-none rounded flex items-center justify-center border border-gray-300',
    ],
    ['cc-btn', 'flex items-center justify-center rounded-full w-32 h-32 text-white bg-blue-500'],
    [
      'cc-btn-active',
      'flex items-center justify-center rounded-full w-32 h-32 text-gray-700 bg-gray-400/25 dark:bg-gray-300/25',
    ],
    ['cc-text', 'text-xs text-gray-500'],
    ['cc-grid', 'bg-gray-200/80 rounded-xl shadow-lg backdrop-blur-2xl'],
    ['battery-level', 'absolute rounded-[1px] h-2 top-1/2 -mt-1 ml-2 left-0'],
  ],
  theme: {
    colors: {},
  },
  presets: [
    // 提供了大量的实用工具类，比如 p-4（padding: 1rem）、text-center（text-align: center）等。
    presetUno(),
    // 允许你通过属性的方式来应用样式，而不是传统的类名。例如，<div p="4" text="center"> 会应用 padding: 1rem 和 text-align: center。
    presetAttributify(),
    // 提供了一种简单的方式来使用图标，可以通过类似 i-carbon:settings 的类名来直接在你的 HTML 中引入图标。
    presetIcons({
      // 以下是默认将图标设为内联
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      // bi: () => import('@iconify-json/bi/icons.json'), // Bootstrap Icons
      // fa: () => import('@iconify-json/fa/icons.json'), // Font Awesome
      // mdi: () => import('@iconify-json/mdi/icons.json'), // Material Design Icons
      // heroicons: () => import('@iconify-json/heroicons/icons.json'), // Heroicons
    }),
    // 提供了一套预定义的排版样式，可以通过类似 prose 的类名来应用
    // presetTypography(),
    // 允许你定义和使用网络字体。你需要在配置中指定字体的配置，然后可以通过类名来使用这些字体
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    /**
     * 允许你在 CSS 中使用特殊的指令，比如 @apply，来应用一组实用工具类到一个选择器上。这使得你可以在 CSS 文件中复用 UnoCSS 生成的实用工具类，而不仅仅是在 HTML 中。
     * 例如，你可以在 CSS 文件中这样写：
     *
     * .custom-div {
     *   @apply text-center my-0 font-medium;
     * }
     * 将转变为：
     * .custom-div {
     *   margin-top: 0rem;
     *   margin-bottom: 0rem;
     *   text-align: center;
     *   font-weight: 500;
     * }
     * 也可以用 css 自定义属性来替换 @apply 指令， --at-apply: text-center，可以通过以下方式配置或禁用
     *  the defaults
     *  applyVariable: ['--at-apply', '--uno-apply', '--uno'],
     *  or disable with:
     *  applyVariable: false
     *
     * 文档：https://unocss.dev/transformers/directives#at-apply
     */
    transformerDirectives(),

    /**
     * <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
     * 转变成
     * <div class="hover:bg-gray-400 hover:font-medium font-light font-mono"/>
     */
    transformerVariantGroup(),
  ],
});
