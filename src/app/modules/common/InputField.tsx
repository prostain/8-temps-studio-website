import { TextField } from "@mui/material";
import { FieldConfig, useField } from "formik";

interface Props extends FieldConfig {
    label: string
}

const InputField = ({label, ...props}:Props) => {
    const [field, meta] = useField(props);

    return <TextField fullWidth label={label} {...field} {...props} 
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && Boolean(meta.error)}/>

}

export default InputField