import { useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useURLState(query: string): [string, (value: string) => void] {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [state, setState] = useState(searchParams.get(query) ?? "");

  const updateState = (value: string) => {
    const newSearchParams = new URLSearchParams(
      Array.from(searchParams.entries()),
    );

    if (!value.trim()) {
      newSearchParams.delete(query);
    } else {
      newSearchParams.set(query, value);
    }

    setState(value);

    const search = newSearchParams.toString();

    const newUrl = `${pathname}${search ? `?${search}` : ""}`;

    router.push(newUrl);
  };

  return [state, updateState];
}
