import React, { Component } from "react";
import CardHeader from './CardHeader';
import { Bar } from 'react-chartjs-2';
import { NEUTRALS, WHITE, PURPLES, GREENS} from '../../core/style/Colors';


const styles = {
  wrapper: {
    flex: '50%',
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
  labels: [],
  datasets: [
    {
      backgroundColor: GREENS[1],
      borderColor: GREENS[3],
      borderWidth: 1,
      hoverBackgroundColor: GREENS[2],
      hoverBorderColor: GREENS[3],
      data: []
    }
  ]
}

const options = {
    legend: {
      display: false
    },
    maintainAspectRatio: false
};

export default class PropertyDataTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
     const properties = this.props.properties;
     //count how many of each property
     const types = []
     properties.forEach((item) => {
       types.push(item['datatype']);
     });

     const unique = new Set(types);
     const dict = {}
     unique.forEach((item) => {
       dict[item] = 0;
     });

     types.forEach((item) => {
       dict[item]++;
     });

     for (let [key, val] of Object.entries(dict)) {
         data['labels'].push(key)
         data['datasets'][0]['data'].push(val);
     }
     this.setState({
       data: data
     })
  }
  render() {
    return (
      <div style = {styles.wrapper}>
        <div className="card" style={{"borderColor": "rgb(197, 213, 229)"}}>
          <div className="card-body" style={styles.card_body}>
              <CardHeader
                title="PropertyType DataTypes"
              />
              <Bar
                data = {this.state.data}
                options = {options}
              />
          </div>
        </div>
      </div>
    )
  }
}
