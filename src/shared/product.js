import React, { Component } from 'react';
import { ProgressBar, Row, Col } from 'react-bootstrap';
import { List, ListItem } from 'material-ui/List';
import { Tabs, Tab } from 'material-ui/Tabs';
import Subheader from 'material-ui/Subheader';

function calculateView(data) {
  if (data === 0) {
    return 0;
  }

  if (data === 1) {
    data = getRandomArbitrary();
  }

  let now = parseInt(data * 100);
  let style = 'warning';

  if (data < 0) {
    style = 'danger';
  }
  if (data > 0) {
    style = 'success';
  }
  return {
    now: now,
    style: style
  };
}

function getRandomArbitrary(min = -1, max = 1) {
  return Math.random();
}

class ProductOverview extends Component {
  constructor(props) {
    super();
    this.state = {
      data: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.allReview.length > 0){
      this.setState({
        data: 1
      });
    }
  }

  render() {
    const data1=calculateView(this.state.data);
    const data2=calculateView(this.state.data);
    const data3=calculateView(this.state.data);
    const data4=calculateView(this.state.data);
    const data5=calculateView(this.state.data);
    const data6=calculateView(this.state.data);
    const data7=calculateView(this.state.data);
    const data8=calculateView(this.state.data);
    const data9=calculateView(this.state.data);

    const self = this;
    return (
      <Tabs>
        <Tab label="Camera">
          <div>
            <List>
              <Subheader>Camera Reviews</Subheader>
              <ProgressBar
                bsStyle={'success'}
                now={data1.now}
                label={`Positive ${data1.now}%`}
              />

              <ProgressBar
                bsStyle={'danger'}
                now={data2.now}
                label={`Negative ${data2.now}%`}
              />

              <ProgressBar
                bsStyle={'warning'}
                now={data3.now}
                label={`Neutral ${data3.now}%`}
              />
            </List>
          </div>
        </Tab>
        <Tab label="Battery">
          <div>
            <List>
              <Subheader>Battery Reviews</Subheader>
               <ProgressBar
                bsStyle={'success'}
                now={data4.now}
                label={`Positive ${data4.now}%`}
              />

              <ProgressBar
                bsStyle={'danger'}
                now={data5.now}
                label={`Negative ${data5.now}%`}
              />

              <ProgressBar
                bsStyle={'warning'}
                now={data6.now}
                label={`Neutral ${data6.now}%`}
              />
            </List>
          </div>
        </Tab>
        <Tab label="Performance">
          <div>
            <List>
              <Subheader>Performance Review</Subheader>
              <ProgressBar
                bsStyle={'success'}
                now={data7.now}
                label={`Positive ${data7.now}%`}
              />

              <ProgressBar
                bsStyle={'danger'}
                now={data8.now}
                label={`Negative ${data8.now}%`}
              />

              <ProgressBar
                bsStyle={'warning'}
                now={data9.now}
                label={`Neutral ${data9.now}%`}
              />
            </List>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default ProductOverview;
