import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="text-center text-white max-w-lg">
        <div className="text-8xl font-bold text-white/10 mb-2" style={{ fontFamily: "var(--font-sora)" }}>
          404
        </div>
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-sora)" }}>
          Page Not Found
        </h1>
        <p className="text-white/60 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-accent inline-flex items-center gap-2 justify-center">
            <Home size={16} />
            Return Home
          </Link>
          <Link href="/#contact" className="btn-outline inline-flex items-center gap-2 justify-center">
            <ArrowLeft size={16} />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
