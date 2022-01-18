import { Fragment } from "react";
import Navbar from "src/components/navbar";
// import Footer from "src/components/commons/footer";

const MainLayout = props => {

    return(
        <Fragment>            
            <Navbar />               
            {props.children}
            {/* <Footer /> */}
        </Fragment>
    );
}

export default MainLayout;