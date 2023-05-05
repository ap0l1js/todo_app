import { values } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Counter } from '../../../components/counter';
import { Flex } from '../../../components/flex';
import { Heading } from '../../../components/heading';
import { store } from '../../../store';

export const Status = observer(() => {
  const createdTaskCount = values(store.todos).length;

  const completedTaskCount = store.completedCount;

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        alignItems="center"
        gap="0.5rem"
      >
        <Heading>Tarefas criadas</Heading>

        <Counter> {createdTaskCount} </Counter>
      </Flex>

      <Flex
        alignItems="center"
        gap="0.5rem"
      >
        <Heading variant="purple">Concluidas</Heading>

        <Counter>
          {completedTaskCount > 0
            ? `${completedTaskCount} de ${createdTaskCount}`
            : 0}
        </Counter>
      </Flex>
    </Flex>
  );
});
