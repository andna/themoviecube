import {colors} from "../components/atoms/colors";
import {ThemeOptions} from "@mui/material";

const flexEnd = 'flex-end' as 'flex-end'
const relative = 'relative' as 'relative'
const none = 'none' as 'none'
const absolute = 'absolute' as 'absolute'
const fixed = 'fixed' as 'fixed'
const borderBox = 'border-box' as 'border-box'
const center = 'center' as 'center'
const right = 'right' as 'right'
const cover = 'cover' as 'cover'
const wrap = 'wrap' as 'wrap'
const column = 'column' as 'column'
const pageWidth = 574
const collagePoster = 80
const displayFlexCentered = {
    display: 'flex',
    justifyContent: center,
    alignItems: center
}
const collagePerspective = 'perspective(105px) rotateX(170deg)'

export const exo = [
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
        theme: {
            typography: {
                fontFamily: exo,
            },
            palette: {
                primary: {
                    main: '#000000',
                    contrastText: '#ff0303',
                },
                secondary: {
                    main: '#000000',
                    contrastText: '#ff0303',
                },
                text: {
                    primary: colors.white,
                    secondary: colors.white,
                },
            },
            components:{
                MuiButton: {
                    color: colors.white
                }

            },
        } as ThemeOptions,
        canvas : {
            background: 'transparent',
            height: '100vh',
            cursor: 'grab',
            ':active':{
                cursor: 'grabbing'
            }
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
            justifyContent: center,
            marginBottom: 10,
            position: relative,
            userSelect: none,
        },
        form: {
            position: absolute,
            left: 0,
            padding: 40,
            width: `100%`,
            transition: '0.3s',
            boxSizing: borderBox,
        },
        results: {transition: '0.5s',},
    },
    results: {
        pagination:{
            ...displayFlexCentered,
            fontWeight: 600,
            marginTop: 2,
            marginBottom: 2,
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
            textAlign: center,
            margin: '50px 0'
        },
    },
    collage:{
        container:{
            padding: 20,
            width: '100%',
            height: '98%',
            color: 'white',
            ...displayFlexCentered,
        },
        smallImagesContainer:{
        },
        collageRow:{
            ...displayFlexCentered,
            width: '100%',
        },
        middleRow:{
            margin: '-22px 0'
        },
        centerPage:{
          margin: '0 -20px'
        },
        collagePage:{
          display: 'flex',
          height: collagePoster * 2,
          width: collagePoster * 2,
            flexWrap: wrap,
        },
        onlyPostersSwitch:{

        },
        switchText:{
            fontFamily: exo,
        },
        disabled: {
            opacity: 0.2,
            fontFamily: exo,
        },
        pageData:{
            ...displayFlexCentered,
            textAlign: right,
            paddingLeft: 20
        },
        transforms:[
            {}, //null
            {transform: `${collagePerspective}`}, //page1
            {transform: `rotate(90deg) ${collagePerspective}`}, //page2
            {transform: 'scaleX(-1) perspective(105px) rotateX(12deg)',}, //page3
            {transform: `rotate(-90deg) ${collagePerspective}`}, //page4
            {transform: 'scaleY(-0.88) scaleX(0.88)',}, //page5
        ],
        wing: {
            position: absolute,
            width: '100%',
            height: 1,
            bottom: -33,
            borderRight: `${collagePoster}px solid transparent`,
            borderLeft: `${collagePoster}px solid transparent`,
            borderTop: '35px solid rgba(100,100,100,0.3)'

        }
    },
    resultsTable: {
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
        movieContainerSmall:{
            height: collagePoster,
            width: collagePoster,
            minWidth: collagePoster,
            border: '1px solid #888',
            boxSizing: borderBox
        },
        numberCollage:{
            position: absolute,
            top: 'calc(50% - 10px)',
            left: 'calc(50% - 10px)',
            background: 'rgba(0,0,0,.5)',
            fontFamily: exo,
            transform: 'scaleX(-1) rotate(180deg)',
            padding: 0.5,
            borderRadius: 4,
            boxSizing: borderBox
        },
        movieContent:{
            display: 'flex',
            justifyContent: 'end',
            flexDirection: column,
            alignItems: center,
            textAlign: center,
            height: '100%',
            color: 'white',
            textShadow: '0 0 3px black',
            padding: 20,
            boxSizing: borderBox,
            fontWeight: 800,
            transition: '0.2s'
        },
        movieContentHidden:{
            opacity: 0
        },
        poster:{
            filter: 'grayscale(0.3) sepia(0.1) contrast(0.7)',
            objectFit: cover,
            height: '100%',
            width: '100%',
            boxSizing: borderBox,
            pointerEvents: none,
            position: absolute,
            zIndex: -1,
            left:0,
            top:0,
        },
        altImage: {
            transform: 'scale(0.5)',
        },
    },
    movieContent:{
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
        },
        linkHovered:{
            opacity: 1
        },
        bottomInfo:{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: center
        },
        number: {
            fontFamily: exo,
        },
    },
    search: {
        searchContainer:{
          padding: 20
        },
        examples:{
            paddingTop: 20,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, calc(50% - 7px)',
            gridGap: 15,
        },
        button: {
            width: '100%',
            fontSize: '25px',
            fontWeight: 800,
            padding: '20px 0',
            borderRadius: 3,
            margin: '40px 0 40px',
            fontFamily: exo,
            color: '#444',
            background: '#ccc',
            '&:hover':{
                background: '#fff'
            },
            "&.Mui-disabled" : {
                background: '#585858'

            },
        },
        exampleButton:{
            color: 'white',
            fontFamily: exo,
            fontSize: '25px',
            borderColor: '#848484',
            '&:hover':{
                borderColor: 'white',
                backgroundColor: 'rgba(255,255,255, 0.3)'
            },
        },
        customTextField: {
            width: '100%',
            'label + &': {
                fontSize: 3,
            },
            '& .MuiInputBase-root': {
                borderRadius: 10,
                height: 100,
                overflow: 'hidden'
            },
            '& .MuiInputLabel-root': {
                color: '#c1c1c1',
                fontFamily: exo,
            },
            '& .MuiInputLabel-shrink': {
                color: '#c1c1c1'
            },
            '& .MuiInputLabel-shrink.Mui-focused': {
                color: '#6381e2'
            },
            '& .MuiInputBase-input': {
                fontSize: '30px !important',
                fontWeight: 600,
                color: 'white'
            },
            '& .MuiFilledInput-root:before': {
                display: none
            }
        }
    },
    title: {
        realTitle:{
            fontWeight: 600,
        },
        nextButton:{
            color: 'white',
            position: fixed,
            zIndex: 100000000,
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
