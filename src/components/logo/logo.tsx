import React from 'react';
import {Link} from 'react-router-dom';
import styles from './logo.module.css';

type LogoImageProps = {
  width?: number;
  height?: number;
}

type LogoBasicProps = LogoImageProps & {
  additionalClassName?: string;
}

type LogoProps = LogoBasicProps & {
  disabled?: boolean;
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

function DisabledLogo({width, height, additionalClassName}: LogoBasicProps): React.JSX.Element {
  return(
    <div className={`${styles.logo} ${additionalClassName || ''}`}>
      <LogoImage width={width} height={height}/>
    </div>
  );
}

function EnabledLogo({width, height, additionalClassName}: LogoBasicProps): React.JSX.Element {
  return(
    <Link className={`${styles.logo} ${additionalClassName || ''}`} to="/">
      <LogoImage width={width} height={height}/>
    </Link>
  );
}

function Logo({width, height, additionalClassName, disabled}: LogoProps): React.JSX.Element {
  return(disabled
    ? <DisabledLogo additionalClassName={additionalClassName} width={width} height={height}/>
    : <EnabledLogo additionalClassName={additionalClassName} width={width} height={height}/>
  );
}

export default Logo;
