import { useEffect, useState } from "react";

import axios from "axios";
import { parseCookies, setCookie } from "nookies";

import Layout from "@useful-tools/components/Layout";
import Spinner from "@useful-tools/components/Spinner";
import { styled } from "@useful-tools/stitches";

const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

type GetRegionFetch = {
  abbreviation: string;
  cityName: string;
  countryCode: string;
  countryName: string;
  dst: string;
  formatted: string;
  gmtOffset: number;
  message: string;
  nextAbbreviation: null;
  regionName: string;
  status: string;
  timestamp: number;
  zoneEnd: null;
  zoneName: string;
  zoneStart: number;
};

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
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
};

const seo = {
  title: "Clock | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function Clock() {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    const { "@useful-tools.zoneName": zoneName } = parseCookies();

    if (zoneName) {
      axios
        .get<GetTimezoneFetch>(
          `https://worldtimeapi.org/api/timezone/${zoneName}`
        )
        .then(({ data }) => {
          setDate(new Date(data.utc_datetime));
        })
        .catch((err) => console.log(err));
    } else {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const { data } = await axios.get<GetRegionFetch>(
            `https://api.timezonedb.com/v2.1/get-time-zone?key=TM9MTIVM375H&format=json&by=position&lat=${latitude}&lng=${longitude}`
          );
          setDate(new Date(data.formatted));
          setCookie(undefined, "@useful-tools.zoneName", data.zoneName, {
            maxAge: 1 * 60 * 60 * 24, // 1 day
          });
        },
        (err) => {
          console.log(err);
        },
        {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }
  }, []);

  useEffect(() => {
    if (date) {
      const timeout = setTimeout(() => {
        setDate((state) => new Date(state!.getTime() + 1000));
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [date]);

  if (!date) {
    return (
      <Container>
        <Spinner size={48} />
      </Container>
    );
  }

  return (
    <Layout seo={seo}>
      <Container>
        <h1>Clock</h1>
        <h2>{date.toLocaleTimeString()}</h2>
      </Container>
    </Layout>
  );
}
