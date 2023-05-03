import styled from 'styled-components';

interface FlexContainerProps {
  gap?: string;
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
`;
