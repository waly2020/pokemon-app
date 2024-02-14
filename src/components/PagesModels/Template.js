const PageTemplate = ({topBar = null,className = "",classContent = "",style,shadow = false,children}) => {
    return (
        <>
            <main style={style} className={`page ${className}`}>
                <div className="background-page">
                </div>
                {topBar ? <div className={`to-bar ${shadow ? 'shadow' : ''}`}>
                    <div className="content-top-bar">
                        {topBar}
                    </div>
                </div> : null}
                <div className={`content-page ${classContent}`}>
                    {children}
                </div>
            </main>
        </>
    );
}

export default PageTemplate;