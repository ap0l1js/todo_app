import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle } from '@phosphor-icons/react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import { store } from '../../../store';
import { CreatorFormContainer } from './styles';

const creatorFormSchema = z.object({
  title: z.string(),
});

type CreatorFormInputs = z.infer<typeof creatorFormSchema>;

export const CreatorForm = observer(() => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CreatorFormInputs>({
    resolver: zodResolver(creatorFormSchema),
  });

  const handleAddTask = async (data: CreatorFormInputs) => {
    reset();
    store.addTodo(uuidv4(), data.title);
  };

  return (
    <CreatorFormContainer onSubmit={handleSubmit(handleAddTask)}>
      <input
        type="text"
        required
        placeholder="Adicione uma nova tarefa"
        {...register('title')}
      />
      <button
        type="submit"
        disabled={isSubmitting}
      >
        Criar
        <PlusCircle
          weight="bold"
          size={16}
        />
      </button>
    </CreatorFormContainer>
  );
});
