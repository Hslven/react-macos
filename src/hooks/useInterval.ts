// delay 作为一个依赖项而不全是延迟值
export function useInterval(callback: () => void, delay?: number | null) {
  const savedCallback = useRef<() => void>(() => {});

  useEffect(() => {
    // 如果直接在 setInterval 中执行 callback()，那么 callback 的值将会是创建定时器时的那个版本。
    // 如果 callback 在组件生命周期中发生变化，定时器回调中使用的 callback 将不会更新。
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      // 这里是组件卸载或者依赖项发生变化的时候才会执行 return
      return () => clearInterval(interval);
    }
    return undefined;
  }, [delay]);
}
