import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTelegram, BiLogoDiscordAlt } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import AvatarMenu from "../common/avatarMenu";

const Header = () => {
  // const [isLogin, setIsLogin] = useState(false);
  const isLogin = false;

  return (
    <div>
      <div className="md:hidden">
        <div className="flex flex-row items-center justify-between">
          <p className="text-[14px] leading-[20px] text-white ml-[20.5px]">9:41</p>
          <img src="./header/symbol.png" alt="header symbol png" className="mr-[13.5px]"></img>
        </div>
      </div>

      <div className="flex justify-between align-middle header-bg border border-[#555659] w-full md:rounded-full py-[18px] pl-[32px] pr-[18px] ">
        <div className="hidden lg:block">
          <ul className="flex gap-[32px] text-white my-auto">
            <li key={1}>
              <a className="cursor-pointer" href="./">
                DeFi
              </a>
            </li>
            <li key={2}>
              <a className="cursor-pointer" href="./profile">
                Colourize
              </a>
            </li>
            <li key={3}>
              <a className="cursor-pointer" href="./detail">
                Arm Protocol
              </a>
            </li>
            <li key={4}>
              <a className="cursor-pointer" href="./analytics">
                Winners
              </a>
            </li>
            {/* <li key={5}>
              <a className="cursor-pointer" href="./land">
                Landing
              </a>
            </li> */}
          </ul>
        </div>

        <div className="flex">
          <img
            src="./header.png"
            alt="header png"
            className="w-[44px] h-[48px]"
          ></img>
          <img
            src="./headerTitle.png"
            alt="headerTitle png"
            className="w-[158px] h-[43px]"
          ></img>
        </div>
        {isLogin ? (
          <div className="flex ">
            <div className="w-[46px] p-[11px]">
              <AiOutlineTwitter size={"24px"} color="#E5E1A8" />
            </div>
            <div className="w-[46px] p-[11px]">
              <BiLogoTelegram size={"24px"} color="#E5E1A8" />
            </div>
            <div className="w-[46px] p-[11px]">
              <BiLogoDiscordAlt size={"24px"} color="#E5E1A8" />
            </div>
            <div className="w-[184px] h-[50px] py-[10px] px-[32px] justify-center align-middle cursor-pointer rounded-full header-border-style text-white">
              Connect Wallet
            </div>
          </div>
        ) : (
          <div className="flex flex-row gap-[16px]">
            <div className="flex flex-row">
              <div className="flex flex-row items-center gap-[8px] py-[12px] px-[24px] rounded-l-[100px] bg-[#131619] text-white">
                <div className="flex justify-center items-center rounded-full w-[20px] h-[20px] bg-[#505050]">
                  <FaEthereum color="#D2D3D3" size={"10px"} />
                </div>
                <p className="text-[14px] text-white font-semibold leading-[14px]">
                  0.023 SOL
                </p>
              </div>
              <div className="cursor-pointer py-[10px] pl-[8px] pr-[12px] rounded-r-[24px] border border-l-0 border-t-[#131619] border-r-[#131619] border-b-[#131619]">
                <AiOutlinePlus color="white" size={"24px"} />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="h-full w-[1px] border border-[#676A71]"></div>
            </div>
            <div className="hidden md:block">
              <div className="cursor-pointer flex items-center justify-center p-[10px]">
                <img
                  src="./bell.png"
                  alt="bell png"
                  className="w-[24px] h-[24px]"
                />
              </div>
            </div>
            <AvatarMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
