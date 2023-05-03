import { Counter } from '../../../components/counter';
import { Flex } from '../../../components/flex';
import { Heading } from '../../../components/heading';

interface StatusProps {
  created: number;
  completed: number;
}

export function Status({ created, completed }: StatusProps) {
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

        <Counter> {created} </Counter>
      </Flex>

      <Flex
        alignItems="center"
        gap="0.5rem"
      >
        <Heading variant="purple">Concluidas</Heading>

        <Counter>
          {completed} de {created}
        </Counter>
      </Flex>
    </Flex>
  );
}
