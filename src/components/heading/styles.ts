import styled, { css } from 'styled-components';

interface HeadingContentProps {
  variant?: 'blue' | 'purple';
}

export const HeadingContent = styled.p<HeadingContentProps>`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors['blue-800']};

  ${(props) =>
    props.variant === 'purple' &&
    css`
      color: ${(props) => props.theme.colors['purple-800']};
    `}
`;
