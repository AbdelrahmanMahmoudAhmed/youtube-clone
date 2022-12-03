import React, {
  Dispatch,
  SetStateAction,
  useState,
  KeyboardEvent,
} from "react";
import "./header.scss";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
}
function Header(props: Props) {
  const [inputVal, setInputVal] = useState("");
  const setInputData = (e: KeyboardEvent<HTMLInputElement>): void => {
    setInputVal(e.currentTarget.value);
  };
  const getNewData = (): void => {
    props.setSearch(inputVal);
  };
  return (
    <header className="search-header">
      <div className="header-holder container">
        <div className="logo-holder">
          <YouTubeIcon sx={{ color: "#cc0000" }} style={{ fontSize: "62px" }} />
          <div className="text-logo">
            <p>
              YouTube <span>EG</span>
            </p>
          </div>
        </div>
        <div className="input-holder">
          <input type="text" placeholder="Search" onKeyUp={setInputData} />
          <span onClick={getNewData}>
            <SearchIcon sx={{ color: "#aaa" }} />
          </span>
        </div>
      </div>
      <div className="header-holder-media container">
        <div className="logo">
          <YouTubeIcon sx={{ color: "#fff" }} style={{ fontSize: "60px" }} />
        </div>
        <div className="search-input">
          <input type="text" placeholder="Search" onKeyUp={setInputData} />
          <span onClick={getNewData}>
            <SearchIcon sx={{ color: "#f1f3f4" }} />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
// function setSearch(arg0: string) {
//   throw new Error("Function not implemented.");
// }
