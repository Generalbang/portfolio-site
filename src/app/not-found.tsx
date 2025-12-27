import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="relative">
        <h1 className="text-9xl font-bold text-deep-blue/20 select-none">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
        </div>
      </div>
      
      <p className="text-gray-400 mt-6 max-w-md">
        The page you are looking for doesn't exist or has been moved. 
        Let's get you back on track.
      </p>

      <Link 
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
      >
        <MoveLeft size={20} /> Back to Home
      </Link>
    </div>
  );
}
