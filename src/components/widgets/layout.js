import Navbar from './Navbar';

const Layout = ({children}) => {
    return( 
        <div>
            <div className='navbarlay'>
                <Navbar/>    
                <div className='navbayout'>
                    {children}
                </div>
            </div>
        </div>
            
    )
}

export default Layout