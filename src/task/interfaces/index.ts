// interface of the string message which server sends back
interface ResponseMessage {
  message?: string;
  error?: boolean;
  errorMessage?: string;
}

// interface of the original Task
interface Task {
  id: string;
  parentId: string;
  title: string;
  description: string;
}

// interface of the Task which server sends back (it has 2 more property for Error handling reason)
interface ResponseTask {
  id?: string;
  parentId?: string;
  title?: string;
  description?: string;
  error?: boolean;
  errorMessage?: string;
}

// interface of the array of Tasks which server sends back
interface Tasks {
  tasks?: Array<Task>;
  error?: boolean;
  errorMessage?: string;
}
export { Tasks, Task, ResponseMessage, ResponseTask };
