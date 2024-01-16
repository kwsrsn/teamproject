import Navbar from './Navbar';

const Layout = ({children}) => {
    return(
        <div >
            
            <div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Navbar/>    
                    <div>
                        {children}
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Layout