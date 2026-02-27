
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart, Users, Handshake, Gift } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const WAYS_TO_HELP = [
  {
    icon: Heart,
    title: "Monthly Sponsorship",
    description: "Support a specific horse or donkey's monthly feed and medical care. Receive updates on their progress."
  },
  {
    icon: Users,
    title: "Volunteer Your Time",
    description: "From cleaning pens to exercising horses, our volunteers are the lifeblood of the barn."
  },
  {
    icon: Handshake,
    title: "Corporate Partnerships",
    description: "Partner with us to support large-scale facility improvements and community outreach programs."
  },
  {
    icon: Gift,
    title: "In-Kind Donations",
    description: "Donations of hay, tack, fencing supplies, and medical equipment are always appreciated."
  }
];

export default function HowToHelpPage() {
  const donateUrl = "https://www.paypal.com/donate?hosted_button_id=TZQD9JSHGSF6Q";
  const rehabImg = PlaceHolderImages.find(img => img.id === 'rescue-horse-1');

  return (
    <div className="bg-background">
      {/* Hero Header */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="font-headline text-5xl md:text-6xl font-bold">How You Can Help</h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Your support directly saves lives. Whether it's $5 or a day of hard work, every contribution makes an impact.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-background rounded-full px-12 py-7 text-xl">
            <a href={donateUrl} target="_blank" rel="noopener noreferrer">Donate Now</a>
          </Button>
        </div>
      </section>

      {/* Ways to Help Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WAYS_TO_HELP.map((way) => (
            <div key={way.title} className="bg-white p-8 rounded-[32px] border border-border space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                <way.icon className="h-6 w-6" />
              </div>
              <h3 className="font-headline text-2xl font-bold">{way.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{way.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Programs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative h-[400px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src={rehabImg?.imageUrl || "https://picsum.photos/seed/rehab/800/600"}
                alt="Horse Rehabilitation"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="font-headline text-4xl font-bold text-primary">Rehabilitating Horses, Rehabilitating People</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-body">
                Our core mission is the rehabilitation of horses that have been neglected, abused, or headed for slaughter. But the story doesn't end there. Once these animals are healthy, they become teachers in our community programs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-secondary rounded-full" />
                  <span className="font-medium">Equine Therapy Partnerships</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-secondary rounded-full" />
                  <span className="font-medium">Veteran Outreach Sessions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-secondary rounded-full" />
                  <span className="font-medium">Educational Barn Tours</span>
                </li>
              </ul>
              <Button className="bg-secondary hover:bg-secondary/90 text-background rounded-full px-8 py-6">
                Inquire About Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
