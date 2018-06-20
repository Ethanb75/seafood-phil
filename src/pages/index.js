import React, { Component } from 'react';
import Title from '../components/Title';
import Link from 'gatsby-link';
import anime from 'animejs';
import Hammer from 'hammerjs';

import './css/index.css';
import heroVid from '../assets/vid.webm';

//icons
import up from '../assets/up.svg';
import down from '../assets/down.svg';
import play from '../assets/play.svg';

// images
import hero1 from '../assets/h1.png';
import hero2 from '../assets/h2.png';
import hero3 from '../assets/h3.png';
import hero4 from '../assets/h4.png';

const animationTime = 500;


export default class IndexPage extends Component {
  state = {
    currentView: 1,
    clickReady: true,
    clickDirection: 'up' /*or down */
  }
  toggleUp(currentView, clickReady) {
    let newView = currentView === 1 ? 4 : currentView - 1;
    if (clickReady) {
      this.setState({ currentView: currentView === 1 ? 4 : currentView - 1 });
      //make this timeout as long as the animation runs
      this.scrollImagesUp(newView);
      this.setState({ clickReady: false, clickDirection: 'up' });
      setTimeout(() => {
        this.setState({ clickReady: true });
      }, animationTime)
    } else {
      return;
    }
  }
  toggleDown(currentView, clickReady) {
    let newView = currentView === 4 ? 1 : currentView + 1;
    if (clickReady) {
      this.setState({ currentView: newView })
      //make this timeout as long as the animation runs
      this.scrollImagesDown(newView);
      this.setState({ clickReady: false, clickDirection: 'down' });
      setTimeout(() => {
        this.setState({ clickReady: true });
      }, animationTime)
    } else {
      return;
    }
  }
  scrollImagesUp(newView) {
    let imgArr = document.querySelectorAll('.index__background img');
    let newElem = imgArr[newView - 1];
    let oldElem = imgArr[(newView === 4 ? 1 : newView + 1) - 1];
    let timeline = anime.timeline();

    // after a click, grab new view number 
    // put into position first in timeline,
    // scroll them both on next timeline run
    timeline.add({
      targets: newElem,
      translateY: '+100%',
      duration: 0
    })
      .add({
        targets: [newElem, oldElem],
        translateY: '-=100%',
        duration: 750,
        easing: 'easeInOutSine'
      })
  }
  scrollImagesDown(newView) {
    let imgArr = document.querySelectorAll('.index__background img');
    let newElem = imgArr[newView - 1];
    let oldElem = imgArr[newView === 1 ? 3 : newView - 2];
    let timeline = anime.timeline();

    //after a click, grab new view number 
    // put into position first in timeline,
    // scroll them both on next timeline run
    timeline.add({
      targets: newElem,
      translateY: '-100%',
      duration: 0
    })
      .add({
        targets: [newElem, oldElem],
        translateY: '+=100%',
        duration: 750,
        easing: 'easeInOutSine'
      })
  }
  componentDidMount() {
    const { currentView, clickReady } = this.state;

    // if (window.screen.width <= 800) {
    let scrollHammers = new Hammer(document.querySelector('.indexWrap'));

    scrollHammers.on('swipeup', () => {
      this.toggleUp(currentView, clickReady);
    });

    scrollHammers.on('swipedown', () => {
      this.toggleDown(currentView, clickReady);
    })
    // }
  }
  render() {
    const { currentView, clickReady, clickDirection } = this.state;
    return (
      <div className="indexWrap">
        <div className="index__image">
          <div className="index__background">
            <img className="start" src={hero1} />
            <img src={hero2} />
            <img src={hero3} />
            <img src={hero4} />
          </div>
          <div className="index__meta">
            <div>
              <span>Order a box today</span>
              <Link to="/order"><span>&larr;</span> checkout page</Link>
            </div>
            <div>
              {/* change below video to image and a link to the video */}
              <video src={heroVid} />
              <div className="videoDesc">
                <p>
                  seafood phil takes on nyc
                </p>
              </div>
              <div className="videoPlay">
                <button>
                  <img src={play} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="index__content">
          <div className="viewPag">
            <span style={currentView === 1 ? { backgroundColor: 'rgb(190, 190, 190)' } : {}}></span>
            <span style={currentView === 2 ? { backgroundColor: 'rgb(190, 190, 190)' } : {}}></span>
            <span style={currentView === 3 ? { backgroundColor: 'rgb(190, 190, 190)' } : {}}></span>
            <span style={currentView === 4 ? { backgroundColor: 'rgb(190, 190, 190)' } : {}}></span>
          </div>
          <Title currentView={currentView} />
          {/* <h1>Seafood Phil</h1>
          <p>Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on trails (footpaths), in the countryside, while the word walking is used for shorter, particularly urban walks.</p> */}
          <nav className="controls">
            <button onClick={() => this.toggleUp(currentView, clickReady)}>
              <img src={up} />
            </button>
            <button onClick={() => this.toggleDown(currentView, clickReady)}>
              <img src={down} />
            </button>
          </nav>
        </div>
      </div>
    )
  }
};
