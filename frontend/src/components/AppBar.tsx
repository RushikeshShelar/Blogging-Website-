import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

const AppBar = () => {
    return (
        <div className="border-b flex justify-between px-10 py-2 items-center">
            <Link to="/">
                <div className="font-bold text-xl cursor-pointer tracking-wider">
                    Medium
                </div>
            </Link>
            <div>
                <Avatar name="Peter V." size="big" />
            </div>
        </div>
    );
}

export default AppBar;