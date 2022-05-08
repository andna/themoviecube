import * as React from "react";
import {cubeSides, perPageResults} from "../../utils/services";
import {
    Tooltip, TooltipProps, Typography
} from "@mui/material";
import {styled} from "@mui/material/styles";
import {stylesUtils} from "../../utils/styles";
import {Movie} from "../../types/MovieData";
import ImageFile from "../atoms/ImageFile";

const { resultsTable: styles } = stylesUtils;

const CssTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({ }));

type Props = {
    page: number,
    loginItems: Movie[],
    postersOnly: boolean
}


const ResultsTable: React.FC<Props> = ( { page, loginItems, postersOnly  }) => {

    let startSlice = Math.floor((0 + ((page - 1) * 4)) % (cubeSides * perPageResults));
    let endSlice = startSlice + perPageResults;


    return <div style={styles.moviesWrapper}>
        {loginItems.slice(startSlice, endSlice).map((item : Movie, index: number) => {


            const movieIndex = (index + 1 + ((page  - 1 ) * perPageResults));
            const year = item.release_date && new Date(item.release_date).getFullYear();
            let title: string | string[] = item.title.split(":");
            const subtitle = title[1];
            title = title[0] + (title[1] ? ":" : "");

            return <div style={{...styles.movieContainer, ...(postersOnly && styles.movieContainerBig)}}>
                <div style={{...styles.movieContent, ...(postersOnly && styles.movieContentHidden)}}>

                    <Typography variant="h6" sx={styles.title}>
                        {title}
                        {subtitle && <><br /><small>{subtitle}</small></>}
                    </Typography>
                    <div style={{...styles.bottomInfo}}>

                        <Typography variant="subtitle2" sx={styles.number}>
                            #{movieIndex}
                        </Typography>
                        <Typography variant="caption" sx={styles.year}>
                            {year}
                        </Typography>
                        <a href={`https://www.themoviedb.org/movie/${item.id}`}
                           target="_blank" rel="noreferrer"  style={styles.link}>
                            🔗
                        </a>
                    </div>
                </div>
                <ImageFile item={item} />
            </div>
        })}

    </div>

}
export default ResultsTable;
