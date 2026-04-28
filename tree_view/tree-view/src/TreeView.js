import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Box } from '@mui/material';
import movies from './movies.json';

function TreeView() {
  return (
    <div className="TreeView">
      <Box sx={{ height: '100%', width: 200, display: "flex", alignItems: "center", border: "2px solid #E36A6A", borderRadius: 2, padding: 2, backgroundColor: '#FFFBF1' }}>
        <SimpleTreeView>
          {Object.entries(movies.Genres).map(([genre, genreMovies], genreIndex) => (
            <TreeItem
              key={genre}
              itemId={`${genreIndex}`}
              label={genre}
            >
              {genreMovies.map(([title, rating], movieIndex) => (
                <TreeItem
                  key={title}
                  itemId={`${genreIndex}-${movieIndex}`}
                  label={title}
                >
                  <TreeItem
                    itemId={`${genreIndex}-${movieIndex}-0`}
                    label={rating}
                  />
                </TreeItem>
              ))}
            </TreeItem>
          ))}
        </SimpleTreeView>
      </Box>
    </div>
  );

}

export default TreeView;