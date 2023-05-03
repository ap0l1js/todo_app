import { PlusCircle } from '@phosphor-icons/react';
import { CreatorFormContainer } from './styles';

export function CreatorForm() {
  return (
    <CreatorFormContainer>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">
        Criar
        <PlusCircle
          weight="bold"
          size={16}
        />
      </button>
    </CreatorFormContainer>
  );
}
