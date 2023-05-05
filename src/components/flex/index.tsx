import { FlexContainer } from './styles';

interface FlexProps {
  children: React.ReactNode;
  gap?: string;
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
}
export const Flex = ({ children, ...props }: FlexProps) => (
  <FlexContainer {...props}>{children}</FlexContainer>
);
