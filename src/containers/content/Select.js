import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';
import { NEUTRALS, WHITE, PURPLES, GREENS} from '../../core/style/Colors';

const styles = StyleSheet.create({
  inputStyle: {
    ':focus': {
          outline: 'none !important',
          boxShadow: 'none !important',
          border: '1px solid ' + GREENS[1],
    },
    flexGrow: 0,
    color: '#135',
    borderColor: GREENS[1],
  }
});

const Select = ({value, onChange, options}) => (
  <select
    className={["form-control", css(styles.inputStyle)].join(' ')}
    value={value}
    onChange = {(event) => onChange(event.target.value)} >
    {
      options.map((item, index) => (
        <option
          key={index}
          value={item}
          >
          {item}
        </option>
      ))
    }
  </select>
);

export default Select;
