
export function StorySection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">The Shared Table</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="relative p-12 bg-white/50 border border-border rounded-3xl shadow-sm italic">
            <span className="absolute -top-6 left-12 text-8xl text-secondary opacity-30 font-headline">"</span>
            <blockquote className="text-2xl md:text-3xl font-headline text-foreground leading-relaxed text-center">
              People coming together, seated at the same 'table', differences and opinions, income, ethnicity aside, under 'their roof', together FOR them.
            </blockquote>
            <span className="absolute -bottom-12 right-12 text-8xl text-secondary opacity-30 font-headline">"</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4 text-foreground/80 leading-relaxed font-body">
              <p>
                How did the barn get started? It's quite a story. Life is full of really good stories when you stop to tell them. They don't all have to be happy, but they all led somewhere, and usually that somewhere is a pretty darn good spot.
              </p>
              <p>
                In 2018, it started with a single plea for a donkey about to be shipped to slaughter. That one decision—made over a glass of wine—changed everything. Kevin arrived 45 days later, sad and confused, and he became the catalyst for everything we are today.
              </p>
            </div>
            <div className="space-y-4 text-foreground/80 leading-relaxed font-body">
              <p>
                We wanted a name that represented bringing people together. Like the concept of 'Outstanding in a Field', we wanted to celebrate hard work, love, and passion. 'All Seated in a Barn' was born.
              </p>
              <p>
                Today, we continue that legacy. Bringing together people from all walks of life to support something good. Regardless of differences, we are all together for the animals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
