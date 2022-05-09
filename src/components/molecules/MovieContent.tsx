import * as React from "react";
import {Movie} from "../../types/MovieData";
import {Typography} from "@mui/material";
import {stylesUtils} from "../../utils/styles";
import {useState} from "react";

const { movieContent: styles } = stylesUtils;

type Props = {
    item: Movie,
    movieIndex: number
}

const MovieContent: React.FC<Props> = ( { item, movieIndex }) => {
    const year = item.release_date && new Date(item.release_date).getFullYear();
    let title: string | string[] = item.title.split(":");
    const subtitle = title[1];
    title = title[0] + (title[1] ? ":" : "");

    const [linkHovered, setLinkHovered] = useState<boolean>(false);

    return <>
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
               target="_blank" rel="noreferrer"
               onMouseEnter={() => {setLinkHovered(true)}}
               onMouseLeave={() => {setLinkHovered(false)}}
               style={{...styles.link, ...(linkHovered && styles.linkHovered)}}>
                🔗
            </a>
        </div>
    </>
}

export default MovieContent;
