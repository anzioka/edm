import React, { Component } from 'react';
import DataUtil from '../../utils/DataUtil';
import {
  EntityNumPropertyTypes,
  CategoriesCount,
  PropertyTypeDistribution,
  PropertyDataTypes,
  PropertyTypeProperties,
  LargestAssociations,
  AssociationDirectionality,
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
  constructor(props) {
    super(props);
    this.state = {
      associations: [],
      entities: [],
      properties: []
    }
  }
  async sendFetchRequest(url_object) {
    // console.log(url_object);
    try {
      const response = await fetch(url_object.url)
      const json = await response.json();
      console.log("Finished. what are you giong to do!");
      this.setState({
        [url_object.name] : json
      });
    } catch (error) {
      console.log(error);
    }
  }
  async fetchData (){
    const root = 'https://api.openlattice.com/datastore/edm/'
    const urls = [
      {name: 'properties', url: root + 'property' + "/type"},
      {name: 'associations', url: root + 'association' + "/type"},
      {name: 'entities', url: root + 'entity' + "/type"}
    ]
    urls.forEach((item) => {
      this.sendFetchRequest(item);
    });
  }
  componentDidMount() {
    //fetch data
    this.fetchData();
  }
  render() {
    const {properties, associations, entities} = this.state;
    if (properties.length ===0 || associations.length === 0 || entities.length ===0) {
      return null;
    }
    return (
      <React.Fragment>
        <CategoriesCount {...this.state} />
        <div style = {styles.row}>
          <PropertyTypeDistribution />
          <EntityNumPropertyTypes/>
        </div>

        <div style = {styles.row}>
          <PropertyTypeProperties />
          <PropertyDataTypes />
        </div>

        <div style={styles.row}>
          <LargestAssociations />
          <AssociationDirectionality />
        </div>
      </React.Fragment>
    );
  }
}
export default EdmVisualizationContainer;
