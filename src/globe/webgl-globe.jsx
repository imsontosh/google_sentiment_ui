import React, { Component } from 'react';

var Detector = require('./third-party/Detector.js'),
  TWEEN = require('./third-party/Tween.js'),
  DAT = require('./globe.js');

class WebGLGlobe extends Component {
  render() {
    return (
      <div>
        <div className="globeParent" ref="container" />

        <div id="currentInfo">
          <span ref="year1990" className="year">Positive</span>
          <span ref="year1995" className="year">Negative</span>
          <span ref="year2000" className="year">Neutral</span>
        </div>

        <div id="title">
          Global Analysis
        </div>

      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  componentDidMount() {
    var self = this;
    var container = self.refs.container;
    if (!Detector.webgl) {
      Detector.addGetWebGLMessage();
    } else {
      var years = ['1990', '1995', '2000'];
      // var container = document.getElementById('container');

      var opts = { imgDir: `${process.env.PUBLIC_URL}/assets/` };
      var globe = new DAT.Globe(container, opts);
      var i, tweens = [];
      var settime = function(globe, t) {
        return function() {
          new TWEEN.Tween(globe).to({ time: t / years.length }, 500).easing(TWEEN.Easing.Cubic.EaseOut).start();
          var y = self.refs['year' + years[t]];
          if (y.getAttribute('class') === 'year active') {
            return;
          }
          var yy = document.getElementsByClassName('year');
          for (i = 0; i < yy.length; i++) {
            i;
            yy[i].setAttribute('class', 'year');
          }
          y.setAttribute('class', 'year active');
        };
      };

      for (var i = 0; i < years.length; i++) {
        var y = self.refs['year' + years[i]];
        y.addEventListener('mouseover', settime(globe, i), false);
      }

      var xhr;
      TWEEN.start();

      xhr = new XMLHttpRequest();
      xhr.open('GET', `${process.env.PUBLIC_URL}/assets/population909500.json`, true);

      var onreadystatechangecallback = function(e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            window.data = data;
            for (i = 0; i < data.length; i++) {
              globe.addData(data[i][1], { format: 'magnitude', name: data[i][0], animated: true });
            }
            globe.createPoints();
            settime(globe, 0).bind(this)();
            globe.animate();
          }
        }
      };
      xhr.onreadystatechange = onreadystatechangecallback.bind(this);
      xhr.send(null);
    }
  }
}

export default WebGLGlobe;
