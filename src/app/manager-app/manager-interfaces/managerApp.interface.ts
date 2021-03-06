export interface WorkspaceResponse {
  status:    string;
  workspace: Workspace[];
}

export interface Workspace {
  date:      Date;
  _id:       string;
  title:     string;
  user:      User;
  __v:       number;
  img:       string;
  todoLists: TodoLists[];
}

export interface TodoList {
  _id:  string;
  name: string;
}

// export interface User {
//   active: boolean;
//   _id:    string;
//   name:   string;
//   email:  string;
// }
export interface User {
  role?:     string;
  active?:   boolean;
  google?:   boolean;
  _id?:      string;
  img?:      string;
  name?:     string;
  email?:    string;
  password?: string;
  __v?:      number;
}



export interface TodoListResponse {
  status:   string;
  todoList: TodoLists[];
}

export interface TodoLists {
  date:    Date;
  active:  boolean;
  _id:     string;
  name:    string;
  project: Project;
  user:    User;
  __v:     number;
  todos:   Todo[];
}

export interface Project {
  _id:   string;
  title: string;
}

export interface Todo {
  done:     boolean;
  _id:      string;
  todo:     string;
  todoList: string;
}


///POST RESPONSE 
export interface TodoListResponse {
  status:      string;
  message:     string;
  newTodoList: NewTodoList;
}

export interface NewTodoList {
  date:    Date;
  active:  boolean;
  _id:     string;
  name:    string;
  project: Project;
  user:    User;
  todos:  Todo[];
  __v:     number;
}


//TODORESPONSE
export interface AddTodoResponse {
  status:  string;
  newTodo: NewTodo;
}

export interface NewTodo {
  date:     Date;
  done:     boolean;
  _id:      string;
  todo:     string;
  todoList: string;
  user:     string;
  __v:      number;
}

export interface IsDoneTodo {
  status:   string;
  message:  string;
  todoDone: NewTodo;
}

export interface DeleteTodoList {
  status:          string;
  message:         string;
  deletedTodoList: TodoList;
}