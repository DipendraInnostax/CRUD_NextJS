
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default function Home() {

  return (
    <main className="max-w-4xl mx-auto mt-4 ">
      <div className="flex flex-col gap-4 my-5 text-center">
       <h1 className="text-center font-bold text-2xl ">TODO APPLICATION</h1>
         <AddTask/>
      </div>
      <TodoList/>
    </main>
);

}
