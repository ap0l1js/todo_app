import React from 'react';
import { Form } from '../../components/form';
import { Header } from '../../components/header';
import { Body } from './styles';

export function Home() {
  return (
    <React.Fragment>
      <Header />

      <Body>
        <Form />

        <span>tasks</span>
      </Body>
    </React.Fragment>
  );
}
