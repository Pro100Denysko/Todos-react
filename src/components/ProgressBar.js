import {Badge, InputLabel} from "@mui/material";
import styled from "styled-components";

const StyledProgressBar = styled.div`
  display: flex;
  padding: 0.2rem;
  margin: 0.5rem 0;
  flex-direction: row;
  justify-content: space-evenly;
`;

function ProgressBar(props) {

    return (
        <StyledProgressBar>
            <Badge badgeContent={props.open} color="primary">
                <InputLabel htmlFor="custom-input">Open</InputLabel>
            </Badge>
            <Badge badgeContent={props.done} color="primary">
                <InputLabel htmlFor="custom-input">Done</InputLabel>
            </Badge>
        </StyledProgressBar>
    )
}

export default ProgressBar;