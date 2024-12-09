import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import'./index.css';
// Higher-order component to inject route parameters into a class component
const withRouter = (WrappedComponent) => (props) => {
    const params = useParams();
    return <WrappedComponent {...props} params={params} />;
};

class BlogItemDetails extends Component {
    state = { blogDetails: {} };

    componentDidMount() {
        this.getBlogDetails();
    }

    getBlogDetails = async () => {
        const { id } = this.props.params; // Access route parameters via HOC
        try {
            const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
            const data = await response.json();
            this.setState({ blogDetails: data });
        } catch (error) {
            console.error("Error fetching blog details:", error);
        }
    };

    render() {
        const { blogDetails } = this.state;
        const { image_url, topic, title, avatar_url, author } = blogDetails;

        return (
            <div className="blog-item-details">
            <img id="topic-img" src={image_url} alt="Topic" />
            <p id="topic">{topic}</p>
            <h3 id="title">{title}</h3>
            <img src={avatar_url} id="avatar-img" alt="Author Avatar" />
            <p id="author">{author}</p>
        </div>
        )        
    }
}
export default withRouter(BlogItemDetails);
