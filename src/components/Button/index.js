import React from "react";
import MuiButton from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    margin: '0.5rem',
    borderRadius: '0.75rem',
    fontFamily: "'Quicksand', 'Ubuntu', sans-serif",
    fontWeight: 600
  },
})(MuiButton);

const Button = props => (
  <StyledButton 
    color="secondary"
    variant="contained"
    {...props}
  />
)

export default Button;