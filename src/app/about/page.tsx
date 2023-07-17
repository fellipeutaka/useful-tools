import { Balancer } from "react-wrap-balancer";

import { cnBase } from "tailwind-variants";

import { REPOSITORY_URL } from "~/constants/repository-info";
import { typography } from "~/styles/typography";

export default function Page() {
  return (
    <div className="grid content-center border-b">
      <main className="container animate-in fade-in slide-in-from-bottom-8 duration-really-slow">
        <div className="space-y-2">
          <h1 className={cnBase(typography.h1, "lg:text-4xl")}>About</h1>
          <Balancer as="p" className="text-lg text-muted-foreground">
            Useful Tools is a collection of free online tools. We have 100+
            tools to help you in your daily life. This project is open source
            and you can contribute to it by{" "}
            <a
              className="font-medium underline underline-offset-4"
              href={REPOSITORY_URL}
              target="_blank"
              rel="noreferrer"
            >
              clicking here
            </a>
            .
          </Balancer>
        </div>
        <h2 className={cnBase(typography.h2, "mt-8 border-b pb-2")}>Credits</h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <a
              className="font-medium underline underline-offset-4"
              href="https://tailwindcss.com/"
            >
              TailwindCSS
            </a>{" "}
            - For styling.
          </li>
          <li>
            <a
              className="font-medium underline underline-offset-4"
              href="https://radix-ui.com"
            >
              Radix UI
            </a>{" "}
            - For the primitives.
          </li>
          <li>
            <a
              className="font-medium underline underline-offset-4"
              href="https://ui.shadcn.com"
            >
              Shadcn UI
            </a>{" "}
            - For the components.
          </li>
          <li>
            <a
              className="font-medium underline underline-offset-4"
              href="https://lucide.dev/"
            >
              Lucide
            </a>{" "}
            - For the icons.
          </li>
          <li>
            <a
              className="font-medium underline underline-offset-4"
              href="https://vercel.com/"
            >
              Vercel
            </a>{" "}
            - Where I host all my projects.
          </li>
        </ul>
        <h2 className={cnBase(typography.h2, "mt-8 border-b pb-2")}>Author</h2>
        <p className={typography.p}>
          MIT &copy;{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://twitter.com/fellipeutaka"
            target="_blank"
            rel="noreferrer"
          >
            Fellipe Utaka
          </a>
        </p>
      </main>
    </div>
  );
}
