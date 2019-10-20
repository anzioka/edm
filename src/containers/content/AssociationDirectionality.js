import React, { Component } from "react";
import {Doughnut} from 'react-chartjs-2';
import CardHeader from './CardHeader';
import { NEUTRALS, WHITE, PURPLES, GREENS} from '../../core/style/Colors';

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
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
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
export default class AssociationDirectionality extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <div className="card" style={{"borderColor": "rgb(197, 213, 229)"}}>
          <div style={styles.card_body} className="card-body">
              <CardHeader title="Bidirectional AssocationTypes" />
              <Doughnut data={data} />
          </div>
        </div>
      </div>
    )
  }
}
