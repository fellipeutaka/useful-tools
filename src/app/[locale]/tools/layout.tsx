import type { PropsWithChildren } from "~/@types/utils";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="fade-in animate-duration-1000 animate-in border-border border-b py-8">
      {children}
    </div>
  );
}
