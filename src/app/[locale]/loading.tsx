import { Loader } from "lucide-react";

export const runtime = "edge";

export default function Loading() {
  return (
    <div className="grid place-content-center">
      <Loader className="h-8 w-8 animate-spin" />
    </div>
  );
}
