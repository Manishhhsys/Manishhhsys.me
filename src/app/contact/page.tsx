"use client";

import { GlowLine } from "@/components/ui/glow-line";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit number"),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z.string().min(1, { message: "Message cannot be empty" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });
const onSubmit = async (values: FormValues) => {
  try {
    const res = await fetch("/api/submit-google-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();
    if (!res.ok || !data.success) throw new Error(data.error || "Failed");

    toast.success("Form submitted successfully!");
    form.reset();
  } catch (err) {
    console.log(err)
    toast.error("Error while submitting the form");
  }
};

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 animate-fade-in-blur">
      
      <div className="space-y-8 text-center">
        <h1 className="font-semibold text-4xl lg:text-5xl font-nothing">Contact</h1>
        <h4>Feel free to reach out, and I&apos;ll respond as soon as possible</h4>
      </div>

      <GlowLine />

      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
          <p className="text-sm text-muted-foreground">
            Fill out the form below and I&apos;ll get back to you soon.
          </p>
        </CardHeader>
        <CardContent>
          
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="1234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
}
