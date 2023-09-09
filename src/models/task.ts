import { title } from "process";
import { Entity, Field, Fields } from "remult";

@Entity("tasks", {
  allowApiCrud: true,
})
export class Task {
  @Fields.cuid()
  id = "";
  @Fields.string<Task>({
    validate: (task) => {
      if (task.title.length < 2) throw Error("Too short");
    },
  })
  title = "";
  @Fields.boolean()
  completed = false;
  @Fields.createdAt()
  createdAt = new Date();
}
