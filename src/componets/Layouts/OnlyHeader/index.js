
import Header from "../DefaultLayout/Header";


function OnlyHeader({children}) {
    return <div>
        <Header />
        <div className='container'>
            {children}
        </div>
    </div>;
}

export default OnlyHeader;