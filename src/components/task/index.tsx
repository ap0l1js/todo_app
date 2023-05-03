import { TaskContent } from './styles';

interface TaskProps {
  isDone?: boolean;
  title: string;
}

export function Task({ isDone = false, title }: TaskProps) {
  return (
    <TaskContent isDone={isDone}>
      <input
        type="checkbox"
        defaultChecked={isDone}
      />
      <p>{title}</p>
    </TaskContent>
  );
}
