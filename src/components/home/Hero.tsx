
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const DONATE_URL = "https://www.paypal.com/donate?hosted_button_id=TZQD9JSHGSF6Q";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-horse');

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage?.imageUrl || "https://picsum.photos/seed/horse-hero/1200/800"} 
          alt="Majestic Horse"
          fill
          className="object-cover brightness-[0.7]"
          priority
          data-ai-hint="horse ranch sunset"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
          <h1 className="font-headline text-5xl md:text-7xl text-background font-bold leading-tight">
            Save a Horse, <br />Change a Life.
          </h1>
          <p className="text-lg md:text-xl text-background/90 max-w-lg leading-relaxed font-body">
            Join our mission of equine rescue, sanctuary, and community rehabilitation in the heart of California.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-background text-lg px-8 py-7 rounded-full transition-transform hover:scale-105">
              <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">Save a Horse</a>
            </Button>
            <div className="bg-secondary/90 text-background px-6 py-4 rounded-xl shadow-lg border border-secondary">
               <p className="font-bold text-lg">Your $25 feeds a rescue donkey for a week.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
