import './App.css';

import Login from '@/pages/Login';

function App() {
  const [login, setLogin] = useState<boolean>(false);
  useEffect(() => {
    setLogin(true);
  }, []);
  if (login) {
    return <Login></Login>;
  }
}

export default App;
