// src/pages/Community.js

import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const mockPosts = [
  { user: 'Yasir', content: 'How do you manage morning glucose spikes?' },
  { user: 'Aniket', content: 'What are some good low-carb snacks?' },
];

const Community = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = () => {
    if (newPost.trim() !== '') {
      setPosts([{ user: 'You', content: newPost }, ...posts]);
      setNewPost('');
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Community
      </Typography>

      {/* Post Input */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Share Your Thoughts
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handlePostSubmit}
          >
            Post
          </Button>
        </CardContent>
      </Card>

      {/* Posts List */}
      <List>
        {posts.map((post, index) => (
          <ListItem key={index} sx={{ mb: 2 }}>
            <Card sx={{ width: '100%' }}>
              <CardContent>
                <Typography variant="subtitle1" color="text.secondary">
                  {post.user}
                </Typography>
                <Typography variant="body1">{post.content}</Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Community;
