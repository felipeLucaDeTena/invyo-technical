/* eslint-disable consistent-return */
import dayjs from "dayjs";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useAuth from "../../context/auth-context";
import { removeTask, updateTask } from "../../features/tasks/tasksSlice";

const CardContainer = styled.div`
  background-color: #ffffffa1;
  width: 95%;
  border-radius: 9px;
  margin-bottom: 4%;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: auto;
  margin-right: 2%;
`;
const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;
const DescriptionContainer = styled.div`
  width: 100%;
`;
const ButtonEdit = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.3rem;
  border-radius: 10px;
  padding: none;
  height: 70%;
  margin: 20% 10% 0 0;
  &:hover {
    color: #ffffff;
  }
`;
const ButtonClose = styled.button`
  margin: 5% 5% 40% 0;
  border: none;
  font-size: 1.5rem;
  background-color: white;
  border-radius: 10px;

  &:hover {
    color: #dc5040;
  }
`;
const StatusButton = styled.button`
  width: 100%;
  border: none;
  padding: 3% 0;
  border-radius: 0 0 9px 9px;
  font-size: 1.2rem;
  &:hover {
    background-color: ${(props) => props.background};
  }
`;

const TitleContainer = styled.div`
  border-bottom: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 9px 9px 0 0;
`;
const Title = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  margin-left: 10%;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const DescriptionInput = styled.input`
  width: 96%;
  font-size: 1rem;
  font-family: montserrat;
`;
const TitleInput = styled.input`
  width: 96%;
  height: 20px;
  font-size: 1rem;
  font-family: montserrat;
`;
const DateInput1 = styled.input``;
const DateInput2 = styled.input``;
const Description = styled.p`
  padding: 0 5%;
  width: 96%;
  word-wrap: break-word;
  &::first-letter {
    text-transform: capitalize;
  }
`;
const DateContainer = styled.div`
  background-color: #a8a6a6;
  color: white;
  padding: 2% 0;
  margin: 0 2% 5% 2%;
  border-radius: 50px;

  font-size: 1rem;
  width: 60%;
  text-align: center;
  &:nth-child(3) {
    margin-left: auto;
    background-color: #ed7676;
    color: black;
  }
`;

function Card({ item, status }) {
  const [isEditing, setIsEditing] = useState(false);

  const { authState } = useAuth();

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };
  const dispatch = useDispatch();

  const handleClickStatus = () => {
    const newStatus = () => {
      if (item.status === "In Progress") {
        return "Completed";
      }
      if (item.status === "Completed") {
        return "In Progress";
      }
    };
    dispatch(
      updateTask({
        id: item.id,
        parcialTask: { status: newStatus() },
        token: authState.token,
      })
    );
  };

  const handleTitle = (ev) => {
    ev.preventDefault();
    dispatch(
      updateTask({
        id: item.id,
        parcialTask: { title: ev.target.value },
        token: authState.token,
      })
    );
  };
  const handleDescription = (ev) => {
    ev.preventDefault();
    dispatch(
      updateTask({
        id: item.id,
        parcialTask: { description: ev.target.value },
        token: authState.token,
      })
    );
  };
  const handleDate1 = (ev) => {
    ev.preventDefault();
    dispatch(
      updateTask({
        id: item.id,
        parcialTask: { created_at: ev.target.value },
        token: authState.token,
      })
    );
  };
  const handleDate2 = (ev) => {
    ev.preventDefault();
    dispatch(
      updateTask({
        id: item.id,
        parcialTask: { deadline: ev.target.value },
        token: authState.token,
      })
    );
  };
  const handleDelete = () => {
    dispatch(removeTask({ id: item.id, token: authState.token }));
  };

  const daysBetweenDates = (date1, date2) => {
    const difference = new Date(date1).getTime() - new Date(date2).getTime();
    const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays - TotalDays * 2;
  };

  const dueDate = daysBetweenDates(
    dayjs(new Date()).format("YYYY-MM-DD"),
    item.deadline
  );

  const backgroundColor = () => {
    console.log(dueDate);
    if (dueDate <= 0) {
      return "#c7c7c7";
    }
    if (dueDate <= 2) {
      return "#ff6b5a";
    }
    if (dueDate <= 14) {
      return "#ffd451";
    }
    return "#74dd92";
  };

  return (
    <CardContainer>
      <TitleContainer style={{ backgroundColor: backgroundColor() }}>
        {isEditing ? (
          <Form>
            <TitleInput
              type="text"
              onChange={handleTitle}
              defaultValue={item.title}
            />
          </Form>
        ) : (
          <Title>{item.title}</Title>
        )}

        <ButtonContainer>
          <ButtonEdit onClick={toggleEditing} type="button">
            Edit
          </ButtonEdit>

          <ButtonClose type="button" onClick={handleDelete}>
            x
          </ButtonClose>
        </ButtonContainer>
      </TitleContainer>
      <InnerCard>
        <DescriptionContainer>
          {isEditing ? (
            <Form>
              <DescriptionInput
                type="text"
                onChange={handleDescription}
                defaultValue={item.description}
              />
            </Form>
          ) : (
            <Description onDoubleClick={() => setIsEditing(true)}>
              {item.description}
            </Description>
          )}
        </DescriptionContainer>

        {isEditing ? (
          <Form>
            <DateInput1
              type="date"
              onChange={handleDate1}
              defaultValue={item.created_at}
            />
            <DateInput2
              type="date"
              onChange={handleDate2}
              defaultValue={item.deadline}
            />
          </Form>
        ) : (
          <>
            <DateContainer>Created: {item.created_at}</DateContainer>
            <DateContainer style={{ backgroundColor: backgroundColor() }}>
              Deadline: {item.deadline}
            </DateContainer>
          </>
        )}
      </InnerCard>
      <StatusButton
        onClick={handleClickStatus}
        type="button"
        background={status.color}
      >
        Pass to {item.status === "In Progress" ? "Completed" : "In Progress"}
      </StatusButton>
    </CardContainer>
  );
}

export default Card;
