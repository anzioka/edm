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
  },
  wrapper: {
    flex: '50%',
    display: 'flex',
    flexDirection: 'column',
    marginRight: '20px'
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
  labels: [],
  datasets: [
    {
      label: "dataset 1",
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

class EntitySizeDistribution extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data : []
      }
    }
    componentDidMount() {
      const entities = this.props.entities;

      //get all the sizes
      const sizes = new Set()
      entities.forEach((item) => {
        sizes.add(item['properties'].length);
      });

      //group items according to sizes
      const dict = {}
      sizes.forEach((item) => {
        dict[item] = 0
      });
      entities.forEach((item) => {
        dict[item['properties'].length]++;
      });

      //udpate labels/values
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
        <div style={styles.wrapper}>
          <div className="card" style={{"borderColor": "rgb(197, 213, 229)"}}>
            <div className="card-body" style={{"height":"400px"}}>
              <Header />
              <Bar
                data = {this.state.data}
                options={options}
              />
            </div>
          </div>
        </div>
      )
    }
}

export default EntitySizeDistribution;
