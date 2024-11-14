import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const ArticleCard = ({ article }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardContent>
      <Typography variant="h6">{article.title}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
        {article.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary" href={article.url} target="_blank">
        Read more
      </Button>
    </CardActions>
  </Card>
);

export default ArticleCard;
