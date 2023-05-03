import styled from 'styled-components';

export const CounterContent = styled.span`
  padding: 2px 8px;
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border-radius: 999px;

  background: ${(props) => props.theme.colors['gray-400']};
  color: ${(props) => props.theme.colors['gray-200']};
`;
