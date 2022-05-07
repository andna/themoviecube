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

    const submitSearch = (event : any) => {
        event.preventDefault();
        setRotateTo(null);
        handleSubmit(searchTerm);
    }

    return <div>
        <form data-testid="search-form" onSubmit={submitSearch}>
            <CssTextField   variant="filled"
                            type="search"
                            inputProps={{ 'aria-label': `${searchTerm ? 'User login to search' : 'Type a user login'}` }}
                            label={`${searchTerm ? 'User login to search' : 'Type a user login'}`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            sx={styles.field}/>
            <Button color="primary" variant="contained" type="submit" disableElevation
                    sx={styles.button}
                    disabled={!searchTerm || searchTerm === ''}>
                Submit
            </Button>
        </form>
    </div>

}
export default Search;