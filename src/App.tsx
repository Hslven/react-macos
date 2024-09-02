import '@/styles/index.css';

import Login from '@/pages/Login';
import Boot from '@/pages/Boot';

function App() {
  // 登录状态，用于显示登录界面
  const [login, setLogin] = useState<boolean>(false);
  // 休眠状态，用于显示休眠界面
  const [sleep, setSleep] = useState<boolean>(false);
  // 用于显示休眠界面
  const [booting, setBooting] = useState<boolean>(false);
  // 用于显示休眠界面的进度条加载
  const [restart, setRestart] = useState<boolean>(false);

  const shutMac = () => {
    setLogin(false);
    setRestart(false);
    setSleep(false);
    setBooting(true);
    console.log(booting, login);
  };

  const restartMac = () => {
    setLogin(false);
    setSleep(false);
    setRestart(true);
    setBooting(true);
  };

  useEffect(() => {
    setLogin(false);
  }, []);

  if (booting) {
    return <Boot restart={restart} sleep={sleep} setBooting={setBooting} />;
  }
  if (!login) {
    return <Login setLogin={setLogin} shut={shutMac} restart={restartMac} />;
  }
  // return <Desktop />
}

export default App;
