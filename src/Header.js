import { Link } from "react-router-dom";

const Header = (props)=>{
    return (
        <>
            <Link to="./Home">Home</Link> &nbsp;&nbsp;
            <Link to="./About">About</Link> &nbsp;&nbsp;
            <Link to="./Contact">Contact</Link> &nbsp;&nbsp;
            <Link to="./AllFaculty">Faculty</Link>
        </>
    );
}

export {Header};