"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, PlusIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useLocalStorage } from "~/hooks/use-local-storage";
import { useScopedI18n } from "~/lib/next-international/client";

const TodoList = dynamic(
  async () => {
    const { TodoList: Component } = await import("./todo-list");
    return { default: Component };
  },
  {
    ssr: false,
    loading: () => <Loader className="mt-8 h-6 w-6 animate-spin" />,
  },
);

const formSchema = z.object({
  title: z.string().nonempty(),
});

type FormSchema = z.output<typeof formSchema>;

export type Todo = {
  id: string;
  title: string;
  createdAt: string;
  completedAt: string | null;
};

export function Todo() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("@useful-tools/todos", []);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const scopedT = useScopedI18n("pages.tools.todo");

  const handleAddTodo = form.handleSubmit((data) => {
    setTodos([
      ...todos,
      {
        id: Date.now().toString(),
        title: data.title,
        createdAt: new Date().toISOString(),
        completedAt: null,
      },
    ]);
  });

  return (
    <section className="mt-8">
      <form className="flex items-center gap-4" onSubmit={handleAddTodo}>
        <Input
          {...form.register("title")}
          placeholder={scopedT("placeholder")}
        />
        <Button type="submit" aria-label={scopedT("actions.create")}>
          <PlusIcon />
        </Button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </section>
  );
}
