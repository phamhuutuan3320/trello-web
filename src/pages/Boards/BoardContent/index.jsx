import Box from '@mui/material/Box'


function BoardContent() {
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            width: "100%",
            display: "flex",
            alignItems: "center",
            height: (theme) => `calc(100% - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`
        }}>
            Board content
        </Box>
    )
}

export default BoardContent;