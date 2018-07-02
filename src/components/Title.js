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
            For 15 years he's been perfecting his original louisiana cajun menu while touring the country.
          </p>
          <p className={currentView === 2 ? 'active' : ''}>
            While SF deals mostly with celebrity orders, he's currently accepting catering orders. Order a mouth-watering box or plan your next party with the top seafood chef.
          </p>
          <p className={currentView === 3 ? 'active' : ''}>
            Seafood Phil's been cooking for celebrities and locals for over 15 years. Born in Louisiana, he moved to Atlanta to seek opportunity and expand his brand. He's catered for some of the biggest names like YFN lucci, lil Baby, & iHeart Radio.
          </p>
          <p className={currentView === 4 ? 'active' : ''}>
            Contact us today to schedule a party or order delivery.
            <span className="contact_links">
              <a href="tel:+4044320872">
                (404) 432-0872
              </a>
              <a href="mailto:contact@seafoodphil.com">
                contact@seafoodphil.com
              </a>
              <a href="https://www.instagram.com/1nation_ent/">
                @1nation_ent
              </a>
            </span>
          </p>
        </div>
      </div>
    )
  }
};