import './index.css';
import {Link} from 'react-router-dom';
function BlogItem(props){
    const{details}=props;
    const{title,image_url,avatar_url,author,topic,id}=details;
    return(
        <Link to={`/blogs/${id}`} >
        <div className="blog-item">
            <img  id="topic-img"src={image_url}/>
            <p id="topic">{topic}</p>
            <h3 id="title">{title}</h3>
            <img src={avatar_url} id="avatar-img"/>
            <p id="author">{author}</p>
        </div>
        </Link>
    )
}
export default BlogItem;