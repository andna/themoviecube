import * as React from "react";
import {useState} from "react";
import {Movie} from "../../types/MovieData";
import {links} from "../../utils/services";
import {stylesUtils} from "../../utils/styles";

const { resultsTable: styles } = stylesUtils;
type Props = {item: Movie}

const ImageFile: React.FC<Props> = ( { item  }) => {
    const altImage = links.altImage;
    const [image, setImage] =  useState<string>(
        `http://image.tmdb.org/t/p/w500/${item.backdrop_path || item.poster_path}`)
    return <img
        style={{...styles.poster, ...(!image && styles.altImage)}}
        onError={() => { setImage(null)}}
        src={image ? image : altImage} alt={item.title}/>
}
export default ImageFile;
