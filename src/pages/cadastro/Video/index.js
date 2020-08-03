/* eslint-disable no-console */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videoRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=1_IYL9ZMR_Y',
    categoria: 'Front end',
  });

  return (
        <PageDefault>
            <h1> Cadastro de Video</h1>

            <form onSubmit={(event) => {
              event.preventDefault();
              // eslint-disable-next-line no-alert
              //   alert('Video Cadastro com sucesso!!');

              videoRepository.create({
                titulo: values.titulo,
                url: values.url,
                categoriaId: 1,
              }).then(() => {
                console.log('Cadastrou com sucesso!');
                history.push('/');
              });
            }}
            >
            <FormField
              label="Titulo da Categoria"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
            />
              <FormField
                label="URL"
                name="url"
                value={values.url}
                onChange={handleChange}
              />
            <FormField
              label="Categoria"
              name="categoria"
              value={values.categoria}
              onChange={handleChange}
            />

        <Button type="submit">
          Cadastrar
        </Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </PageDefault>
  );
}

export default CadastroVideo;
