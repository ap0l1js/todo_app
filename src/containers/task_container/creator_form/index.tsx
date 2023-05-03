import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CreatorFormContainer } from './styles';

const creatorFormSchema = z.object({
  task: z.string(),
});

type CreatorFormInputs = z.infer<typeof creatorFormSchema>;

export function CreatorForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CreatorFormInputs>({
    resolver: zodResolver(creatorFormSchema),
  });

  async function handleCreateTask(data: CreatorFormInputs) {
    console.log('dataaa: ', data);
  }

  return (
    <CreatorFormContainer onSubmit={handleSubmit(handleCreateTask)}>
      <input
        type="text"
        required
        placeholder="Adicione uma nova tarefa"
        {...register('task')}
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
}
