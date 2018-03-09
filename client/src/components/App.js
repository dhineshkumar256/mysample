import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h6>Dashboard</h6>
const SurveyNew = () => <h6>surveyNew</h6>

class App extends Component{
  componentDidMount() {
      this.props.fetchUser();
  }

  render() {
      return (
        <div>
            <BrowserRouter>
                <div>
                  <Header />
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/surveys" component={Dashboard} />
                  <Route path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        </div>
      );
  }
};

export default connect(null, actions)(App);
