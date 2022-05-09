import * as React from "react";
import {cubeSides, perPageResults} from "../../utils/services";
import {
    Tooltip, TooltipProps, Typography
} from "@mui/material";
import {styled} from "@mui/material/styles";
import {stylesUtils} from "../../utils/styles";
import {Movie} from "../../types/MovieData";
import ImageFile from "../atoms/ImageFile";
import MovieContent from "../molecules/MovieContent";

const { resultsTable: styles } = stylesUtils;

type Props = {
    page: number,
    loginItems: Movie[],
    postersOnly: boolean,
    isCollage?: boolean,
}


const ResultsTable: React.FC<Props> = ( { page, loginItems, postersOnly, isCollage= false  }) => {

    let startSlice = Math.floor((0 + ((page - 1) * 4)) % (cubeSides * perPageResults));
    let endSlice = startSlice + perPageResults;


    return <>
        {loginItems && loginItems.slice(startSlice, endSlice).map((item : Movie, index: number) => {


            const movieIndex = (index + 1 + ((page  - 1 ) * perPageResults));


            return <div key={item.title + index + page} style={{...styles.movieContainer,
                ...(postersOnly && styles.movieContainerBig),
                ...(isCollage && styles.movieContainerSmall)}}>
                <div style={{...styles.movieContent,
                    ...((postersOnly || isCollage) && styles.movieContentHidden)}}>
                    <MovieContent item={item} movieIndex={movieIndex} />
                </div>
                {postersOnly && isCollage && <Typography variant="subtitle2" sx={styles.numberCollage}>
                    #{movieIndex}
                </Typography>}
                <ImageFile item={item} />
            </div>
        })}

    </>

}
export default ResultsTable;
