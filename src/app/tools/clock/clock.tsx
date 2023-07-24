"use client";

import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import { Loader } from "lucide-react";

import { useInterval } from "~/hooks/use-interval";
import { useOnMount } from "~/hooks/use-on-mount";

type GetTimezoneFetch = {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: null;
  dst_offset: number;
  dst_until: null;
  raw_offset: number;
  timezone: string;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
};

export function Clock() {
  const [date, setDate] = useState(new Date());
  const { isLoading } = useQuery({
    queryKey: ["/tools/clock"],
    queryFn: async ({ signal }) => {
      const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
      const { utc_datetime } = await ky
        .get(`https://worldtimeapi.org/api/timezone/${timeZone}`, { signal })
        .json<GetTimezoneFetch>();

      setDate(new Date(utc_datetime));
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const interval = useInterval(
    () => setDate((state) => new Date(state.getTime() + 1000)),
    1000,
  );

  useOnMount(() => {
    interval.start();

    return interval.stop;
  });

  if (isLoading) {
    return (
      <div className="grid h-full place-content-center">
        <Loader className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <section>
      <h2>{date?.toLocaleTimeString()}</h2>
    </section>
  );
}
