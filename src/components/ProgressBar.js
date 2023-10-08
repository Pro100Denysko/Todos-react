import './ProgressBar.css'
import {Badge, InputLabel} from "@mui/material";

function ProgressBar(props) {
    return (
        <div className='progress'>
            <Badge badgeContent={props.open} color="primary">
                <InputLabel htmlFor="custom-input">Open</InputLabel>
            </Badge>
            <Badge badgeContent={props.done} color="primary">
                <InputLabel htmlFor="custom-input">Done</InputLabel>
            </Badge>
        </div>
    )
}

export default ProgressBar;