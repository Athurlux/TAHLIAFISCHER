
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="font-headline text-5xl font-bold text-primary">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">Based in beautiful Shafter, California. We'd love to hear from you.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-muted-foreground">Shafter, California</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-muted-foreground">info@tahliafischer.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h4 className="font-bold mb-4 uppercase tracking-wider text-xs opacity-60">Follow Our Journey</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-secondary hover:text-background border-secondary text-secondary">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-secondary hover:text-background border-secondary text-secondary">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-secondary hover:text-background border-secondary text-secondary">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="border-border shadow-sm">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input placeholder="Tahlia" className="bg-white" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input placeholder="Fischer" className="bg-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Input type="email" placeholder="you@example.com" className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <Input placeholder="How can we help?" className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea placeholder="Tell us more..." className="min-h-[150px] bg-white" />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 py-6 text-lg">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
