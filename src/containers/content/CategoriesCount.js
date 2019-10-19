import React, { Component } from 'react';
import styled from 'styled-components';
import { NEUTRALS, WHITE } from '../../core/style/Colors';
import { PURPLES } from '../../core/style/Colors';

// import { Card } from 'react-bootstrap';

const counts = [{name: 'PropertyType', count: 200}, {name: 'EntityType', count: 100}, {name: 'AssociationType', count: 821}, {name : 'Schema', count: 150}];

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
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    cursor: 'default'
  }
}

const CategoriesCountItem = ({item}) => (
  <div className="col justify-content-between">
    <div style = {styles.card} className="card text-center">
      <h4 style = {styles.category_count}> {item.count} </h4>
      <h4 style = {styles.category_label}> {item.name}</h4>
    </div>
  </div>
)

class CategoriesCount extends Component {
  //alfonce
  render() {
    return(
      <div className="row">
        {counts.map((item) => (
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
