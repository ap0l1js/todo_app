import styled from 'styled-components';

export const CreatorFormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: -27px;

  @media (max-width: 428px) {
    flex-direction: column;
    align-items: stretch;
  }

  input {
    flex: 1;
    padding: 1rem;
    border-radius: 8px;
    background: ${(props) => props.theme.colors['gray-500']};
    border: 1px solid ${(props) => props.theme.colors['gray-700']};
    color: ${(props) => props.theme.colors['gray-100']};

    &::placeholder {
      color: ${(props) => props.theme.colors['gray-300']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.colors['purple-900']};
    }
  }

  button {
    all: unset;
    padding: 1rem;
    border-radius: 8px;
    background: ${(props) => props.theme.colors['blue-900']};
    color: ${(props) => props.theme.colors['gray-100']};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: ${(props) => props.theme.fontSize.sm};

    transition: background-color 0.1s ease-out;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme.colors['blue-800']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.colors['purple-900']};
    }
  }
`;
