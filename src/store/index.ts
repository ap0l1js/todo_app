import { values } from 'mobx';
import { Instance, types } from 'mobx-state-tree';

const todoModel = types
  .model({
    id: types.identifier,
    title: types.string,
    isDone: types.boolean,
  })
  .actions((self) => ({
    toggle() {
      self.isDone = !self.isDone;
    },
  }));

export interface ITodo extends Instance<typeof todoModel> {}

const rootStore = types
  .model({
    todos: types.array(todoModel),
  })
  .views((self) => ({
    get completedCount() {
      return values(self.todos).filter((todo) => todo.isDone).length;
    },
  }))
  .actions((self) => ({
    addTodo(id: string, title: string) {
      self.todos.push(todoModel.create({ id, title, isDone: false }));
    },
    deleteTodo(id: string) {
      self.todos.replace(self.todos.filter((todo) => todo.id !== id));
    },
  }));

const store = rootStore.create();

export { store };
