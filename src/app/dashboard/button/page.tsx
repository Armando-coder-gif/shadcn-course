'use client'
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, MailOpen } from "lucide-react";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>defult</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button
        onClick={() => {
          console.log("hola mundo");
        }}
      >
        Click me
      </Button>
      <Button variant="success">success</Button>
      <Button capitalize={false}>capitalize false </Button>
      <Button variant="outline" size="icon">
        <ChevronRight />
      </Button>
      <Button>
        <MailOpen /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
