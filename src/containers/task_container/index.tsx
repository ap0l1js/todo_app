import { Flex } from '../../components/flex';
import { Task } from '../../components/task';
import { CreatorForm } from './creator_form';
import { Status } from './status';
import { Content } from './styles';

export function TaskContainer() {
  return (
    <Content
      as={Flex}
      gap="4rem"
      direction="column"
    >
      <CreatorForm />

      <Flex
        gap="1.5rem"
        direction="column"
      >
        <Status
          created={0}
          completed={0}
        />

        <Flex
          gap="0.75rem"
          direction="column"
        >
          <Task title="Testando essa task" />
          <Task
            isDone
            title="Era uma vez testando essa daqui"
          />
          <Task title="Esse daqui ainda nao testei" />
        </Flex>
      </Flex>
    </Content>
  );
}
