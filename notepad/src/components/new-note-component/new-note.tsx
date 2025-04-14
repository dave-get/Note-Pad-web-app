"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import ReachTextEditor from "./reach-text-editor";
import { handleNote } from "@/lib/actions/server-functions";

const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(100, {
      message: "Title must not exceed 100 characters.",
    }),
  content: z.string().min(10, {
    message: "Content must be at least 10 characters.",
  }),
});

export default function TextEditorForm() {
  const { data: session } = useSession();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!session?.user?.token) {
      toast.error("You must be logged in to create a note");
      return;
    }

    const res = await handleNote(values,session?.user?.token);

    if (res.ok) {
      toast.success(
        <div className="bg-green-500/80 text-white p-4 rounded-lg">
          <p>Document titled {values.title} created successfully!</p>
        </div>
      );
    } else {
      toast.error(
        <div className="bg-red-500/80 text-white p-4 rounded-lg">
          <p>Failed to save document titled {values.title}</p>
        </div>
      );
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">
        Create New Document
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" suppressHydrationWarning>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-2xl">Title</FormLabel>
                <FormControl className="text-white">
                  <Input placeholder="Enter document title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-2xl">Content</FormLabel>
                <FormControl>
                  <ReachTextEditor onChange={field.onChange} />
                </FormControl>
                <FormDescription>
                  Write the main content of your document.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full sm:w-auto bg-blue-400/20 hover:bg-blue-600/50"
          >
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
}
