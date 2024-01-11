import Navbar from './Navbar';

const Layout = ({children}) => {
    return(
        <div >
            
            <div>
                <div >
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