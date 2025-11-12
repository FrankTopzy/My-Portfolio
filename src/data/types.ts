import type { Dispatch, SetStateAction } from "react";

export type ServicesType = {
  imageSrc: string;
  langName: string
}

export type NavLinksType = {
  title: string;
  id: string;
  svgPath: string;
}

export type NavbarType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export type TechnologiesType = {
  id: string;
  name: string;
  imgSrc: string;
}

export type TechStack = {
  stack: string;
  imgSrc: string;
}