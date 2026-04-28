import type { AppContentComponentProps } from "@/types";

export function withAppContentProps<P extends AppContentComponentProps>(
  Component: React.ComponentType<P>
) {
  return (props: Omit<P, keyof AppContentComponentProps>) => <Component {...(props as P)} />;
}
