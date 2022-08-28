import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Tooltip, Grid } from '@mui/material';

const MovieCard = (props) => {
    return (
        <>
            {props.movies.map((movie) => (
                <Grid key={movie.imdbID} item>
                    <Card sx={{ alignItems: 'center', borderRadius: 2.5, width: 350, height: 550 }}>
                        <CardMedia component="img" image={movie.Poster} sx={{ maxWidth: 350, maxHeight: 400 }} />
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {movie.Title}
                            </Typography>
                            <Typography variant="h6" component="div">
                                ({movie.Year})
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Tooltip title="Share to a friend!" arrow>
                                <Button size="small" aria-label="share">Share</Button>
                            </Tooltip>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </>
    );
};

export default MovieCard;