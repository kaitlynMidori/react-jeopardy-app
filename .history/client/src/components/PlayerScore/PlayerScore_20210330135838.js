import React from "react";
import {Box, TextInput, Heading} from 'grommet';
import "./style.css";

function PlayerScore(props) {

  return (
    <div className="text-center" tabIndex="-1">
        <Box direction="column" tabIndex="-1" gap="medium" width="255px">
            <Heading margin="medium" tabIndex="-1">{props.player[props.index].score}</Heading>
            <div class="input-field" >
            <TextInput placeholder="Name" tabIndex="-1" margin="medium" onChange={event => {
              props.updateName(event.target.value, props.index)
            }}/>
            </div>
        </Box>
    </div>
  );
}

export default PlayerScore;