import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import statuses from "../data/statuses";
import Card from "../components/todo/card";
import Form from "../components/todo/form";
import { getTasks } from "../features/tasks/tasksSlice";
import useAuth from "../context/auth-context";

const Wrapper = styled.div`
  min-height: 91vh;
  width: 100%;
  background: url("/loginbackground.png") no-repeat center fixed;
  background-size: cover;
`;
const Column = styled.div`
  height: 100%;
  width: 35%;
  min-height: 200px;
  background-color: #dc5040df;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
  margin: 3% 0;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;
const Status = styled.h2`
  color: white;
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px 9px 0 0;
  margin-bottom: 5%;
  border-bottom: 1px solid white;
`;

function ToDoPage() {
  const { authState } = useAuth();
  const cardState = useSelector((state) => state.task);
  const [card, setCard] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks(authState.token));
  }, []);

  return (
    <Wrapper>
      <Form />
      <Container>
        {statuses.map((s) => (
          <Column key={s.status}>
            <Status>{s.status.toUpperCase()}</Status>
            {cardState.tasks
              .filter((c) => c.status === s.status)
              .map((c) => (
                <Card key={c.id} item={c} status={s} />
              ))}
          </Column>
        ))}
      </Container>
    </Wrapper>
  );
}

export default ToDoPage;
