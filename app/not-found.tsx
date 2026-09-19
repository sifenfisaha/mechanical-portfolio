import Image from "next/image";
import Link from "next/link";
import racecarFront from "@/public/images/racecar-front.webp";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col items-center px-5 pb-8 pt-20 text-center md:px-10 md:pt-28">
      <Image
        src={racecarFront}
        alt=""
        sizes="360px"
        className="drawing h-auto w-full max-w-[360px] opacity-70"
      />
      <p className="mt-10 text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
        Error 404
      </p>
      <h1 className="mt-4 text-balance text-[36px] font-semibold tracking-[-0.025em] sm:text-[48px]">
        Page not found
      </h1>
      <p className="mt-4 max-w-[420px] text-[15px] leading-relaxed text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-[5px] bg-ink px-5 py-2.5 text-[13px] font-semibold text-page transition-colors hover:bg-ink-hover"
      >
        Go to Homepage
      </Link>
    </section>
  );
}
