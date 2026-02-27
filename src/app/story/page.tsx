import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function StoryPage() {
  const rescue1 = PlaceHolderImages.find(img => img.id === 'rescue-horse-1');
  const rescue2 = PlaceHolderImages.find(img => img.id === 'rescue-horse-2');
  const barn = PlaceHolderImages.find(img => img.id === 'barn-interior');

  return (
    <div className="bg-background">
      {/* Hero Header */}
      <section className="py-24 bg-primary text-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl opacity-90 leading-relaxed font-body">
            From a single plea for a donkey to a thriving community of rescuers, every life saved has a story.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* The Beginning */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-headline text-4xl font-bold text-primary">The Shared Table</h2>
              <div className="w-20 h-1 bg-secondary rounded-full" />
              <p className="text-lg text-foreground/80 leading-relaxed font-body">
                How did the barn get started? In 2018, it started with a single plea for a donkey about to be shipped to slaughter. That one decision changed everything.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed font-body">
                Kevin the donkey arrived 45 days later, sad and confused. He became the catalyst for everything we are today. He showed us the healing power of empathy and second chances.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px] rounded-[40px] overflow-hidden shadow-xl">
              <Image 
                src={rescue2?.imageUrl || "https://picsum.photos/seed/kevin-story/600/800"} 
                alt="Rescue Donkey"
                fill
                className="object-cover"
                data-ai-hint="donkey rescue"
              />
            </div>
          </div>

          {/* The Concept */}
          <div className="relative p-12 bg-white/50 border border-border rounded-3xl shadow-sm italic text-center">
            <span className="absolute -top-6 left-12 text-8xl text-secondary opacity-30 font-headline">"</span>
            <blockquote className="text-2xl md:text-3xl font-headline text-foreground leading-relaxed">
              People coming together, seated at the same 'table', differences and opinions aside, under 'their roof', together FOR them.
            </blockquote>
            <span className="absolute -bottom-12 right-12 text-8xl text-secondary opacity-30 font-headline">"</span>
          </div>

          {/* Expansion */}
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 relative h-[400px] rounded-[40px] overflow-hidden shadow-xl">
              <Image 
                src={rescue1?.imageUrl || "https://picsum.photos/seed/horse-story/600/800"} 
                alt="Rehabilitated Horse"
                fill
                className="object-cover"
                data-ai-hint="horse field"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-headline text-4xl font-bold text-primary">The Name Behind the Barn</h2>
              <div className="w-20 h-1 bg-secondary rounded-full" />
              <p className="text-lg text-foreground/80 leading-relaxed font-body">
                We wanted a name that represented bringing people together. Like the concept of 'Outstanding in a Field', we wanted to celebrate hard work, love, and passion. 'All Seated in a Barn' was born.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed font-body">
                Today, we continue that legacy. Bringing together people from all walks of life—ethnicity, income, and background aside—to support something good.
              </p>
            </div>
          </div>

          {/* Facility Section */}
          <div className="bg-foreground text-background p-12 rounded-[40px] space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="font-headline text-4xl font-bold">The Reality of the Work</h2>
              <p className="opacity-80">Rescue work is grueling, but the reward is infinite. Our facility in Shafter, CA is a sanctuary for those who have nowhere else to go.</p>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image 
                src={barn?.imageUrl || "https://picsum.photos/seed/barn-interior-story/1200/600"} 
                alt="Barn Interior"
                fill
                className="object-cover"
                data-ai-hint="rustic barn"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
