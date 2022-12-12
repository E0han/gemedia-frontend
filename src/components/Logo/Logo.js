import React from "react";
import Link from "next/link";
import { Title } from "../Core";

const Logo = ({ color = "front", height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        
        <Title color={color} variant="cardLg" className="mb-0">
        <img src="https://www.gemsolution.com.au/_next/static/images/gemlogo-e71147ebd85095c1937c6a09004e4343.gif" height={"20px"}/> GEMedia
        </Title>
      </a>
    </Link>
  );
};

export default Logo;
