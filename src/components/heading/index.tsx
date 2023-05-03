import { HeadingContent } from './styles';

interface HeadingProps {
  children: React.ReactNode;
  variant?: 'purple';
}

export function Heading({ children, variant }: HeadingProps) {
  return <HeadingContent variant={variant}>{children}</HeadingContent>;
}
