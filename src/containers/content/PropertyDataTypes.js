import React, { Component } from "react";
import CardHeader from './CardHeader';
import { Bar } from 'react-chartjs-2';
import { NEUTRALS, WHITE, PURPLES, GREENS} from '../../core/style/Colors';


const styles = {
  wrapper: {
    flex: '33.3%',
    display: 'flex',
    flexDirection: 'column'
  },
  card_body: {
    height: '400px',
    maxHeight:' 600px',
  },
}

// class CategorySelector extends Component {
//
// }
const data = {
  labels: ['DateTimeOffset', 'Int32', 'GeographyPoint', 'Int16', 'String', 'Binary', 'TimeOfDay', 'Double', 'Date', 'Boolean', 'Int64', 'Duration', 'Guid'],
  datasets: [
    {
      label: "dataset 1",
      backgroundColor: PURPLES[1],
      borderColor: PURPLES[3],
      borderWidth: 1,
      hoverBackgroundColor: PURPLES[2],
      hoverBorderColor: PURPLES[3],
      data: [89, 49, 1, 40, 984, 10, 6, 51, 24, 229, 48, 1, 4]
    }
  ]
}

const options = {
    legend: {
      display: true
    },
    maintainAspectRatio: false
};

export default class PropertyDataTypes extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div style = {styles.wrapper}>
        <div className="card">
          <div className="card-body" style={styles.card_body}>
              <CardHeader
                title="PropertyType DataTypes"
              />
              <Bar
                data = {data}
                options = {options}
              />
          </div>
        </div>
      </div>
    )
  }
}
