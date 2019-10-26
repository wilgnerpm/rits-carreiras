import React, { useEffect, useState, useRef } from "react"; // add the hooks
import { Input, useField } from "@rocketseat/unform"; // useField hook
import {Label} from './styles'

export default function InputItem({ name, label,value, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      selected:selected,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
     <Label  >
      {label}
         <Input
        name={fieldName}
        onChange={date => setSelected(date)}
        ref={ref}
        value={value}
        {...rest}

      />
        </Label>
      {error && <span>{error}</span>}
    </>
  );
}
