interface BootProps {
  restart: boolean;
  sleep: boolean;
  setBooting: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

export default function Boot({ restart, sleep, setBooting }: BootProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    if (restart && !sleep) setLoading(true);
  }, [restart, sleep]);

  useInterval(
    () => {
      const newPercent = percent + 0.15;
      if (newPercent >= 100) {
        setBooting(false);
        setLoading(false);
      } else setPercent(newPercent);
    },
    loading ? 1 : null
  );

  const handleClick = () => {
    if (sleep) setBooting(false);
    else if (restart || loading) return;
    else setLoading(true);
  };

  return (
    <div className="size-full bg-black flex-center" onClick={handleClick}>
      <div className="i-fa-brands:apple text-white -mt-4 size-20 sm:size-24" />
      {loading && (
        <div className="mx-auto absolute top-3/4 inset-x-0 w-56 h-1 sm:h-1.5 bg-gray-500 rounded overflow-hidden">
          <span
            className="absolute top-0 bg-white h-full rounded-sm"
            style={{
              width: `${percent.toString()}%`,
            }}
          />
        </div>
      )}
      {!restart && !loading && (
        <div className="absolute top-3/4 inset-x-0 t-16 sm:t-20 x-auto text-sm text-gray-200 text-center">
          Click to {sleep ? 'wake up' : 'boot'}
        </div>
      )}
    </div>
  );
}
