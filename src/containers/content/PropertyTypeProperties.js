import React, { Component } from "react";
import { NEUTRALS, WHITE, PURPLES, GREENS, REDS} from '../../core/style/Colors';
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
    values: [],
    labels: []
  },
  analyzer: {
    labels: [],
    values: []
  },
  pii: {
    labels: [],
    values: []
  }
}


export default class PropertyTypeProperties extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selector: selectors[0],
      data: {}
    }
  }
  initializeState() {
    var initData = {
    	labels: datasets.indexType.labels,
    	datasets: [{
    		data: datasets.indexType.values,
    		backgroundColor: [GREENS[2], PURPLES[3], REDS[2]],
    		hoverBackgroundColor: [GREENS[3], PURPLES[2], REDS[3]]
    	}]
    };
    this.setState({
      data: initData
    });
  }

  componentDidMount() {
    const properties = this.props.properties;
    selectors.forEach((item) => {

      //get all values
      const count = []
      properties.forEach((entry) => {
        count.push(entry[item]);
      });

      //get unique values
      const unique = new Set(count)

      //group values
      const dict = {}
      unique.forEach((item) => {
        dict[item] = 0;
      })
      //count each unique value
      count.forEach((item) => {
        dict[item]++
      });

      for (let [key, val] of Object.entries(dict)) {
          datasets[item].labels.push(key)
          datasets[item].values.push(val);
      }
    });
    this.initializeState()
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
    return (
      <div style={styles.wrapper}>
        <div className="card" style={{"borderColor": "rgb(197, 213, 229)"}}>
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
