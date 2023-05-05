import styled from 'styled-components';

export const EmptyAlertContent = styled.div`
  padding: 4rem 0;
  color: ${(props) => props.theme.colors['gray-300']};
  font-size: ${(props) => props.theme.fontSize.md};

  img {
    width: 3.5rem;
    height: 3.5rem;
  }

  div {
    text-align: center;
  }
`;
