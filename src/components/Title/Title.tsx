import { FC } from "react";
import "./styles.css";
import titleIcon from "../../res/icons/app-icon.svg";
import { Link } from "react-router-dom";

export const Title: FC<{}> = () => {
  return (
    <Link className="title-container" to="">
      <img className="title-icon" src={titleIcon} alt="Guifaffinity-icon" />
      <h1>Guifaffinity</h1>
    </Link>
  );
};
