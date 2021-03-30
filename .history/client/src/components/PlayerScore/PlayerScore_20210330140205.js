import React from "react";
import {Box, Heading} from 'grommet';
import "./style.css";

function PlayerScore(props) {

  return (
    <div className="text-center" >
        <Box direction="column"  gap="medium" width="255px">
            <Heading margin="medium" >{props.player[props.index].score}</Heading>
            <div class="input-field" >
            <TextInput placeholder="Name" margin="medium" onChange={event => {
              props.updateName(event.target.value, props.index)
            }}/>
            </div>
        </Box>
    </div>
  );
}

export default PlayerScore;