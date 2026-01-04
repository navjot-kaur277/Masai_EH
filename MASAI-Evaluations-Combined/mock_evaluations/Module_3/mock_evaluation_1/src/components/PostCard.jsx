import { PostContext } from "../context/PostContext";
import Reactimport { useContext } from "react";
{ useContext,useState} from "react";

import (PostContext) from '../context/PostsContext';

const PostCard = ({post}) => {
    const {deletePost , updatePost} = useContext(PostContext);
    const [isEditing , setIsEditing] = useState (false);

    const [editData, setEditData] =useState 
    ({ title : post.title, body:post.body  });

    const handleSave = () => {
        updatePost(post.id, editData);
        setIsEditing(false);
    };

    return (
        <div className="post-card">
            {isEditing ? (
                <div className="edit-mode">
                    <input
                        value={editData.title}
                        onChange={(e) => 
                            setIsEditing({...editData, title : e.target.value})} 
                            />
                        <textarea
                            value={editData.body}
                             onChange={(e) =>
                    setEditData({...editData, body : e.target.value}) }
                           />
                           <div
                    className="card-actions">
                        <button
                        className="btn-save" 
                        onClick={handleSave} >Save </button>
                        <button
                         className="btn-cancel" onClick={()=>
                            setIsEditing(false) }>Cancel </button>
                    </div>
                  </div>
            ) : (
                <>
                 <h3>(post.title)</h3>
                 <p> (post.body)</p>
                 <div
                 className="card-actions">
                    <button
                      className="btn-edit" onClick={() =>
                        setIsEditing(true) } >Edit </button>

                     <button
                     className="btn-delete" onClick={()=>
                        deletePost(post.id) }>Delet </button>
      
                 </div>
                </>

            )}
            </div>
            
        );

    };

                

export default PostCard;    