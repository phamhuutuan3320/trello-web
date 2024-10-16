import Box from '@mui/material/Box'

function BoardBar() {
    return (
        <Box sx={{
            backgroundColor: 'primary.light',
            width: '100%',
            height: (theme) => theme.trello.boardBarHeight,
            display: 'flex',
            alignItems: 'center'
        }}>
            Board bar
        </Box>
    )
}

export default BoardBar