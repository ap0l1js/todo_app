import { PlusCircle } from '@phosphor-icons/react';
import { Button, Container, Input } from './styles';

export function Form() {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <Button>
        Criar
        <PlusCircle
          weight="bold"
          size={16}
        />
      </Button>
    </Container>
  );
}
