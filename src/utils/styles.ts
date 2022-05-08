import {colors} from "../components/atoms/colors";

const flexEnd = 'flex-end' as 'flex-end'
const relative = 'relative' as 'relative'
const none = 'none' as 'none'
const absolute = 'absolute' as 'absolute'
const fixed = 'fixed' as 'fixed'
const borderBox = 'border-box' as 'border-box'
const center = 'center' as 'center'
const capitalize = 'capitalize' as 'capitalize'
const pageWidth = 574

const exo = [
    'Exo',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
].join(',')

export const stylesUtils = {
    app: {
        theme:{
            typography: {
                fontFamily: exo,
            },
        },
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
            width: pageWidth,
            height: pageWidth,
            alignItems: flexEnd,
            marginBottom: 10,
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
            display: 'flex',
            justifyContent: center,
            fontWeight: 600,
            marginTop: 3,
            "& .Mui-disabled" : {
                opacity: '0 !important'
            },
            "& .Mui-selected" : {
                background: 'white !important',
                color: 'black !important'
            },
            "& .MuiPaginationItem-text":{
                fontFamily: exo,
                color: 'white'
            },
            "& .MuiPaginationItem-text:not(.Mui-selected):not(.MuiPaginationItem-previousNext):not(:hover)":{
                opacity: 0.2
            },
        },
        manual:{
            textAlign: center
        },
    },
    collage:{
        container:{
            padding: 20,
            color: 'white'
        },
        onlyPostersSwitch:{
            display: 'flex',
            alignItems: center
        },
        disabled: {
            opacity: 0.2
        }
    },
    resultsTable: {
        moviesWrapper:{
            /*display: 'flex',
            flexDirection: 'column' as 'column',
            flexWrap: 'wrap' as  'wrap',
            height: 400*/
        },
        movieContainer:{
            display: 'inline-block',
            position: relative,
            height:  pageWidth / 2 - 32,
            minWidth: pageWidth / 2,
            maxWidth:  pageWidth / 2,
            marginBottom: -10,
            overflow: 'hidden',
            transition: '0.2s'
        },
        movieContainerBig:{
            height:  pageWidth / 2,
        },
        number: {
            fontFamily: exo,
        },
        title: {
            fontFamily: exo,
            background: 'radial-gradient(rgba(50,50,50, 0.8), transparent 90%)',
            borderRadius: 2,
            fontWeight: 800,
            lineHeight: '1.5rem',
            padding: '0 20px'
        },
        year: {
            fontFamily: exo,
        },
        link:{
          textDecoration: none,
          opacity: 0.5,
          '&:hover':{
              opacity: 1
          }
        },
        bottomInfo:{
          width: '100%',
          display: 'flex',
            justifyContent: 'space-between',
            alignItems: center
        },
        reverseRow:{
            flexDirection: 'row-reverse' as 'row-reverse'
        },
        movieContent:{
            display: 'flex',
            justifyContent: 'end',
            flexDirection: 'column' as 'column',
            alignItems: center,
            textAlign: center,
            height: '100%',
            color: 'white',
            textShadow: '0 0 3px black',
            padding: 20,
            boxSizing: 'border-box' as 'border-box',
            fontWeight: 800,
            transition: '0.2s'
        },
        movieContentHidden:{
            opacity: 0
        },
        poster:{
            filter: 'grayscale(0.3) sepia(0.1) contrast(0.7)',
            objectFit: 'cover' as 'cover',
            height: '100%',
            width: '100%',
            boxSizing: 'border-box' as 'border-box',
            pointerEvents: none,
            position: absolute,
            zIndex: -1,
            left:0,
            top:0,
            "&:hover":{
                position: absolute,
                right: 0,
                bottom: 60,
                zIndex: 1,
                transition: '0.2s',
                width: 360,
                height: 220,
            }
        },
        altImage: {
            transform: 'scale(0.5)',
            transformOrigin: '50% 5px'
        },
        cell: {
            padding: '0 8px 0 0',
            fontWeight: 600,
            maxWidth: 120,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
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
        examples:{
            padding: 20,
          display: 'grid',
            gridTemplateColumns: 'repeat(4, 100px)',
          gridGap: '15px',
        },
        field: {
            width: '100%',
            fontSize: '25px',
        },
        button: {
            width: '100%',
            fontSize: '25px',
            fontWeight: 800,
            padding: '20px 0',
            borderRadius: 6,
            margin: '40px 0 90px',
            fontFamily: exo,
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
        nextButton:{
            color: 'white',
            position: fixed,
            zIndex: 1000000,
            bottom: '50vh',
            right: 100,
        },
        nextButtonMobile:{
            bottom: '5vh',
            right: 'calc(50% - 50px)'
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
            position: fixed,
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
