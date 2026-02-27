
"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Heart } from 'lucide-react';

const ANIMALS = [
  { id: 1, name: 'Kevin', type: 'Donkey', age: '8 years', image: 'https://picsum.photos/seed/kevin/400/400', status: 'Available', hint: 'donkey' },
  { id: 2, name: 'Fred', type: 'Horse', age: '12 years', image: 'https://picsum.photos/seed/fred/400/400', status: 'Sponsorship Needed', hint: 'horse' },
  { id: 3, name: 'Barney', type: 'Horse', age: '11 years', image: 'https://picsum.photos/seed/barney/400/400', status: 'Available', hint: 'horse' },
  { id: 4, name: 'Luna', type: 'Donkey', age: '4 years', image: 'https://picsum.photos/seed/luna/400/400', status: 'In Rehab', hint: 'donkey' },
  { id: 5, name: 'Spirit', type: 'Horse', age: '6 years', image: 'https://picsum.photos/seed/spirit/400/400', status: 'Sponsorship Needed', hint: 'white horse' },
  { id: 6, name: 'Daisy', type: 'Donkey', age: '2 years', image: 'https://picsum.photos/seed/daisy/400/400', status: 'Available', hint: 'donkey baby' },
];

export default function AdoptPage() {
  const [search, setSearch] = useState('');

  const filteredAnimals = ANIMALS.filter(animal => 
    animal.name.toLowerCase().includes(search.toLowerCase()) ||
    animal.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <h1 className="font-headline text-5xl font-bold text-primary">Lease & Adopt</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every rescue has a story. Whether you choose to adopt, lease, or sponsor, you are providing a second chance at life for these beautiful creatures.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search horses or donkeys..." 
              className="pl-10 bg-white border-border rounded-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAnimals.map((animal) => (
            <Card key={animal.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border">
              <div className="relative aspect-square overflow-hidden">
                <Image 
                  src={animal.image} 
                  alt={animal.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  data-ai-hint={animal.hint}
                />
                <Badge className="absolute top-4 right-4 bg-secondary text-background">
                  {animal.status}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="font-headline text-2xl font-bold">{animal.name}</h3>
                  <span className="text-sm font-medium text-muted-foreground">{animal.type}</span>
                </div>
                <p className="text-sm text-muted-foreground">Age: {animal.age}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button className="flex-1 bg-primary hover:bg-primary/90">Adopt Me</Button>
                <Button variant="outline" className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-background">
                  <Heart className="mr-2 h-4 w-4" /> Sponsor
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-24 text-muted-foreground italic">
            No animals found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
