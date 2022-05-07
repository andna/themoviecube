import {colors} from "../components/atoms/colors";

const flexEnd = 'flex-end' as 'flex-end'
const relative = 'relative' as 'relative'
const none = 'none' as 'none'
const absolute = 'absolute' as 'absolute'
const borderBox = 'border-box' as 'border-box'
const center = 'center' as 'center'
const capitalize = 'capitalize' as 'capitalize'

export const stylesUtils = {
    app: {
        canvas : {
            background: 'transparent',
            height: '100vh',
            cursor: 'grab',
            '&:active':{
                cursor: 'grabbing'
            }
        },
        searchTerm: {
            position: 'fixed',
        },
        grid: {
            display: 'grid',
            transition: '2s'
        },
        gridPortrait: {
            display: 'block',
            gridTemplateRows: 'none'
        },
        gridLandscape: {
            gridTemplateColumns: '120px calc(100% - 120px)'
        }
    },
    box: {
        container: {display: 'flex',
            width: 400,
            height: 400,
            alignItems: flexEnd,
            marginLeft: 40,
            marginBottom: 24,
            position: relative,
            userSelect: none,
        },
        form: {
            position: absolute,
            left: 0,
            paddingRight: 40,
            width: `100%`,
            transition: '0.3s',
            boxSizing: borderBox,
        },
        results: {transition: '0.5s',},
    },
    results: {
        pagination:{
            fontWeight: 600,
            marginTop: 3,
            "& .Mui-disabled" : {
                opacity: '0 !important'
            },
            "& .MuiPaginationItem-text:not(.Mui-selected):not(.MuiPaginationItem-previousNext):not(:hover)":{
               opacity: 0.3
            }
        },
        manual:{
            textAlign: center
        },
    },
    resultsTable: {
        cell: {
            padding: '0 8px 0 0',
            fontWeight: 600,
            maxWidth: 120,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        number:{
            fontFamily: 'monospace',
            fontWeight: 300
        },
        header: {
            textTransform: capitalize,
            cursor: 'pointer',
            padding: 0.5,
            "&:hover":{
                color: 'skyblue'
            }
        },
        sorterArrow:{
            fontSize: '16px',
            paddingLeft: 1
        },
        avatar: {
            width: 25,
            height: 25,
            borderRadius: 4,
            top: 2,
            position: relative,
            marginLeft: 5
        },
        a: {
            textDecoration: 'none'
        },
        tooltip: {
            zIndex: 100000000,
            maxWidth: '200px'
        },
        untouchable: {
            pointerEvents: none
        }
    },
    search: {
        field: {
            width: '100%',
            fontSize: '25px',
        },
        button: {
            width: '100%',
            fontSize: '25px',
            fontWeight: 600,
            padding: '20px 0',
            borderRadius: 6,
            margin: '40px 0 90px'
        },
        customTextField: {
            width: '100%',
            'label + &': {
                fontSize: 3,
            },
            '& .MuiInputBase-root': {
                borderRadius: '10px 10px 0 0'
            },
            '& .MuiInputBase-input': {
                fontSize: '30px !important',
                fontWeight: 600,
            },
        }
    },
    title: {
        realTitle:{
            fontWeight: 600,
        },
        titleContainer: {
            display: 'flex',
            alignItems: 'center',
            padding: '1vw 5vw 10vw',
            position: relative,
            zIndex: 100000000,
            color: 'white'
        },
        titleContainerMobile: {
            position: absolute,
            top: '2em',
            left: '1em'
        },
        titleTextContainerMobile: {
            display: 'grid',
            gridGap: 14,
            gridTemplateColumns: '35px auto auto',
            alignItems: center,
            justifyContent: center,
            textAlign: center
        },
        b: {
            fontWeight: 600,
            fontFamily: 'monospace'
        },
        chip:{
            color: 'white',
            marginLeft: 1,
            '& .MuiSvgIcon-root':{
                color: 'white'
            }
        },
        chipDesktop: {
            fontSize: 35,
            height: 60,
            marginTop: 2,
            marginLeft: 0,
            padding: 3,
            border: '2px solid',
        },
        logo:{
            width: '7vh',
            display: 'inline',
            maxWidth: '100%'
        }
    },
    message: {
        loading: {
            margin: '142px 0',
            display: 'block',
            color: '#3ac5e3'
        },
        needsLoad: {
          marginBottom: 100
        },
        reached1000: {
            textAlign: center,
            color: colors.red,
            margin: '96px 0',
            display: 'block'
        },
        errorMessage: {
            position: absolute,
            color: colors.red,
            top: '32px',
            width: '80%',
            textAlign: 'center',
            left: '6%',
        }
    }
}
