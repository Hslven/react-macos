import { wallpapers, user } from '@/configs';
import type { MacActions } from '@/types';
export default function Login(props: MacActions) {
  const [password, setPassword] = useState(user.password);
  // const [sign, setSign] = useState("Click to enter");
  const theme = useStore((state) => state.theme);
  const keyPress = (e: React.KeyboardEvent) => {
    const keyCode = e.key;
    if (keyCode === 'Enter') loginHandle();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const loginHandle = () => {
    if (user.password === password) {
      console.log('login success');
      // not set password or password correct
      props.setLogin(true);
      //   } else if (password !== "") {
      // password not null and incorrect
      //     setSign("Incorrect password");
      return;
    }
    console.log('login failed');
  };

  return (
    <div
      className="login size-full text-center"
      style={{
        background: `url(${wallpapers[theme]}) center/cover no-repeat`,
      }}
      // onClick={() => loginHandle()}
    >
      <div className="inline-block w-auto relative top-4/5 -mt-40">
        {/* Avatar */}
        <img className="rounded-full size-24 my-0 mx-auto" src={user.avatar} alt="img" />
        <div className="font-semibold mt-2 text-xl text-white">{user.name}</div>

        {/* Password Input */}
        <div className="mx-auto px-1 grid grid-cols-5 w-44 h-8 mt-4 rounded-2xl backdrop-blur-2xl bg-gray-300/50">
          <input
            className="placeholder-gray-50 text-sm border-none text-white col-start-1 col-span-4 no-outline bg-transparent px-2 "
            type="password"
            placeholder="Enter Password"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={keyPress}
            value={password}
            onChange={handleInputChange}
          />
          {password && (
            <div
              className="col-start-5 col-span-1 flex-center cursor-pointer"
              onClick={loginHandle}
            >
              <span className="i-line-md:arrow-left-circle text-white ml-1 font-size-5 rotate-180" />
            </div>
          )}
        </div>

        {/* <div mt-2 cursor-pointer text="sm gray-200">
          {sign}
        </div> */}
      </div>

      {/* buttons */}
      <div className="bottom-2 text-sm fixed  inset-x-0 mx-auto flex flex-row space-x-4 w-max">
        <div
          className="hstack flex-col text-white w-24 "
          // onClick={(e) => props.sleepMac(e)}
        >
          <div className="flex-center size-10 bg-gray-700 cursor-pointer rounded-full">
            <span className="i-line-md:moon text-3xl" />
          </div>
          <span className="font-avenir">Sleep</span>
        </div>
        <div className="hstack flex-col text-white w-24 " onClick={() => props.restart()}>
          <div className="flex-center size-10 bg-gray-700 cursor-pointer rounded-full">
            <span className="i-ri:restart-line text-3xl" />
          </div>
          <span className="font-avenir">Restart</span>
        </div>
        <div className="hstack flex-col text-white w-24 " onClick={() => props.shut()}>
          <div className="flex-center size-10 bg-gray-700 cursor-pointer rounded-full">
            <span className="i-ri:shut-down-line text-3xl" />
          </div>
          <span className="font-avenir">Shut Down</span>
        </div>
      </div>
    </div>
  );
}
