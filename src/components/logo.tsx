import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image 
      src="/images/logo.png"
      alt="Noaah uPVC Logo"
      width={100}
      height={100}
      className={className}
      data-ai-hint="logo"
    />
  );
}
