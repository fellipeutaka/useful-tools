import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { keyframes, styled } from "@useful-tools/stitches";

const loading = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const StyledSpinner = styled(AiOutlineLoading3Quarters, {
  animation: `${loading} 1s linear infinite`,
});

type SpinnerProps = {
  size?: number;
};

export default function Spinner({ size }: SpinnerProps) {
  return <StyledSpinner size={size} />;
}
