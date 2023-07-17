export function Logo(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width={512}
      height={512}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={512} height={512} rx={128} fill="#6500B5" />
      <path
        d="M160.786 187.738c-4.177 65.61 6.525 90.007 75.381 86.26l81.598 80.821c28.721-2.428 37.108-9.768 33.416-37.302l-76.158-76.158c6.619-74.129-14.523-89.208-83.152-83.152l44.296 44.296-28.753 30.308-46.628-45.073z"
        fill="#fff"
      />
    </svg>
  );
}
