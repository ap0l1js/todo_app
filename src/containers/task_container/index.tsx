import { values } from 'mobx';
import { observer } from 'mobx-react-lite';
import { EmptyAlert } from '../../components/alerts/empty_alert';
import { Flex } from '../../components/flex';
import { Task } from '../../components/task';
import { store } from '../../store';
import { CreatorForm } from './creator_form';
import { Status } from './status';
import { Content } from './styles';

export const TaskContainer = observer(() => {
  const isEmpty = values(store.todos).length == 0;

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
        <Status />

        <Flex
          gap="0.75rem"
          direction="column"
        >
          {!isEmpty ? (
            values(store.todos).map((task, id) => (
              <Task
                key={id}
                task={task}
              />
            ))
          ) : (
            <EmptyAlert />
          )}
        </Flex>
      </Flex>
    </Content>
  );
});
