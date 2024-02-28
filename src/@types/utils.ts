export type PropsWithChildren<T = unknown> = T & { children: React.ReactNode };

export type PropsWithOptionalChildren<T = unknown> = React.PropsWithChildren<T>;
