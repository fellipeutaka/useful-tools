import { Balancer } from "react-wrap-balancer";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import { ThemeProvider } from "~/contexts/providers";
import { typography } from "~/styles/typography";

export default function NotFound() {
  return (
    <ThemeProvider>
      <div className="bg-background text-foreground antialiased">
        <main className="container grid min-h-screen place-content-center text-center animate-in fade-in duration-really-slow">
          <h3 className={typography.h1}>Page not found</h3>
          <Balancer
            as="p"
            className="mx-auto mt-4 !block leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Sorry, the page you are looking for could not be found or has been
            removed.
          </Balancer>
          <Button className="mx-auto mt-6 w-fit gap-1" asChild>
            <Link href="/">
              <ChevronLeft size={16} />
              <span>Go home</span>
            </Link>
          </Button>
        </main>
      </div>
    </ThemeProvider>
  );
}
