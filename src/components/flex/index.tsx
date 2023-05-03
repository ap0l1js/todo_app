import { FlexContainer } from './styles';

interface FlexProps {
  children: React.ReactNode;
  gap?: string;
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
}
export function Flex({ children, ...props }: FlexProps) {
  return <FlexContainer {...props}>{children}</FlexContainer>;
}
