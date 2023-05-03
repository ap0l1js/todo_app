import styled, { css } from 'styled-components';

interface TaskContentProps {
  isDone: boolean;
}

export const TaskContent = styled.div<TaskContentProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  cursor: pointer;

  border: 1px solid ${(props) => props.theme.colors['gray-400']};
  border-radius: 8px;
  background: ${(props) => props.theme.colors['gray-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors['gray-600']};
  }

  ${(props) =>
    props.isDone &&
    css`
      text-decoration-line: line-through;
      color: ${(props) => props.theme.colors['gray-300']};
    `}

  input {
    all: unset;
    width: 1.063rem;
    height: 1.063rem;
    border: 2px solid ${(props) => props.theme.colors['blue-800']};
    border-radius: 999px;
    display: grid;
    place-items: center;

    &:not(:checked):hover {
      border-color: ${(props) => props.theme.colors['blue-900']};
    }

    &:checked {
      border-color: ${(props) => props.theme.colors['purple-900']};
      background: ${(props) => props.theme.colors['purple-900']};
    }

    &:checked:hover {
      border-color: ${(props) => props.theme.colors['purple-800']};
      background: ${(props) => props.theme.colors['purple-800']};
    }

    &:checked:after {
      margin-top: -2px;
      content: '';
      display: block;
      width: 0.25rem;
      height: 0.438rem;
      border: solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;
