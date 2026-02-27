
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { HardHat, HeartPulse, Wallet, Clock } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const REALITY_POINTS = [
  {
    icon: HardHat,
    title: "Mucking Stalls",
    description: "The physical labor is grueling. Cleaning stalls daily in the California heat is part of the 24/7 care."
  },
  {
    icon: HeartPulse,
    title: "Veterinary Care",
    description: "Emergency vet calls, long-term rehabilitation, and specialized diets for elderly or neglected horses."
  },
  {
    icon: Wallet,
    title: "Financial Burden",
    description: "It takes a community. Feed, medicine, and facility maintenance costs never stop."
  },
  {
    icon: Clock,
    title: "Mental Endurance",
    description: "The emotional toll of seeing neglect and the constant pressure of raising enough to keep the doors open."
  }
];

export function RealitySection() {
  const realityImg = PlaceHolderImages.find(img => img.id === 'barn-interior');

  return (
    <section className="py-24 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">The Reality of Rescue</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              Rescue work isn't just beautiful photos and happy endings. It's a transparent look at the physical and mental labor that goes into every single life we save.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {REALITY_POINTS.map((point) => (
                <Card key={point.title} className="bg-background/5 border-background/10 text-background">
                  <CardContent className="p-6 space-y-3">
                    <point.icon className="h-8 w-8 text-secondary" />
                    <h3 className="font-headline text-xl font-bold">{point.title}</h3>
                    <p className="text-sm opacity-70 leading-relaxed">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src={realityImg?.imageUrl || "https://picsum.photos/seed/reality/800/600"} 
              alt="Hard work at the barn"
              fill
              className="object-cover"
              data-ai-hint="rustic barn interior"
            />
            <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
