import { Trash } from '@phosphor-icons/react';
import { observer } from 'mobx-react-lite';
import { Instance } from 'mobx-state-tree';
import { store, todoModel } from '../../store';
import { Flex } from '../flex';
import { TaskContent } from './styles';

interface TaskProps {
  task: Instance<typeof todoModel>;
}

export const Task = observer(({ task }: TaskProps) => {
  return (
    <TaskContent
      isDone={task.isDone}
      as={Flex}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex
        alignItems="center"
        gap="0.75rem"
      >
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => task.toggle()}
        />
        <p>{task.title}</p>
      </Flex>

      <button onClick={() => store.deleteTodo(task.id)}>
        <Trash size={14} />
      </button>
    </TaskContent>
  );
});
