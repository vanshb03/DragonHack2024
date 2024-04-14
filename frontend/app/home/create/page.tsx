import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

export default function Create() {
  const handleUpload = async (formData: FormData) => {
    'use server';
    console.log(formData);
  }

  return (
    <main className="w-full h-dvh flex flex-col justify-center items-center">
      <form action={handleUpload}>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create flashcards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="flashcards-name" placeholder="Name of your flashcard set" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="class">Class</Label>
                <Select>
                  <SelectTrigger id="class" name="flashcards-class">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="pdf">PDF Upload</Label>
                <Input id="pdf" placeholder="PDF" name="uploaded-pdf" type="file" accept="application/pdf" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2" href="/dashboard">Cancel</Link>
            <Button type="submit">Upload</Button>
          </CardFooter>
        </Card> 
        </form>
    </main>
  );
}
