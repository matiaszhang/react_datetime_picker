import { FC } from "react";

import moment from "moment";

import { HeaderProps } from "types/header.types";

import "./header.scss";

const Header: FC<HeaderProps> = ({ date, nextDisabled, prevDisabled, onClickNext, onClickPrevious }) => {
  return (
    <div className="header-container">
      <button className="header-icon prev" disabled={prevDisabled} onClick={onClickPrevious} />
      <span className="header-text">
        {moment(date).format("MMMM")} {date.getFullYear()}
      </span>
      <button className="header-icon next" disabled={nextDisabled} onClick={onClickNext} />
    </div>
  );
};

export default Header;
