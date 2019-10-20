import React, { Component } from 'react';
import styled from 'styled-components';
import { NEUTRALS, WHITE } from '../../core/style/Colors';
import { PURPLES } from '../../core/style/Colors';
import DataUtil from '../../utils/DataUtil';

// import { Card } from 'react-bootstrap';

const counts = [{name: 'PropertyType', count: 0}, {name: 'EntityType', count: 0}, {name: 'AssociationType', count: 0}, {name : 'Schema', count: 4}];

const styles = {
  category_label: {
    color: NEUTRALS[1],
    fontSize: '20px',
    fontWeight: '300'
  },
  category_count: {
    color: NEUTRALS[0],
    fontSize: '28px',
    marginBottom: '15px',
    fontWeight: 'normal'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    cursor: 'default'
  },
  container: {
    display : 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100px',
    flexWrap: 'wrap'
  },
  category_item_container: {
    flex: '0 0 150px',
    display: 'flex',
    flexDirection: 'column'
  }
}

const CategoriesCountItem = ({item}) => (
  <div style={styles.category_item_container}>
    <div style = {styles.card} className="card text-center">
      <h4 style = {styles.category_count}> {item.count} </h4>
      <h4 style = {styles.category_label}> {item.name}</h4>
    </div>
  </div>
)

class CategoriesCount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  getNumberOfSchema(entities) {
    const result = new Set();
    entities.forEach((item) => {
      item['schemas'].forEach((entry) => {
        result.add(entry['namespace']);
      });
    });
    return result.size;
  }

  componentDidMount(){
    //get summaries
    //how many schemas
    const {properties, entities, associations} = this.props;
    var data = []
    data.push({name: 'PropertyType', count: properties.length});
    data.push({name: 'EntityType', count: entities.length});
    data.push({name: 'AssociationType', count: associations.length});
    data.push({name: 'Schema', count: this.getNumberOfSchema(entities)});
    this.setState({
      data: data
    });
  }
  //alfonce
  render() {
    return(
      <div style = {styles.container}>
        {this.state.data.map((item) => (
          <CategoriesCountItem
            key={item.name}
            item = {item}
          />
        ))}
      </div>
    )
  }
}

export default CategoriesCount;
