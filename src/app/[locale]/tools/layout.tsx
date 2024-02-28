import type { PropsWithChildren } from "~/@types/utils";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="border-b border-border py-8 animate-in fade-in animate-duration-1000">
      {children}
    </div>
  );
}
