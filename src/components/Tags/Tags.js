import { useState } from "react";
import { MdDeleteOutline } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import './Tags.css';


const Tag = ({ tag, onDelete }) => {
    const [editTag, setEditTag] = useState(tag)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="tags">
        <div className="tag-item" style={{'background': tag.color}}>
            {isOpen ? <input className="editTagName" onBlur={(e) => setEditTag({...editTag, name: e.target.value})}></input> : <p>{editTag.name}</p>}
            <div>
            <MdDeleteOutline onClick={onDelete} className="deleteIcon"/>
            <FiEdit className="updateIcon" onClick={() => setIsOpen(!isOpen)}/></div>
        </div>
        </div>
    );
};

export const Tags = ({ tags, setTags }) => {

    const [newTag, setNewTag] = useState('');
     
      

    const deleteHandler = (tag) => {
        setTags(tags.filter(el => el !== tag));
    };
    
    const saveTagHandler = () => {
        setTags([
            ...tags,
            {
                name: newTag,
                id: tags.length,
                color: '#b0a48a'
            }
        ]);
    };

    return (
        <div className="tags-container">
            <h1 className="Tagsbox">Tags</h1>
            <input type="text" value={newTag} onChange={e => setNewTag(e.target.value)} placeholder="Add New Tag..." className="tagsinput"/>
            <button onClick={saveTagHandler} className="saveButton">Save</button>

            <div className="availabletags">
                <p>Available tags</p>
                {
                    tags.map((tag, idx) => <Tag key={idx} tag={tag} 
                    onDelete={() => deleteHandler(tag)}/>)
                }

            </div>
        </div>
    );
};