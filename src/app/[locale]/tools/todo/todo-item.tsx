import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "mizuhara/utils";
import { useTranslations } from "next-intl";
import { Icons } from "~/components/icons";
import { AlertDialog } from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { type Todo, useTodo } from "./todo-store";

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleCompleteById, deleteById, editTodo } = useTodo();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: todo.id });
  const t = useTranslations("pages.tools.todo");

  return (
    <li
      className={cn(
        "rounded-md border border-border p-3",
        isDragging && "ring-2 ring-ring opacity-30",
      )}
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3 flex-1">
          <Checkbox
            className="size-6"
            checked={!!todo.completedAt}
            onCheckedChange={() => toggleCompleteById(todo.id)}
            aria-label={t("complete")}
          />
          <input
            value={todo.title}
            className="appearance-none bg-transparent outline-none flex-1"
            onChange={(e) => editTodo(todo.id, e.target.value)}
          />
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="cursor-grab aria-pressed:cursor-grabbing"
          {...attributes}
          {...listeners}
        >
          <Icons.GripVertical className="size-4" />
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icons.Clock className="size-4" />
          <time dateTime={new Date(todo.createdAt).toISOString()}>
            {new Date(todo.createdAt).toLocaleDateString(undefined, {
              hour: "numeric",
              minute: "numeric",
            })}
          </time>
        </p>
        <AlertDialog>
          <AlertDialog.Trigger asChild>
            <Button variant="destructive" size="sm">
              <Icons.Trash className="size-4 mr-2" />
              <span>{t("delete.trigger")}</span>
            </Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Header>
              <AlertDialog.Title>{t("delete.title")}</AlertDialog.Title>
              <AlertDialog.Description>
                {t("delete.description")}
              </AlertDialog.Description>
            </AlertDialog.Header>
            <AlertDialog.Footer>
              <AlertDialog.Cancel>{t("delete.cancel")}</AlertDialog.Cancel>
              <AlertDialog.Action
                variant="destructive"
                onClick={() => deleteById(todo.id)}
              >
                {t("delete.trigger")}
              </AlertDialog.Action>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </div>
    </li>
  );
}
