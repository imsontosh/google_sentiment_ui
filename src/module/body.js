import React, { Component } from 'react';
import Overview from '../shared/overview';
import Review from '../shared/review';
import ProductOverview from '../shared/product';
import firebase from '../shared/FB';
import _ from 'lodash';
import { ProgressBar, Row, Col } from 'react-bootstrap';
import WebGLGlobe from '../globe/webgl-globe';

class Body extends Component {
  constructor() {
    super();
    this.state = {
      allReview: [],
      sentiment_overview: 0
    };
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('sentiment');
    itemsRef.on('value', snapshot => {
      let items = snapshot.val();

      const reviewList = items ? _.values(items)[0].data : [];
      let newState = [];
      let overallsentiment = 0;
      let postive =0, negative = 0 , neutral = 0;

      for (let item in reviewList) {
        overallsentiment += reviewList[item].score;
        if (reviewList[item].emotion === 'positive') {
          postive += reviewList[item].score;
        } else if (reviewList[item].emotion === 'negative') {
          negative += reviewList[item].score;
        } else if (reviewList[item].emotion === 'neutral') {
          neutral += reviewList[item].score;
        }
        newState.push({
          text: reviewList[item].text,
          score: reviewList[item].score,
          magnitude: reviewList[item].magnitude,
          emotion: reviewList[item].emotion
        });
      }

      this.setState({
        allReview: newState,
        sentiment_overview: overallsentiment / newState.length,
        postive: postive / newState.length,
        negative: negative / newState.length,
        neutral: neutral / newState.length
      });

      console.log('data', newState, overallsentiment / newState.length);
    });
  }
  render() {
    return (
      <Row className="show-grid">
        <Col xs={6} md={6}>
          <Row className="show-grid">
          <div>
            <div className="App-intro">
              <h2>Data Shown for India</h2>  
              <Row className="show-grid">
                <Col xs={6} md={6}>
                  <Overview
                    allReview={this.state.allReview}
                    sentiment_overview={this.state.sentiment_overview}
                    postive={this.state.postive}
                    negative={this.state.negative}
                    neutral={this.state.neutral}
                  />
                </Col>
                <Col xs={6} md={6}>
                  <ProductOverview
                    allReview={this.state.allReview}
                    sentiment_overview={this.state.sentiment_overview}
                    postive={this.state.postive}
                    negative={this.state.negative}
                    neutral={this.state.neutral}
                  />
                </Col>
              </Row>


              <div className="fluid_parent">
                <div className="fluid">
                  <h4>OverAll Reviews </h4>
                  <Row className="show-grid">
                    <Col xs={4} md={4}>
                    😡
                    </Col>
                    <Col xs={4} md={4}>
                      😐
                    </Col>
                    <Col xs={4} md={4}>
                    😊
                    </Col>
                  </Row>
                  <div className="">
                    <Review allReview={this.state.allReview} sentiment_overview={this.state.sentiment_overview} />
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix visible-xs-block" />

          </div>
          </Row>
        </Col>
        <Col xs={6} md={6}>
          <div className="App-intro">
            <div className="fluid_parent">
              <div className="fluid">
                <h4>Global Reviews </h4>
                  {this.state.allReview.length > 0 && <WebGLGlobe  allReview={this.state.allReview}/>}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Body;
