import * as React from "react";
import {useState} from "react";
import {Movie} from "../../types/MovieData";
import {links} from "../../utils/services";
import {stylesUtils} from "../../utils/styles";
import {Button, Switch, Typography} from "@mui/material";

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
             <div style={styles.onlyPostersSwitch}>
                <Typography sx={(postersOnly && styles.disabled)}>
                    Full Info
                </Typography>
                <Switch
                    checked={postersOnly}
                    onChange={(event) => setPostersOnly(event.target.checked)}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <Typography sx={(!postersOnly && styles.disabled)}>
                    Posters Only
                </Typography>
            </div>

        </div>

    );
}
export default Collage;
