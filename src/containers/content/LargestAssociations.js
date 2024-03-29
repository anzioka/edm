import React, { Component } from 'react';
import CardHeader from './CardHeader';
import { NEUTRALS, PURPLES, GREENS} from '../../core/style/Colors';
const styles = {
  wrapper: {
    flex: '50%',
    flexDirection: 'column',
    display: 'flex'
  },
  card_body: {
    height: '400px',
    maxHeight:' 600px',
    overflowY: "scroll",
  },
  badge: {
    backgroundColor: GREENS[3],
    color: 'white'
  },
  list_item: {
    fontSize: '15px',
    color: NEUTRALS[0]
  },

};

const ListGroupHeader = () => (
  <div className="d-flex justify-content-between align-items-center pr-4 pl-4">
    <h6> Title </h6>
    <h6> Size</h6>
  </div>
)
export default class LargestAssociations extends Component {
  componentDidMount() {
    const associations = this.props.associations;
    const sizes = []
    associations.forEach((item) => {
      sizes.push({name: item.entityType.title, value: Number(item.src.length) + Number(item.dst.length)})
    });

    sizes.sort((a, b) =>(a.value < b.value) ? 1 : -1);
    this.setState({
      data: sizes.slice(0, 10)
    })
  }
  constructor(props) {
    super(props);
    this.state = {
        data: []
    }
  }
  render() {
    return (
      <div style = {styles.wrapper}>
          <div className="card" style={{"borderColor": "rgb(197, 213, 229)"}}>
            <div style={styles.card_body} className="card-body">
              <CardHeader
                title="Largest AssocationTypes"
                subtitle="Number of connectd EntityTypes"
              />
              <ListGroupHeader/>
              <ul className="list-group">
                {
                  this.state.data.map((item, index) => (
                    <li key={index} style={styles.list_item} class="list-group-item d-flex justify-content-between align-items-center"> {item.name}
                      <span style ={styles.badge} class="badge badge-pill">{item.value}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
      </div>
    );
  }
}
