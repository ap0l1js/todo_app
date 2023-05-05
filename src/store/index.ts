import { values } from 'mobx';
import { types } from 'mobx-state-tree';

const todoModel = types
  .model({
    id: types.identifier,
    title: types.optional(types.string, ''),
    isDone: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    toggle() {
      self.isDone = !self.isDone;
    },
  }));

const rootStore = types
  .model({
    todos: types.map(todoModel),
  })
  .views((self) => ({
    get completedCount() {
      return values(self.todos).filter((todo) => todo?.isDone).length;
    },
  }))
  .actions((self) => ({
    addTodo(id: string, title: string) {
      self.todos.set(id, todoModel.create({ id, title }));
    },
    deleteTodo(id: string) {
      self.todos.delete(id);
    },
  }));

const store = rootStore.create();

export { store, todoModel };
