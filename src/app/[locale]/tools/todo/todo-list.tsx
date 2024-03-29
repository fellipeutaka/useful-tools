"use client";

import { TodoItem } from "./todo-item";

import {
  DndContext,
  type DragEndEvent,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useTodo } from "./todo-store";

export function TodoList() {
  const todos = useTodo((state) => state.todos);
  const orderTodo = useTodo((state) => state.orderTodo);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || active.id === over?.id) {
      return;
    }

    orderTodo(over, active);
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
    >
      <SortableContext items={todos} strategy={verticalListSortingStrategy}>
        <ul className="mt-6 space-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
