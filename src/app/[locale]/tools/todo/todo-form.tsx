"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { type Output, object, string } from "valibot";
import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { TextField } from "~/components/ui/textfield";
import { useTodo } from "./todo-store";

const formSchema = object({
  title: string(),
});

type FormSchema = Output<typeof formSchema>;

export function TodoForm() {
  const form = useForm<FormSchema>({
    resolver: valibotResolver(formSchema),
  });
  const t = useTranslations("pages.tools.todo");

  const addTodo = useTodo((state) => state.addTodo);
  const handleAddTodo = form.handleSubmit((data) => {
    addTodo(data.title);
    form.reset();
  });

  return (
    <form className="flex items-center gap-4" onSubmit={handleAddTodo}>
      <TextField className="w-full">
        <TextField.Input
          {...form.register("title")}
          placeholder={t("placeholder")}
        />
      </TextField>
      <Button type="submit" aria-label={t("create")}>
        <Icons.Plus className="size-4" />
      </Button>
    </form>
  );
}
