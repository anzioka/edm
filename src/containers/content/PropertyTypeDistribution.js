import React, { Component } from 'react';
import { NEUTRALS, WHITE, PURPLES, GREENS} from '../../core/style/Colors';
import { Bar } from 'react-chartjs-2';


const styles = {
  header_title : {
    color: NEUTRALS[0],
    fontSize: '20px',
    fontWeight: 400,
  },
  header_subtitle: {
    color: NEUTRALS[1],
    fontSize: '15px',
    fontWeight:300
  },
  header: {
    borderBottom: '1px solid ' + NEUTRALS[4],
    marginBottom: '15px'
  }
}

const Header = () => (
  <div style = {styles.header}>
    <h3 style = {styles.header_title}> EntityType Size Distribution</h3>
    <h6 style={styles.header_subtitle}> Number of PropertyTypes in an EntityType </h6>
  </div>
)

//data for now: this will change later when I get the real values
const data = {
  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 28, 29, 34, 36, 37, 38, 39, 41, 55, 110],
  datasets: [
    {
      label: "dataset 1",
      backgroundColor: GREENS[1],
      borderColor: GREENS[3],
      borderWidth: 1,
      hoverBackgroundColor: GREENS[2],
      hoverBorderColor: GREENS[3],
      data: [1, 77, 76, 44, 39, 36, 30, 17, 13, 28, 17, 9, 11, 11, 7, 5, 6, 2, 7, 7, 3, 3, 3, 2, 1, 5, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1]
    }
  ]
}

const options = {
    legend: {
      display: false
    }
  };

class PropertyTypeDistribution extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="col">
          <div className="card">
            <div className="card-body">
              <Header />
              <Bar
                data = {data}
                width = {100}
                height = {50}
                options = {options}
              />
            </div>
          </div>
        </div>
      )
    }
}

export default PropertyTypeDistribution;
