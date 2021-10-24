import React from "react";

import Form from "./Form/Form";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

const listStyles = {
  maxWidth: 300,
  maxHeight: 300,
  p: 2.5,
  overflow: "auto",
  border: 1,
  borderColor: "grey.500",
  borderRadius: 1,
  mb: 2,
};

function formatDate(dateObj) {
  const options = {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  };

  return dateObj.toLocaleDateString("ru-RU", options);
}

function App() {
  const [comments, setComments] = React.useState(
    JSON.parse(localStorage.getItem("comments")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  function addComment(comment) {
    setComments((existingComments) => [...existingComments, comment]);
  }

  function removeComment(id) {
    const filtered = comments.filter((comment) => comment.id !== id);
    setComments([...filtered]);
  }

  return (
    <div>
      <List sx={{ ...listStyles }}>
        <Typography variant="h6" component="div">
          Отзывы:
        </Typography>
        {comments.map(({ id, name, message, createdAt }) => {
          return (
            <ListItem
              onClick={() => removeComment(id)}
              key={id}
              divider
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                cursor: "pointer",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} secondary={message} />
              </Box>
              <Typography variant="caption" sx={{ color: "grey.500" }}>
                {`Отправлено: ${formatDate(new Date(createdAt))}`}
              </Typography>
            </ListItem>
          );
        })}
      </List>
      <Form onAddComment={addComment} />
    </div>
  );
}

export default App;
