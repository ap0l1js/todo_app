import clipBoard from '../../../assets/clipboard.svg';
import { Flex } from '../../flex';
import { EmptyAlertContent } from './styles';

export const EmptyAlert = () => (
  <EmptyAlertContent
    as={Flex}
    alignItems="center"
    direction="column"
    gap="1rem"
  >
    <img src={clipBoard} />
    <div>
      <h3>Você ainda não tem tarefas cadastradas</h3>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  </EmptyAlertContent>
);
