import type { Active, Over } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Todo = {
  id: string;
  title: string;
  createdAt: string;
  completedAt: string | null;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (title: string) => void;
  editTodo: (id: string, title: string) => void;
  deleteById: (id: string) => void;
  toggleCompleteById: (id: string) => void;
  orderTodo: (over: Over, active: Active) => void;
};

export const useTodo = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo(title) {
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: crypto.randomUUID(),
              title,
              createdAt: new Date().toISOString(),
              completedAt: null,
            },
          ],
        }));
      },
      editTodo(id, title) {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id !== id ? todo : { ...todo, title },
          ),
        }));
      },
      deleteById(id) {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
      toggleCompleteById(id) {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id !== id
              ? todo
              : {
                  ...todo,
                  completedAt: todo.completedAt
                    ? null
                    : new Date().toISOString(),
                },
          ),
        }));
      },
      orderTodo(over, active) {
        set((state) => {
          const oldIndex = state.todos.findIndex(
            (item) => item.id === active.id,
          );
          const newIndex = state.todos.findIndex((item) => item.id === over.id);
          return {
            ...state,
            todos: arrayMove(state.todos, oldIndex, newIndex),
          };
        });
      },
    }),
    {
      name: "@useful-tools/todos",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
