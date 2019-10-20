import React, { Component } from "react";
import PropTypes from "prop-types";
import { NEUTRALS, WHITE, PURPLES, GREENS} from '../../core/style/Colors';

const styles = {
  header_title : {
    color: NEUTRALS[0],
    fontSize: '20px',
    fontWeight: 400,
  },
  header_subtitle: {
    color: NEUTRALS[1],
    fontSize: '15px',
    fontWeight:300
  },
  header: {
    borderBottom: '1px solid ' + NEUTRALS[4],
    marginBottom: '15px'
  }
}

const CardHeader = ({title, subtitle}) => (
  <div style = {styles.header}>
    <h3 style = {styles.header_title}> {title}</h3>
    {subtitle !== "" &&
      <h6 style={styles.header_subtitle}> {subtitle} </h6>
    }
  </div>
);

CardHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

CardHeader.defaultProps = {
  title: "",
  subtitle: ""
};
export default CardHeader;
