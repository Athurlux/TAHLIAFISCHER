
import { Hero } from '@/components/home/Hero';
import { StorySection } from '@/components/home/StorySection';
import { RealitySection } from '@/components/home/RealitySection';
import { ImpactSection } from '@/components/home/ImpactSection';

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <StorySection />
      <RealitySection />
      <ImpactSection />
    </div>
  );
}
