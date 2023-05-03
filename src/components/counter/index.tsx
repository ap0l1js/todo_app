import { CounterContent } from './styles';

interface CounterProps {
  children: React.ReactNode;
}

export function Counter({ children }: CounterProps) {
  return <CounterContent>{children}</CounterContent>;
}
