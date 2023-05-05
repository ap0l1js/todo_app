import { HeadingContent } from './styles';

interface HeadingProps {
  children: React.ReactNode;
  variant?: 'purple';
}

export const Heading = ({ children, variant }: HeadingProps) => (
  <HeadingContent variant={variant}>{children}</HeadingContent>
);
