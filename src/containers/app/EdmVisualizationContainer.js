import React, { Component } from 'react';
import {
  EntityNumPropertyTypes,
  CategoriesCount,
  PropertyTypeDistribution,
  PropertyDataTypes,
  PropertyTypeProperties
} from '../content';

const styles = {
  row : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '40px',
    width: '100%'
  }
}
class EdmVisualizationContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <CategoriesCount />
        <div style = {styles.row}>
          <PropertyTypeDistribution />
          <EntityNumPropertyTypes/>
        </div>

        <div style = {styles.row}>
          <PropertyTypeProperties />
          <PropertyDataTypes />
        </div>
      </React.Fragment>
    );
  }
}
export default EdmVisualizationContainer;
