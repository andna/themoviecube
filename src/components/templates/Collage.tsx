import * as React from "react";
import {useState} from "react";
import {Movie} from "../../types/MovieData";
import {cubeSides, links, perPageResults} from "../../utils/services";
import {stylesUtils} from "../../utils/styles";
import {Button, Switch, Typography} from "@mui/material";
import ImageFile from "../atoms/ImageFile";
import ResultsTable from "../organisms/ResultsTable";

const { collage: styles } = stylesUtils;
type Props = {
    items: Movie[],
    pageOffset: number,
    postersOnly: boolean,
    setPostersOnly: (setPO: boolean) => void,
}

const Collage: React.FC<Props> = ( { items, pageOffset, postersOnly, setPostersOnly  }) => {

    return (
        <div style={styles.container}>
            <div style={styles.smallImagesContainer}>
                {[  [-2, 1, -1],
                    [4,  5,  2],
                    [-1, 3, -3],
                ].map((row, rowIndex) => (
                    <div key={rowIndex}
                         style={{...styles.collageRow, ...(rowIndex === 1 && styles.middleRow)}}>
                        {row.map((pageIndex, pageMapIndex) => {
                            let currentPage = <ResultsTable page={pageIndex + pageOffset}
                                              loginItems={items} postersOnly={postersOnly} isCollage/>
                            switch (pageIndex) {
                                case -2: //switch
                                    currentPage =  <div style={styles.onlyPostersSwitch}
                                        onClick={() => setPostersOnly(!postersOnly)}
                                    >
                                        <Typography sx={(postersOnly ? styles.disabled : styles.switchText)}>
                                            Full Info
                                        </Typography>
                                        <Switch
                                            checked={postersOnly}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Typography sx={(!postersOnly ? styles.disabled : styles.switchText)}>
                                            Posters Only
                                        </Typography>
                                    </div>;
                                    break;
                                case -1: //empty
                                    currentPage = <div></div>;
                                    break;
                                case -3: //pageData

                                    const iniPage = pageOffset + 1;
                                    const endPage = iniPage + Math.ceil(items.length / cubeSides);
                                    currentPage = <>
                                        {postersOnly && (endPage - iniPage > 1) &&
                                        <div style={styles.pageData}>
                                        Showing Pages
                                            <br/>
                                            {iniPage} to {endPage}
                                        </div>}
                                    </>;
                                    break;
                                default:
                                    currentPage = <div style={styles.transforms[pageIndex]}>
                                        {items.length >= (cubeSides * perPageResults) && <div style={styles.wing}></div>}
                                        {currentPage}
                                    </div>;
                                    break;
                            }

                            return <div key={rowIndex + '' + pageIndex + pageOffset + pageMapIndex}
                                style={{...styles.collagePage, ...(pageIndex === 5 && styles.centerPage)}}>
                                {currentPage}
                            </div>;
                        })}
                    </div>
                    ))}
            </div>

        </div>

    );
}
export default Collage;
