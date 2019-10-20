import React, { Component } from 'react';
import {
  MostFrequentPropertyTypes,
  CategoriesCount,
  PropertyTypeDistribution
} from '../content';

class EdmVisualizationContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <CategoriesCount />
        <div className="row mt-5">
          <PropertyTypeDistribution />
          <MostFrequentPropertyTypes />
        </div>
      </React.Fragment>
    );
  }
}
export default EdmVisualizationContainer;
