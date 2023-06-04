import type { FC } from "react";
import logo from "./img/logo-for-light.svg";
import mainImage from "./img/main-icon.svg";
import tempChart from "./img/chart.svg";
import tempProjPrev from "./img/temp-project-prev.svg";
import skblabLogo from "./img/skb-lab.svg";
import naumenLogo from "./img/naumen.svg";
import megaphoneLogo from "./img/megaphone.svg";
import ucsbLogo from "./img/ucsb.svg";
import platform from "./img/platform.svg";
import platformFirstScreen from "./img/screen-1.png";
import platformSecondScreen from "./img/screen-2.png";
import platformThirdScreen from "./img/screen-3.png";
import keyboardProject from "./img/keyboard-saga-project.png";
import plasmotronProject from "./img/plasmatron-project.png";
import geneticProject from "./img/genetic-project.png";

interface Props {
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const LogoIcon: FC<Props> = ({ onClick }) => {
  return <img src={logo} alt="" onClick={onClick} />;
};

export const MainImage: FC<Props> = ({ className }) => {
  return <img src={mainImage} alt="" className={className} draggable={false} />;
};

export const TempChart: FC<Props> = ({ className }) => {
  return <img src={tempChart} alt="" className={className} />;
};
export const GenerateImageProjectPreview: FC<Props> = ({ className }) => {
  return <img src={tempProjPrev} alt="" className={className} />;
};

export const KeyboardProjectPreview: FC<Props> = ({ className }) => {
  return <img src={keyboardProject} alt="" className={className} />;
};

export const PlasmotronProjectPreview: FC<Props> = ({ className }) => {
  return <img src={plasmotronProject} alt="" className={className} />;
};

export const GeneticProjectPreview: FC<Props> = ({ className }) => {
  return <img src={geneticProject} alt="" className={className} />;
};

export const UcsbLogo: FC<Props> = ({ className }) => {
  return <img src={ucsbLogo} alt="" className={className} />;
};
export const NaumenLogo: FC<Props> = ({ className }) => {
  return <img src={naumenLogo} alt="" className={className} />;
};
export const MegaphoneLogo: FC<Props> = ({ className }) => {
  return <img src={megaphoneLogo} alt="" className={className} />;
};
export const SkblabLogo: FC<Props> = ({ className }) => {
  return <img src={skblabLogo} alt="" className={className} />;
};
export const PlatformImage: FC<Props> = ({ className }) => {
  return <img src={platform} alt="" className={className} />;
};

export const PlatformFirstScreen: FC<Props> = ({ className }) => {
  return <img src={platformFirstScreen} alt="" className={className} />;
};

export const PlatformSecondScreen: FC<Props> = ({ className }) => {
  return <img src={platformSecondScreen} alt="" className={className} />;
};

export const PlatformThirdScreen: FC<Props> = ({ className }) => {
  return <img src={platformThirdScreen} alt="" className={className} />;
};
