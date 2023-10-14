export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="border-b py-8 animate-in fade-in duration-really-slow">
      {children}
    </div>
  );
}
