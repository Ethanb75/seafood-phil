import React, { Component } from 'react';


export default class Title extends Component {
  render() {
    const { currentView } = this.props;
    return (
      <div>
        <div className="titleList">
          <h1 className={currentView === 1 ? 'active' : ''}>Big Seafood</h1>
          <h1 className={currentView === 2 ? 'active' : ''}>Catering</h1>
          <h1 className={currentView === 3 ? 'active' : ''}>About</h1>
          <h1 className={currentView === 4 ? 'active' : ''}>Contact</h1>
        </div>
        <div className="textList">
          <p className={currentView === 1 ? 'active' : ''}>
            Seafood Phil is the hottest celebrity seafood chef across the country.
            For 15 years he's been perfecting his original louisianna cajun menu while touring the country.
          </p>
          <p className={currentView === 2 ? 'active' : ''}>
            While SF deals mostly with celebrity orders, he's currently accepting catering orders. Order a mouth-watering box or plan your next party with the top seafood chef.
          </p>
          <p className={currentView === 3 ? 'active' : ''}>
            3Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on trails (footpaths), in the countryside, while the word walking is used for shorter, particularly urban walks.
          </p>
          <p className={currentView === 4 ? 'active' : ''}>
            Contact us today to learn more about SF, schedule a party, or for promotion opportunites.
          </p>
        </div>
      </div>
    )
  }
};