import React, { Component } from 'react';
import { ProgressBar,Row,Col } from 'react-bootstrap';

function calculateView (data){
  let now = parseInt(data * 100);
  let style = 'warning';
  
  if (data < 0) {
    now = 50 - now;
    style = 'danger';
  }
  if (data > 0) {
    now = 50 + now;
    style = 'success';
  }
  return {
    now: now,
    style: style
  }
};

class Overview extends Component {
  render() {
    const self = this;


    return (
      <div className="fluid_parent">
        <div className="fluid">
          <h4>OverAll Sentiments </h4>
          <div className="progress">
            <ProgressBar bsStyle={calculateView(this.props.sentiment_overview).style} now={calculateView(this.props.sentiment_overview).now} label={`${calculateView(this.props.sentiment_overview).now}%`} />
          </div>
          <h4>Degree of Satisfaction </h4>
          <div className="progress">
          <ProgressBar bsStyle={calculateView(this.props.postive).style} now={(this.props.postive * 100).toFixed(2)} label={`${(this.props.postive * 100).toFixed(2)}%`} />

          </div>
          <h4>Degree of Disatisfaction </h4>
          <div className="progress">
          <ProgressBar bsStyle={'danger'} now={Math.abs((this.props.negative * 100).toFixed(2))} label={`${Math.abs((this.props.negative * 100).toFixed(2))}%`} />

          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
