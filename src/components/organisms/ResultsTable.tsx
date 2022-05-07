import * as React from "react";
import {GithubLogin} from "../../types/GithubData";
import {maximumItems, perPageResults} from "../../utils/services";
import {useEffect, useState} from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip, TooltipProps
} from "@mui/material";
import {styled} from "@mui/material/styles";
import {stylesUtils} from "../../utils/styles";

const { resultsTable: styles } = stylesUtils;

const CssTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({ }));

type Props = {
    page: number,
    loginItems: GithubLogin[],
}


const ResultsTable: React.FC<Props> = ( { page, loginItems  }) => {

    const headers = [
        { id: 'avatar',     label: ' ', },
        { id: 'login',      tooltipText: 'The user\'s login name'},
        { id: 'type',       tooltipText: 'User or Organization'},
        { id: 'result_num', tooltipText: 'Order decided by Github considering the "best match" for your search.', label: 'Result #',},
        { id: 'url',        label: ' '},
    ]

    const [activeSort, setActiveSort] = useState<string>(headers[1].id);
    const [isDesc, setIsDesc] = useState<boolean>(true);
    const [loginItemsSorted, setLoginItemsSorted] = useState<GithubLogin[]>(loginItems);
    const [isAddedResultNum, setIsAddedResultNum] = useState<boolean>(false);

    useEffect(()=> {
            let sorted = loginItems;
            if(!isAddedResultNum){
                setIsAddedResultNum(true);
                sorted.map((item, i) => {
                    const result_num = (i + 1 + ((page  - 1 ) * perPageResults))
                    item.hide_cause_of_api_limit = result_num > maximumItems;
                    item.result_num = result_num;
                    return item;
                });
            }

            sorted = sorted.sort((a,b) => {
            let returnSort = 0;
            switch (activeSort){
                case 'login':
                    returnSort = isDesc ? a.login.localeCompare(b.login) : b.login.localeCompare(a.login)
                    break;
                case 'type':
                    returnSort = isDesc ? a.type.localeCompare(b.type) : b.type.localeCompare(a.type)
                    break;
                case 'result_num':
                    returnSort = isDesc ? a.result_num - b.result_num : b.result_num - a.result_num;
                    break;
            }
            return returnSort;
        })
        setLoginItemsSorted(sorted)
    }, [activeSort, isDesc])

    const startSort = (id : string) => {
        if (id === activeSort) {
            setIsDesc(!isDesc);
        } else {
            setActiveSort(id);
        }
    }

    return <TableContainer component={Paper}>
                <Table sx={{ width: 360 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {headers.map(header => (
                                <CssTooltip title={header.tooltipText || " "} key={header.id} placement="top"
                                            sx={styles.tooltip}>
                                    <TableCell

                                        onClick={() => startSort(header.id)}
                                        sx={{...styles.header,
                                            ...(!header.tooltipText && styles.untouchable)}}>
                                        {header.label || header.id}
                                        <span style={styles.sorterArrow}> {header.id === activeSort && (isDesc ? '⬇' : '⬆')}</span>
                                    </TableCell>
                                </CssTooltip>

                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loginItemsSorted.map((user, i) => {
                            return !user.hide_cause_of_api_limit &&
                                <TableRow
                                    key={user.login}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={styles.cell}>
                                        <img src={user.avatar_url} alt={user.login} style={styles.avatar}/>
                                    </TableCell>
                                    <TableCell sx={styles.cell}>
                                        {user.login}
                                    </TableCell>
                                    <TableCell sx={styles.cell} align="center">
                                        <small>{user.type.replace("Organization","Org")}</small>
                                    </TableCell>
                                    <TableCell align="center"  sx={{...styles.cell, ...styles.number}}>
                                        <small><small> {user.result_num}</small></small>
                                    </TableCell>
                                    <TableCell sx={styles.cell} align="center">
                                        <a href={user.html_url} target="_blank" rel="noreferrer" style={styles.a}>↗</a>
                                    </TableCell>
                                </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

}
export default ResultsTable;
