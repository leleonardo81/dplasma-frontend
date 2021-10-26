import React from "react";
import MuiTextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';

const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#ED7B84',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#ED7B84',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ED7B84',
      },
    },
    margin: '0.5rem'
  },
})(MuiTextField);

const TextField = (props) => 
  <CustomTextField 
    variant="outlined"
    size="small"
    {...props}
  />;

export default TextField;