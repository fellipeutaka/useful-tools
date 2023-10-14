type PropsWithChildren<T = unknown> = T & { children: React.ReactNode };

type PropsWithOptionalChildren<T = unknown> = React.PropsWithChildren<T>;
