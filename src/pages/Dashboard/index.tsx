import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src ={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img 
            src="https://avatars.githubusercontent.com/u/59843125?s=460&u=c78698c361be5f26e3470be63ae643e6e60694dc&v=4" 
            alt="profile" 
          />

          <div>
            <strong>gobarber-api</strong>
            <p>Essa é a API criada durante o bootcamp Rocketseat.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img 
            src="https://avatars.githubusercontent.com/u/59843125?s=460&u=c78698c361be5f26e3470be63ae643e6e60694dc&v=4" 
            alt="profile" 
          />

          <div>
            <strong>gobarber-api</strong>
            <p>Essa é a API criada durante o bootcamp Rocketseat.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img 
            src="https://avatars.githubusercontent.com/u/59843125?s=460&u=c78698c361be5f26e3470be63ae643e6e60694dc&v=4" 
            alt="profile" 
          />

          <div>
            <strong>gobarber-api</strong>
            <p>Essa é a API criada durante o bootcamp Rocketseat.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;