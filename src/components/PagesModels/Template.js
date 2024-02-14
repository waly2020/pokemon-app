/**
 * 
 * @param {{topBar : React.JSX.Element,style : React.CSSProperties,shadow : boolean,children : React.JSX.Element | [React.JSX.Element]}} param0 
 * @returns 
 */
const PageTemplate = ({topBar = null,style,shadow = false,children}) => {
    return (
        <>
            <main style={style} className="page">
                <div className="background-page">
                </div>
                {topBar ? <div className={`to-bar ${shadow ? 'shadow' : ''}`}>
                    <div className="content-top-bar">
                        {topBar}
                    </div>
                </div> : null}
                <div className="content-page">
                    {children}
                </div>
            </main>
        </>
    );
}

export default PageTemplate;