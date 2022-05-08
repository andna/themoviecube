import * as React from "react";
import {
    Button,
    Chip,
    Typography
} from "@mui/material";
import {stylesUtils} from "../../utils/styles";
// @ts-ignore
import logoImg from "../../logo.svg"

const { title: styles } = stylesUtils;

type Props = {
    closeResults: () => {},
    totalCount: number,
    foundTerm: string,
    isMobile: boolean,
    postersOnly: boolean,
    navigateNextCube: () => void
}


const title = 'Github Login Search'

const Title: React.FC<Props> = ( { closeResults, totalCount, foundTerm, isMobile, postersOnly, navigateNextCube  }) => {

    const logo = <img src={logoImg} alt={title} style={styles.logo}/>

    return <>

        <div style={{...styles.titleContainer, ...(isMobile && styles.titleContainerMobile)}}>
        {foundTerm && totalCount >= 0 ?
            <div style={isMobile ? styles.titleTextContainerMobile : {display: 'block'}}>
                {logo}
                <Typography variant={isMobile ? 'body1' : 'h2'}>
                    {!isMobile && 'Found'}
                    <b style={styles.b}> {totalCount.toLocaleString()} </b>
                    result{totalCount !== 1 ? 's':''} for
                </Typography>
                <Chip label={foundTerm}
                      sx={{...styles.chip, ...(!isMobile && styles.chipDesktop)}}
                      variant="outlined"
                      color="default"
                      onDelete={closeResults} />
            </div>
            :
            <div>
                <Typography sx={{...styles.realTitle, ...(isMobile && styles.titleTextContainerMobile)}}
                            variant={isMobile ? 'h6' : 'h2'}>
                    {logo}
                    Movie Search Cube
                </Typography>
            </div>
        }
    </div>

        {postersOnly &&

        <Button variant="outlined"
                color="inherit"
                onClick={navigateNextCube}
                sx={{...styles.nextButton, ...(isMobile && styles.nextButtonMobile)}}>
            Next cube
        </Button>
        }

    </>

}
export default Title;
