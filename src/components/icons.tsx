import { cn } from "@/lib/utils";

const icons = {
  apple: ({ className }: { className?: string }) => (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M11.673 7.222c-.876 0-2.232-.996-3.66-.96c-1.884.024-3.612 1.092-4.584 2.784c-1.956 3.396-.504 8.412 1.404 11.172c.936 1.344 2.04 2.856 3.504 2.808c1.404-.06 1.932-.912 3.636-.912c1.692 0 2.172.912 3.66.876c1.512-.024 2.472-1.368 3.396-2.724c1.068-1.56 1.512-3.072 1.536-3.156c-.036-.012-2.94-1.128-2.976-4.488c-.024-2.808 2.292-4.152 2.4-4.212c-1.32-1.932-3.348-2.148-4.056-2.196c-1.848-.144-3.396 1.008-4.26 1.008m3.12-2.832c.78-.936 1.296-2.244 1.152-3.54c-1.116.048-2.46.744-3.264 1.68c-.72.828-1.344 2.16-1.176 3.432c1.236.096 2.508-.636 3.288-1.572"></path>
    </svg>
  ),
  wifi: ({ className }: { className?: string }) => (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9m8 8l3 3l3-3a4.237 4.237 0 0 0-6 0m-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13"></path>
    </svg>
  ),
  search: ({ className }: { className?: string }) => (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"></path>
    </svg>
  ),
  close: ({ className }: { className?: string }) => (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0-1.414-1.414L12 10.586z"></path>
    </svg>
  ),
  minimize: ({ className }: { className?: string }) => (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"></path>
    </svg>
  ),
  resize: ({ className }: { className?: string }) => (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path
        transform="translate(-2, -2)"
        fill="currentColor"
        d="M7.879 7.129a.75.75 0 0 0-.75.75v8.485c0 .414.335.75.75.75l9.235-9.235a.75.75 0 0 0-.75-.75z"
      />
      <path
        transform="translate(2, 2)"
        fill="currentColor"
        d="M16.871 7.636a.75.75 0 0 0-.75-.75l-9.235 9.235c0 .415.336.75.75.75h8.485a.75.75 0 0 0 .75-.75z"
      />
    </svg>
  ),
  downloads: ({ className }: { className?: string }) => (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m16.53 11.72l-.084-.073a.75.75 0 0 0-.977.073l-2.72 2.72V7.75l-.007-.102A.75.75 0 0 0 12 7l-.101.006a.75.75 0 0 0-.649.744v6.691L8.53 11.72l-.084-.072a.75.75 0 0 0-.977 1.133l4 4.001l.084.073a.75.75 0 0 0 .977-.073l4-4l.073-.085a.75.75 0 0 0-.072-.976M1.999 12c0 5.523 4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10m18.5 0a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0"></path>
    </svg>
  ),
  documents: ({ className }: { className?: string }) => (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20">
      <path
        fill="currentColor"
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2zM5 4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm9.793 3H11.5a.5.5 0 0 1-.5-.5V3.207z"></path>
    </svg>
  ),
};

export type IconName = keyof typeof icons;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const IconComponent = icons[name];

  return <IconComponent className={className} />;
}
