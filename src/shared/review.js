import React, { Component } from 'react';
import Overview from '../shared/overview';
import { Tabs, Tab } from 'material-ui/Tabs';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

class Review extends Component {
  constructor() {
    super();
    this.state = {
      selectedType: 'positive'
    };
  }
  render() {
    const user = ['kolage', 'kerem', 'jsa', 'ok', 'adellecharles'];
    return (
      <Tabs>

        <Tab label="Negative">
          <div>
            <List>
              <Subheader>Negative reviews</Subheader>
              {this.props.allReview.filter(item => item.emotion === 'negative').map((item, index) => {
                return (
                  <ListItem
                    leftAvatar={
                      <Avatar src={`http://www.material-ui.com/images/${user[index % user.length]}-128.jpg`} />
                    }
                    primaryText=""
                    secondaryText={
                      <p>
                        {item.text}
                      </p>
                    }
                    secondaryTextLines={2}
                    key={item + 'Negative'}
                  />
                );
              })}
            </List>
          </div>
        </Tab>
        <Tab label="Neutral">
          <div>
            <List>
              <Subheader>Neutral reviews</Subheader>
              {this.props.allReview.filter(item => item.emotion === 'neutral').map((item, index) => {
                return (
                  <ListItem
                    leftAvatar={
                      <Avatar src={`http://www.material-ui.com/images/${user[index % user.length]}-128.jpg`} />
                    }
                    primaryText=""
                    secondaryText={
                      <p>
                        {item.text}
                      </p>
                    }
                    secondaryTextLines={2}
                    key={index + 'Neutral'}
                  />
                );
              })}
            </List>
          </div>
        </Tab>
        <Tab label="Positive">
          <div>
            <List>
              <Subheader>Positive reviews</Subheader>
              {this.props.allReview.filter(item => item.emotion === 'positive').map((item, index) => {
                return (
                  <ListItem
                    leftAvatar={
                      <Avatar src={`http://www.material-ui.com/images/${user[index % user.length]}-128.jpg`} />
                    }
                    primaryText=""
                    secondaryText={
                      <p>
                        {item.text}
                      </p>
                    }
                    secondaryTextLines={2}
                    key={item + 'positive'}
                  />
                );
              })}
            </List>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default Review;
