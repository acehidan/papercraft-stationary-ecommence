import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="h-[700px]">
      <img
        src="/herobanner2.jpg"
        alt="Premium stationery collection"
        className="w-full h-full object-cover rounded-xl hover-lift"
      />
    </section>
  );
}
