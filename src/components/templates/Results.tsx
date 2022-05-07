import * as React from "react";
import {GithubLogin} from "../../types/GithubData";
import {maximumPage} from "../../utils/services";
import {Pagination} from "@mui/material";
import ResultsTable from "../organisms/ResultsTable";
import {stylesUtils} from "../../utils/styles";
import Message from "../organisms/Message";

const { results: styles } = stylesUtils;

type Props = {
    page: number,
    loginItems: GithubLogin[],
    chooseRotateTo: (index: number) => void,
    getPageInfo: (index: number) => void,
    pageQuantity: number,
    isLoading: boolean,
}


const Results: React.FC<Props> = ( { page, pageQuantity, loginItems, chooseRotateTo,
                                       getPageInfo,
                                        isLoading }) => {

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        chooseRotateTo(((value > maximumPage) ? maximumPage : value) - 1)
    };


    return <>

        {loginItems && loginItems.length > 0
            ?
            <>
                <ResultsTable page={page} loginItems={loginItems}/>
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
        <Pagination count={pageQuantity}
                    color="primary"
                    page={page}
                    sx={styles.pagination}
                    onChange={handleChange}
                    hideNextButton={page >= maximumPage}
        />
    </>

}
export default Results;
