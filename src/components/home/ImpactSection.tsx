
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ImpactSection() {
  const impactImg = PlaceHolderImages.find(img => img.id === 'community-impact');

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-xl">
            <Image 
              src={impactImg?.imageUrl || "https://picsum.photos/seed/impact/800/600"} 
              alt="Horse helping human"
              fill
              className="object-cover"
              data-ai-hint="horse human interaction"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Horses Helping People</h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-body">
              Our community programs focus on a unique symbiosis: rehabilitated horses help rehabilitate people. We bring together individuals from all backgrounds to experience the healing power of connection.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 bg-secondary rounded-full flex items-center justify-center text-background">1</div>
                <div>
                  <h4 className="font-headline font-bold text-xl">Community Outreach</h4>
                  <p className="text-muted-foreground">Open barn events that invite local families to learn about animal care and empathy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 bg-secondary rounded-full flex items-center justify-center text-background">2</div>
                <div>
                  <h4 className="font-headline font-bold text-xl">Youth Programs</h4>
                  <p className="text-muted-foreground">Teaching the next generation responsibility through hands-on interaction with our rescues.</p>
                </div>
              </div>
            </div>

            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-background rounded-full px-8">
              Learn More About Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
