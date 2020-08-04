import React from 'react';
import { FooterBase, Image } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.corinthians.com.br/">
        <Image src="https://logodetimes.com/times/corinthians/logo-do-corinthians-256.png" alt="Corinthians" />
      </a>
      <p>
        Todo Poderoso Timão
        {' '}
      </p>
      <p>
        <a href="https://www.alura.com.br/">
          #ImersaoReact
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
