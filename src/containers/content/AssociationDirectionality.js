import React, { Component } from "react";
import {Doughnut} from 'react-chartjs-2';
import CardHeader from './CardHeader';
import DataUtil from '../../utils/DataUtil';
import { NEUTRALS, WHITE, PURPLES, GREENS, REDS} from '../../core/style/Colors';

const styles = {
  wrapper: {
    flex: '50%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px'
  },
  card_body :{
    height: '400px',
    maxHeight:' 600px',
  }
}

const data = {
	labels: [],
	datasets: [{
		data: [],
		backgroundColor: [GREENS[2], PURPLES[3]],
		hoverBackgroundColor: [GREENS[3], PURPLES[2]]
	}]
};
export default class AssociationDirectionality extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }
  componentDidMount() {
    const associations = this.props.associations;
    const dict = DataUtil.getFrequency(associations, 'bidirectional');
    for (let [key, val] of Object.entries(dict)) {
        data['labels'].push(key)
        data['datasets'][0]['data'].push(val);
    }
    this.setState({
      data: data
    });
  }
  render() {
    return (
      <div style={styles.wrapper}>
        <div className="card" style={{"borderColor": "rgb(197, 213, 229)"}}>
          <div style={styles.card_body} className="card-body">
              <CardHeader
                title="Bidirectional AssocationTypes"
                 />
              <Doughnut data={this.state.data} />
          </div>
        </div>
      </div>
    )
  }
}
