"use client";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  if (todo) {
    console.log("todo", todo);
  }

  const { push } = useRouter();

  const handleUpdate = (id) => {
    push(`edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      setTodo(todo.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    const getTodo = async () => {
      try {
        const request = await axios.get("/api/tasks");
        //console.log("🚀 ~ getTodo ~ request:", request)
        const response = request.data;
        //console.log("🚀 ~ getTodo ~ response:", response)
        // console.log('Todos',response);
        setTodo(response);
      } catch (error) {
        console.log(error);
      }
    };
    getTodo();
  }, []);

  return (
    <div className="text-start flex flex-col gap-5">
      {todo &&
        todo.map((elem) => (
          <div
            key={elem._id}
            className="flex justify-between items-center w-full border-b-customPurple border-b-4 rounded-xl p-2"
          >
            <div className="w-60 flex flex-col gap-1">
              <h5 className="font-bold text-1xl">{elem.task}</h5>
              <p className="text-sm">{elem.description}</p>
            </div>
            <div className="flex flex-col items-center gap-2 justify-center">
              <MdDelete
                size={23}
                color="red"
                cursor="pointer"
                onClick={() => handleDelete(elem._id)}
              />
              <FaEdit
                size={20}
                className="text-end"
                cursor="pointer"
                onClick={() => handleUpdate(elem._id)}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
