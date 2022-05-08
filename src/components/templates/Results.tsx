import * as React from "react";
import {maximumPage} from "../../utils/services";
import {Pagination} from "@mui/material";
import ResultsTable from "../organisms/ResultsTable";
import {stylesUtils} from "../../utils/styles";
import Message from "../organisms/Message";
import {Movie} from "../../types/MovieData";

const { results: styles } = stylesUtils;

type Props = {
    page: number,
    loginItems: Movie[],
    chooseRotateTo: (index: number) => void,
    getPageInfo: (index: number) => void,
    pageQuantity: number,
    isLoading: boolean,
    postersOnly: boolean,

}


const Results: React.FC<Props> = ( { page, pageQuantity, loginItems, chooseRotateTo,
    postersOnly,
                                       getPageInfo,
                                        isLoading }) => {

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        chooseRotateTo(((value > maximumPage) ? maximumPage : value) - 1)
    };


    return <>

        {loginItems && loginItems.length > 0
            ?
            <>
                <ResultsTable page={page} loginItems={loginItems} postersOnly={postersOnly}/>
                {
                 page >= maximumPage &&
                   <Message type="limit" />
                }
            </>
            :
            <div style={styles.manual}>
                {isLoading ?
                    <Message type="loading" />
                    :
                    <Message type="need_load"
                             extraInfo={page}
                             doAction={() => getPageInfo(page - 1)}/>
                }
            </div>

        }
        {!postersOnly &&
            <Pagination count={pageQuantity}
                        boundaryCount={2}
                        page={page}
                        sx={styles.pagination}
                        onChange={handleChange}
                        hideNextButton={page >= maximumPage}
            />
        }

    </>

}
export default Results;
