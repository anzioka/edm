import React, { Component } from 'react';
import { NEUTRALS, WHITE, PURPLES, GREENS} from '../../core/style/Colors';
import styled from 'styled-components';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  inputStyle: {
    ':focus': {
          outline: 'none !important',
          boxShadow: 'none !important',
          border: '1px solid ' + GREENS[1],
    },
    color: '#135',
    borderColor: GREENS[1],
  }
})
export default class SearchBar extends Component {
  render() {
    const {
      onChange,
      text
    } = this.props;

    return (
      <div className="form-group">
        <input
          placeholder="Search"
          className={["form-control", css(styles.inputStyle)].join(' ')}
          value = {text}
          onChange = {(e) => onChange(e.target.value)} />
      </div>
    )
  }
}
