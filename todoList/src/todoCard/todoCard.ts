/// <reference types="react" />

declare module "todoCard/TodoCard" {
  const TodoCard: React.ComponentType<{ addToDo: (text: string) => void }>;

  export default TodoCard;
}
