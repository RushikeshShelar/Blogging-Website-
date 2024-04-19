import { useParams } from "react-router-dom";
import FullBlog from "./FullBlog";
import { useBlog } from "../hooks";

const Blog = () => {
    const { id } = useParams()

    const { loading, post } = useBlog({ id: Number(id || "1") });

    if (loading) {
        return (
            <div>
                Loading....
            </div>
        )
    }

    if (!post) {
        return null;
    }

    return (
        <div>
            <FullBlog blog={post} />
        </div>
    );
}

export default Blog;