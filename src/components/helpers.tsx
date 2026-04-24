import type { WindowContentComponentProps, WindowHeaderComponentProps } from "@/types";

export function withWindowHeaderProps<P extends WindowHeaderComponentProps>(
  Component: React.ComponentType<P>
) {
  return (props: Omit<P, keyof WindowHeaderComponentProps>) => <Component {...(props as P)} />;
}

export function withWindowContentProps<P extends WindowContentComponentProps>(
  Component: React.ComponentType<P>
) {
  return (props: Omit<P, keyof WindowContentComponentProps>) => <Component {...(props as P)} />;
}
