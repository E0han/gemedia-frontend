import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { Title } from "../Core";
import GlobalContext from "../../context/GlobalContext";
import homeLogoB from "../../assets/image/pageHeader/GEMedia_black.png"
import homeLogoW from "../../assets/image/pageHeader/GEMedia_white.png"


const Logo = ({ color, height, className = "", ...rest }) => {
  const gContext = useContext(GlobalContext);
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        
        <Title color={color} variant="cardLg" className="mb-0">
        <img src={gContext.theme.bodyDark ? homeLogoW : homeLogoB} height={"20px"}/>
        
        </Title>
      </a>
    </Link>
  );
};

export default Logo;
