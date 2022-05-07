import * as React from "react";
import {stylesUtils} from "../../utils/styles";
import {Button, Typography} from "@mui/material";
import {links, maximumItems} from "../../utils/services";

const { message: styles } = stylesUtils;

type Props = {
    type: "need_load" | "limit" | "loading" | "error",
    doAction?: () => void,
    errorMessage?: string,
    extraInfo?: any
}

const Message: React.FC<Props> = ( {    type,
                                        doAction,
                                        errorMessage,
                                        extraInfo
                                   } ) => {

    let children;

    switch(type){
        case "need_load":
            children = <div style={styles.needsLoad}>
                <Typography variant="subtitle2">
                    Navigate to this page through pagination
                    <br />
                    or load it manually: <br /> <br />
                </Typography>
                <Button color="primary" variant="outlined" disableElevation
                        onClick={doAction}>
                    Load Page {extraInfo}
                </Button>
            </div>
            break;
        case "limit":
            children =  <Typography sx={styles.reached1000} variant="caption">
                <b>This is the last page you can navigate to,</b> because you have
                <br />
                reached the limit number of results ({maximumItems})
                for Github's API.
                <br />
                <br />
                Read more about this {' '}
                <a href={links.limit1000} target="_blank" rel="noreferrer">here.</a>
            </Typography>
            break;
        case "loading":
            children = <Typography variant="caption" sx={styles.loading}>Loading...</Typography>
            break;
        case "error":
            const isApiExceeded = errorMessage.includes("API rate limit exceeded for");
            if(isApiExceeded){
                //setInterval(()=> {
                //}, 10000);
            }
            children = <Typography variant="caption" sx={styles.errorMessage}>
                {isApiExceeded ?
                    <>
                        You have exceeded Github's limit of request per minute.
                        <br />
                        Please <b>wait a few seconds and then try again.</b>
                        <br />
                        Read more about this {' '}
                        <a href={links.limitPerMinute} target="_blank" rel="noreferrer">here.</a>
                    </>
                    :
                    errorMessage}
            </Typography>
            break;
    }

    return <div>
        {children}
    </div>

}
export default Message;
