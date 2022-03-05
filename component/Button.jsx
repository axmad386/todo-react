const Button = ({color, children})=>{
    return (
        <button style={
            {
                backgroundColor: color,
                border: 'none',
                marginLeft: '10px',
                marginRight: '10px'
            }
        }>
            {children}
        </button>
    )
}

export default Button