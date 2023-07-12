import React from 'react';
import {Link} from 'react-router-dom';

type LogoImageProps = {
  width?: number;
  height?: number;
}

type LogoBasicProps = LogoImageProps & {
  additionalClassName?: string;
}

type LogoProps = LogoBasicProps & {
  isActive?: boolean;
};

function LogoImage({width = 81, height = 41}: LogoImageProps): React.JSX.Element {
  return(
    <img
      src="img/logo.svg"
      alt="6 cities logo"
      width={width}
      height={height}
    />
  );
}

function LogoOnMainPage({width, height, additionalClassName}: LogoBasicProps): React.JSX.Element {
  return(
    <a className={`logo ${additionalClassName || ''}`}>
      <LogoImage width={width} height={height}/>
    </a>
  );
}

function LogoOnInnerPage({width, height, additionalClassName}: LogoBasicProps): React.JSX.Element {
  return(
    <Link className={`logo ${additionalClassName || ''}`} to="/">
      <LogoImage width={width} height={height}/>
    </Link>
  );
}

function Logo({isActive, additionalClassName, width, height}: LogoProps): React.JSX.Element {
  return(isActive
    ? <LogoOnInnerPage additionalClassName={additionalClassName} width={width} height={height}/>
    : <LogoOnMainPage additionalClassName={additionalClassName} width={width} height={height}/>
  );
}

export default Logo;
