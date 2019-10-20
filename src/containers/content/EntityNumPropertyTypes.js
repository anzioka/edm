import React, { Component } from 'react';
import CardHeader from './CardHeader';
import SearchBar from './SearchBar';
import { NEUTRALS, WHITE, PURPLES, GREENS} from '../../core/style/Colors';

const styles = {
  wrapper: {
    flex: '50%',
    display: 'flex',
    flexDirection: "column"
  },
  card_body: {
    height: '400px',
    maxHeight:' 600px',
    maxWidth: '550px',
    overFlowX: 'scroll',
    overflowY: "scroll",
  },
  badge: {
    backgroundColor: GREENS[3],
    color: 'white'
  },
  list_item: {
    fontSize: '15px',
    color: NEUTRALS[0]
  }
}

class EntityNumPropertyTypes extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "",
        data: []
      }
    }
    componentDidMount() {
      const entities = this.props.entities;
      const data = [];
      entities.forEach((item) => {
        data.push({name: item['title'], value: item['properties'].length});
      });
      this.setState({
        data: data
      });
    }

    handleSearchChange = (text) => {
        this.setState ({
          text: text,
          data: []
        });
        if (text === "") {
          this.setState({
            data: data
          });
        } else{
          const filtered = this.state.data.filter((item) => {
            return item['name'].toLowerCase().includes(text.toLowerCase());
          });
          this.setState({
            data: filtered
          })
        }

    }
    render() {
      return (
        <div style={styles.wrapper}>
          <div className="card" style={{"borderColor": "rgb(197, 213, 229)"}}>
            <div className="card-body" style ={styles.card_body}>
              <CardHeader
                title="Search EntityType Sizes"
                subtitle="Enter title of EntityType in the searchbar"
              />
              <SearchBar
                onChange = {this.handleSearchChange}
                text = {this.state.text}
              />

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
      )
    }
}

export default EntityNumPropertyTypes;
