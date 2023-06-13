import { FC } from "react";
import "./styles.css";
import titleIcon from "../../res/icons/app-icon.svg";

export const Title: FC<{}> = () => {
  return (
    <section className="title-container">
      <img className="title-icon" src={titleIcon} alt="Guifaffinity-icon" />
      <h1>Guifaffinity</h1>
    </section>
  );
};
