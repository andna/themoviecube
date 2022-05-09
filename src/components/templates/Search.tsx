import * as React from "react";
import * as THREE from 'three'
import { styled } from '@mui/material/styles';
import {Button, TextField} from "@mui/material";
import {stylesUtils} from "../../utils/styles";

const { search: styles } = stylesUtils;

const CssTextField = styled(TextField)(styles.customTextField);

type Props = {
    handleSubmit: (submitted? : string) => {},
    setSearchTerm: (searchTerm? : string) => void,
    setRotateTo: (arg0: THREE.Mesh["rotation"]) => void,
    searchTerm: string,
}

const Search: React.FC<Props> = ( { searchTerm, handleSubmit, setSearchTerm, setRotateTo  }) => {

    const submitSearch = (event : any, term: string = searchTerm) => {
        event.preventDefault();
        setRotateTo(null);
        handleSubmit(term);
    }

    return <div style={styles.searchContainer}>
        <form data-testid="search-form" onSubmit={submitSearch}>
            <CssTextField   variant="filled"
                            type="search"
                            inputProps={{ 'aria-label': `${searchTerm ? 'Movie title' : 'Type a movie title'}` }}
                            label={`${searchTerm ? 'Movie title' : 'Type a movie title'}`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}/>
            <Button color="secondary" variant="contained" type="submit" disableElevation
                    sx={styles.button}
                    disabled={!searchTerm || searchTerm === ''}>
                Search
            </Button>
        </form>
        Or try:
        <div style={styles.examples}>
            {['Lord', 'Harry', 'Mad', 'Alien'].map(button => {
                return <Button key={button}
                               sx={styles.exampleButton}
                    color="primary" variant="outlined" type="submit" disableElevation
                    onClick={(event)=>{
                            setSearchTerm(button);
                            submitSearch(event, button);
                        }
                    }
                >
                    {button}
                </Button>
            })}
        </div>
    </div>

}
export default Search;
