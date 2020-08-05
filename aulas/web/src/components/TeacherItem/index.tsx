import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/48491038?s=460&u=7ce2439da5347b9068d2cf382c04fb287d6b2460&v=4" alt="avatar" />
        <div>
          <strong>Renan Oliveira</strong>
          <span>Computação</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias da computação.
        <br />
        {' '}
        <br />
        My name is Renan Oliveira, and I'm from Brazil (brazil). I'm student of Computer Science at University Federal of São Carlos since 2019 and currently I'm Web Developer at Associação Share.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 90,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>

    </article>
  );
}

export default TeacherItem;
