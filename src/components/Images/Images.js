import { useEffect, useState } from "react";
import { BsFillTagFill } from "react-icons/bs";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import './Images.css';
import { MdDeleteOutline } from "react-icons/md";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Card = ({image, tags, attachTags}) => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [tagDialogOpen, setTagDialogOpen] = useState(false);

    const handleTagDialogClose = (event, reason) => {
      if (reason !== 'backdropClick') {
        setSelectedTags([]);
        setTagDialogOpen(false);
      }
    };

    const tagChangeHandler = (event) => {
        setSelectedTags(event.target.value);
    };

    const handleSave = () => {
        attachTags(image, selectedTags);
        setSelectedTags([]);
        setTagDialogOpen(false);
    };

    return (
        <div className="card">
            <img alt={image.id} id={image.id} src={image.download_url} />
            <div className="row">
                <p className="title">{image.author}</p>
                
                <IconButton id="demo-positioned-button"
                    className="tag-icon"
                    onClick={() => setTagDialogOpen(true)}><BsFillTagFill/></IconButton>
                
                <Dialog disableEscapeKeyDown open={tagDialogOpen} onClose={handleTagDialogClose}>
                    <DialogTitle>Set image tags</DialogTitle>
                    <DialogContent>

                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel>Attach Tags</InputLabel>
                        <Select multiple value={selectedTags}
                            onChange={tagChangeHandler}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.map(tid => tags.find(el => el.id === tid).name).join(', ')}
                            MenuProps={MenuProps}
                        >
                        {tags.map((tag) => (
                            <MenuItem key={tag.id} value={tag.id}>
                                <Checkbox checked={selectedTags.indexOf(tag.id) > -1} />
                                <ListItemText primary={tag.name} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleTagDialogClose}>Cancel</Button>
                        <Button onClick={handleSave}>Save</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};

const TagBox = ({tag, images, untag}) => {
    
    return (
        <div className="tag-box">
            <div className="title" style={{'background': tag.color}}>{tag.name}</div>
            {
                images.filter(el => (el.tags || []).includes(tag.id)).map((image, idx) => {
                    return (
                        <div className="row" key={idx}>
                            <img alt={image.id} src={image.download_url} />
                            <p>{image.author}</p>
                            <IconButton className="delete-icon" onClick={() => untag(image, tag)}>
                                <MdDeleteOutline/>
                            </IconButton>
                        </div>
                    )
                })
            }
        </div>
    )
};

export const Images = ({ tags }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://picsum.photos/v2/list?limit=12')
        .then(res => res.json())
        .then(list => {
            setImages(list);
        }).catch(err => {
            console.error(err);
        })
    }, []);

    const attachTags = (image, tags) => {
        image.tags = tags;

        setImages([
            ...images
        ]);
    };

    const untag = (image, tag) => {
        image.tags = image.tags.filter(el => el !== tag.id);
        setImages([...images]);
    };

    return (
        <div className="images-wrapper">
            <p className="unassignedtags">Unassigned Images</p>
            <div className="images-container">
                {
                    images.filter(el => !el.tags?.length).map((image, idx) => <Card key={idx} image={image} tags={tags} attachTags={attachTags}/>)
                }
            </div>

            <div className="tag-boxes-container">
            {
                tags.map(tag => <TagBox tag={tag} images={images} untag={untag}/>)
            }
            </div>
        </div>
    );
};