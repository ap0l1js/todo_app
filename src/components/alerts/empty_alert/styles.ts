import styled from 'styled-components';

export const EmptyAlertContent = styled.div`
  padding: 4rem 0;
  border-top: 1px solid ${(props) => props.theme.colors['gray-400']};
  border-radius: 8px;
  color: ${(props) => props.theme.colors['gray-300']};
  font-size: ${(props) => props.theme.fontSize.md};

  @media (max-width: 428px) {
    font-size: ${(props) => props.theme.fontSize.xs};
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
  }

  div {
    text-align: center;
  }
`;
