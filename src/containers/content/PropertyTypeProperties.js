import React, { Component } from "react";
import { NEUTRALS, WHITE, PURPLES, GREENS} from '../../core/style/Colors';
import { Pie } from 'react-chartjs-2'

import CardHeader from './CardHeader';

const styles = {
  wrapper: {
    flex: '50%',
    display: "flex",
    flexDirection: "column",
    marginRight: '20px'
  },
  card_body : {
    height: '400px',
    maxHeight:' 600px',
  },
  selector_wrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10px'
  },
  selector_prompt: {
    color: NEUTRALS[1],
    fontSize: '15px',
    fontWeight:300,
    padding: 0,
    margin: 0,
    marginRight: '20px'
  }
}
const selectors = ["indexType", "analyzer", "pii"];

const PropertySelector = ({value, onChange}) => (
  <div style={styles.selector_wrap}>
    <h4 style={styles.selector_prompt}> Select criteria </h4>
    <select

      value={value}
      onChange = {(event) => onChange(event.target.value)} >
      {
        selectors.map((item, index) => (
          <option
            key={index}
            value={item}
            >
            {item}
          </option>
        ))
      }
    </select>
  </div>
)
const datasets = {
  indexType: {
    values: [1428, 108],
    labels: ['NONE', 'BTREE']
  },
  analyzer: {
    labels: ['NOT_ANALYZED', 'METAPHONE', 'STANDARD'],
    values: [1, 270, 1265]
  },
  pii: {
    labels: ["False", "True"],
    values: [1496, 40]
  }
}

var initData = {
	labels: datasets.indexType.labels,
	datasets: [{
		data: datasets.indexType.values,
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
export default class PropertyTypeProperties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selector: selectors[0],
      data: initData
    }
  }

  handleSelectChange = (value) => {
    this.setState({
      selector: value
    });
    var data = this.state.data;

    // console.log(data.datasets[0].data)
    switch (value) {
      case "indexType":
        data.labels = datasets.indexType.labels;
        // console.log(data.labels)
        data.datasets[0].data = datasets.indexType.values
        break;
      case "analyzer":
        data.labels = datasets.analyzer.labels;
        data.datasets[0].data = datasets.analyzer.values;
        break;
      default:
        data.labels = datasets.pii.labels;
        data.datasets[0].data = datasets.pii.values;
    }
    this.setState({
      data: data
    })
  }

  render() {
    // console.log(this.state.data.datasets[0].data);
    return (
      <div style={styles.wrapper}>
        <div className="card">
          <div style= {styles.card_body} className="card-body">
              <CardHeader title="PropertyType Characteristics" />
              <PropertySelector
                value = {this.state.selector}
                onChange = {this.handleSelectChange}
              />
              <Pie data ={this.state.data} />
          </div>
        </div>
      </div>
    )
  }
}
