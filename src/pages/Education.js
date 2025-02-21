import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

const articles = [
  { title: "Understanding Diabetes", content: "Diabetes is a chronic condition that affects..." },
  { title: "Managing Blood Sugar", content: "Keeping your blood sugar levels within range..." },
];

const Education = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Educational Resources
      </Typography>

      {articles.map((article, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{article.title}</Typography>
            <Typography variant="body2">{article.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Education;
