import type { Metadata } from "next";

export type PageParams = { params: { locale: string } };

export type GenerateMetadata = (
  params: PageParams,
) => Metadata | Promise<Metadata>;
