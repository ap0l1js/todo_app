import { CounterContent } from './styles';

interface CounterProps {
  children: React.ReactNode;
}

export const Counter = ({ children }: CounterProps) => (
  <CounterContent>{children}</CounterContent>
);
