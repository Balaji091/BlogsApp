import BlogItem from "../blogItem";
import {Component} from "react";


class BlogList extends Component{
    state={blogList:[],isLoading:true};
    getDetails=async()=>{ 
        const response=await fetch("https://apis.ccbp.in/blogs");
        const data=await response.json();
        this.setState({blogList:data ,isLoading:false}) 
   }
   componentDidMount()
   {
       this.getDetails();
   }
    render(){
        const {blogList,isLoading}=this.state;
        
        return(
            isLoading?(<h1>Loading.................</h1> )
          :(
            blogList.map(eachItem=>(<BlogItem key={eachItem.id} details={eachItem}/>)))
        )
    }
}
export default BlogList;