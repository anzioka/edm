import React, { Component } from 'react';
import CardHeader from './CardHeader';
import SearchBar from './SearchBar';
import { NEUTRALS, WHITE, PURPLES, GREENS} from '../../core/style/Colors';


//this is a table => showing top =>
const data = [{'name': 'Assessed By (-d)', 'value': 5}, {'name': '(referralrequest) Provided to organization, etc.', 'value': 3}, {'name': 'Assign To', 'value': 1}, {'name': 'Taking', 'value': 8}, {'name': 'Discharge information / details', 'value': 8}, {'name': 'Called', 'value': 2}, {'name': 'ReferredBy (-d)', 'value': 2}, {'name': 'Searched by', 'value': 1}, {'name': 'Edited By', 'value': 1}, {'name': 'Searched By', 'value': 1}, {'name': 'Oversaw', 'value': 1}, {'name': 'Plea', 'value': 2}, {'name': 'Digital Signature', 'value': 5}, {'name': 'Occurred At', 'value': 2}, {'name': 'Contacted At (-d)', 'value': 4}, {'name': 'Assessed By (-d)', 'value': 6}, {'name': 'Associated with', 'value': 1}, {'name': 'Warrant', 'value': 8}, {'name': 'Enters', 'value': 2}, {'name': 'Used (-d)', 'value': 3}, {'name': 'Inpatient stay / hospitalization', 'value': 9}, {'name': 'Vocabulary assessment', 'value': 6}, {'name': 'Used By', 'value': 4}, {'name': 'Ordered', 'value': 2}, {'name': 'Interacted With (-d)', 'value': 1}, {'name': 'Presides over', 'value': 1}, {'name': 'Patient Visit', 'value': 15}, {'name': 'Served with', 'value': 1}, {'name': 'Involved in (-d)', 'value': 1}, {'name': 'Parole Review', 'value': 6}];
const styles = {
  wrapper: {
    flex: '50%',
    display: 'flex',
    flexDirection: "column"
  },
  card_body: {
    height: '400px',
    maxHeight:' 600px',
    overflowY: "scroll",
  },
  badge: {
    backgroundColor: PURPLES[2],
    color: 'white'
  },
  list_item: {
    fontSize: '15px',
  }
}


class EntityNumPropertyTypes extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "",
        data: data
      }
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
          <div className="card">
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
