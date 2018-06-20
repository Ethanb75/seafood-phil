import React, { Component } from 'react';


export default class Title extends Component {
  renderInfo(view) {
    return 'Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on trails (footpaths), in the countryside, while the word walking is used for shorter, particularly urban walks.'
  }
  // componentDidUpdate() {
  //   let test = document.querySelector('.index__content h1');
  //   console.log(test)
  // }
  componentDidMount() {


  }
  render() {
    const { currentView } = this.props;
    return (
      <div>
        <div className="titleList">
          <h1 className={currentView === 1 ? 'active' : ''}>Big Seafood</h1>
          <h1 className={currentView === 2 ? 'active' : ''}>Food</h1>
          <h1 className={currentView === 3 ? 'active' : ''}>About</h1>
          <h1 className={currentView === 4 ? 'active' : ''}>Contact</h1>
        </div>
        <div className="textList">
          <p className={currentView === 1 ? 'active' : ''}>
            Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on trails (footpaths), in the countryside, while the word walking is used for shorter, particularly urban walks.
          </p>
          <p className={currentView === 2 ? 'active' : ''}>
            Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on trails (footpaths), in the countryside, while the word walking is used for shorter, particularly urban walks.
          </p>
          <p className={currentView === 3 ? 'active' : ''}>
            Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on trails (footpaths), in the countryside, while the word walking is used for shorter, particularly urban walks.
          </p>
          <p className={currentView === 4 ? 'active' : ''}>
            Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on trails (footpaths), in the countryside, while the word walking is used for shorter, particularly urban walks.
          </p>
        </div>
      </div>
    )
  }
};