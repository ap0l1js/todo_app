import styled from 'styled-components';

export const Container = styled.div`
  height: 12.5rem;
  background-color: ${(props) => props.theme.colors['gray-700']};
  display: grid;
  place-items: center;
`;
