import styles from "./PostDetail.module.css"

import { Link } from "react-router-dom"

const PostDetail = ({post}) => {
    return <div className={styles.post_detail}>
        <img src={post.image} alt={post.title} width="600" height="400" />
        <h2>{post.title}</h2>
        <p className={styles.createdby}>{post.createdBy}</p>
        <div className={styles.tags}>
            {post.tagsArray.map((tag) => (
                <p key={tag}><span>#</span>{tag}</p>
            ))}
        </div>
        <Link to={`/posts/${post.id}`} className="btn btn-outline">Ver mais</Link>
    </div>
}

export default PostDetail