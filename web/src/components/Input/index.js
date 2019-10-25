import React, { useEffect, useState, useRef } from "react"; // add the hooks
import { Input, useField } from "@rocketseat/unform"; // useField hook
import {Label} from './styles'

export default function InputItem({ name, label, ...rest }) {
   const ref = useRef(null); // for ref manipulation purposes
  const { fieldName, registerField, defaultValue, error } = useField(name); // the name of the prop in form object is used here
  const [selectedField, setSelectedField] = useState(defaultValue); // the state of our datepicker component
  useEffect(() => {
    registerField({ // here, we're registering the field in the whole form
      name: fieldName,
      ref: ref.current,
      path: "props.selected", // this is the path to selected date in ReactDatepicker (wich is the selected prop)
    });
  }, [fieldName]);

  return (
    <>
     <Label  >
      {label}
         <Input
        name={fieldName}
        onChange={date => setSelectedField(date)}
        ref={ref}
          error={true}
        {...rest}

      />
        </Label>
      {error && <span>{error}</span>}
    </>
  );
}
