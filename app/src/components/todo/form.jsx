import React, { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setTask } from "../../features/tasks/tasksSlice";
import useAuth from "../../context/auth-context";

const FormContainer = styled.form`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    79deg,
    #4db379e4 0%,
    #2e8562d4 34%,
    #226a4de0 81%
  );
`;
const Container = styled.div``;
const OuterContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const InputContainer = styled.div`
  width: 66%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputTitle = styled.h3`
  color: white;
  font-size: 1.2rem;
  margin: 0;
`;
const Input = styled.input`
  width: 30vw;
  margin-top: 8px;
  border: none;
  border-radius: 5px;
  height: 30px;
`;
const SubmitButton = styled.button`
  width: 20%;
  margin-left: auto;
  background-color: #dc5040;
  color: white;
  border: 1px solid #e99d3e;
  border-radius: 3px;
`;
const Textarea = styled.textarea`
  height: 100px;
  border: none;
  border-radius: 10px;
  width: 30vw;
`;
const TextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Form() {
  const [newTask, setNewTask] = useState("");
  const { authState } = useAuth();
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("hello");
    setNewTask({
      ...newTask,
      created_at: dayjs(new Date()).format("YYYY-MM-DD"),
      status: "In Progress",
    });
    dispatch(
      setTask({
        task: {
          ...newTask,
          created_at: dayjs(new Date()).format("YYYY-MM-DD"),
          status: "In Progress",
        },
        token: authState.token,
      })
    );
  };

  console.log(newTask);

  const handleChange = (ev) => {
    console.log(ev);
    setNewTask({
      ...newTask,
      [ev.target.name]: ev.target.value,
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer className="input__container">
        <OuterContainer>
          <Container>
            <InputTitle>Title</InputTitle>
            <Input
              onChange={handleChange}
              name="title"
              value={newTask.title}
              type="text"
              required
            />
          </Container>
          <Container>
            <InputTitle>Deadline</InputTitle>
            <Input
              onChange={handleChange}
              name="deadline"
              value={newTask.deadline}
              type="date"
              required
            />
          </Container>
        </OuterContainer>

        <TextContainer>
          <InputTitle>Description</InputTitle>
          <Textarea
            onChange={handleChange}
            name="description"
            value={newTask.description}
            required
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </TextContainer>
      </InputContainer>
    </FormContainer>
  );
}

export default Form;
