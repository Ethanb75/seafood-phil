import React, { Component } from 'react';
import Title from '../components/Title';
import Link from 'gatsby-link';
import anime from 'animejs';

import './css/index.css';
import heroVid from '../assets/vid.webm';

//icons
import up from '../assets/up.svg';
import down from '../assets/down.svg';
import play from '../assets/play.svg';

// images
import hero1 from '../assets/food.png';
import hero2 from '../assets/h2.png';
import hero3 from '../assets/contact.png';
import hero4 from '../assets/catering2.png';

const animationTime = 700;


export default class IndexPage extends Component {
  state = {
    currentView: 1,
    clickReady: true,
    clickDirection: 'up' /*or down */,
    swipedOnce: false
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
        duration: 700,
        // easing: 'easeOutQuad',
        easing: 'easeOutCubic'
        // elasticity: 100
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
    //cubic-bezier(0,0,0,1) => easing: [0, 0, 0, 1]
    timeline.add({
      targets: newElem,
      translateY: '-100%',
      duration: 0
    })
      .add({
        targets: [newElem, oldElem],
        translateY: '+=100%',
        duration: 700,
        // easing: 'easeOutQuad',
        easing: 'easeOutCubic'
        // elasticity: 100
      })
  }

  componentDidMount() {

    window.addEventListener('load', () => {
      let scrollHammers = new Hammer(document.querySelector('.indexWrap'));

      scrollHammers.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
      scrollHammers.on('swipeup swipedown', ev => {
        let { currentView, clickReady } = this.state;

        //after a swipe, remove the swipe caller
        if (!this.state.swipedOnce) this.setState({ swipedOnce: true });

        if (ev.type === 'swipeup') {
          this.toggleDown(currentView, clickReady);
        } else if (ev.type === 'swipedown') {
          this.toggleUp(currentView, clickReady);
        }
      });
    });

    window.addEventListener('wheel', ev => {
      let { currentView, clickReady } = this.state;
      return ev.deltaY > 0 ?
        this.toggleDown(currentView, clickReady)
        :
        this.toggleUp(currentView, clickReady);
    })
  }
  render() {
    const { currentView, clickReady, swipedOnce } = this.state;
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
              {/* <video src={heroVid} /> */}
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
            <span className={currentView === 1 ? "active" : ""}></span>
            <span className={currentView === 2 ? "active" : ""}></span>
            <span className={currentView === 3 ? "active" : ""}></span>
            <span className={currentView === 4 ? "active" : ""}></span>
          </div>
          <Title currentView={currentView} />
          <nav className="controls">
            <button onClick={() => this.toggleUp(currentView, clickReady)}>
              Previous
              <img src={up} />
            </button>
            <span>/</span>
            <button onClick={() => this.toggleDown(currentView, clickReady)}>
              Next
              <img src={down} />
            </button>
          </nav>

          {/* mobile call to scroll */}
          <div className={swipedOnce ? "scrollCaller hide" : "scrollCaller"}>
            <img src={up} />
            <span>swipe</span>
            <img src={up} />
          </div>
        </div>
      </div>
    )
  }
};
