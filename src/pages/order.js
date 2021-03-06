import React, { Component } from 'react';
import Helmet from 'react-helmet';
import * as emailjs from 'emailjs-com';

import './css/order.css';

export default class Catering extends Component {
  state = {
    total: 0,
    boxes: 0,
    orderTiming: ''
  }
  calculateBoxes(ev) {
    console.log(ev.target);
  }
  sendOrder(ev) {
    ev.preventDefault();
    emailjs.sendForm('default_service', 'seafood', '#order').then(() => {
      console.log('mail sent')
    });
  }
  componentDidMount() {
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';

    window.addEventListener('load', () => {
      emailjs.init("user_dCiSdqLDrAURIDmEOaMQH");
      // setTimeout(() => {
      //   console.log(emailjs);
      // }, 2000);
    })
  }
  componentWillUnmount() {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }
  render() {
    const { orderTiming } = this.state;
    return (
      <div>
        <Helmet
          title='Order Catering or Delivery | Seafood Phil'
          meta={[
            { name: 'description', content: 'Order catering for Atlanta seafood chef Seafood Phil. Order online today.' },
            { name: 'keywords', content: 'catering, seafood, atlanta, Seafood Phil, Big Seafood, Atlanta Catering' },
          ]}
        />
        <div className="orderBack"></div>
        <div className="orderWrap">
          <form name="orderInfo" data-netlify="true" method="POST" id="order" onSubmit={ev => this.sendOrder(ev)}>
            <div className="locationInfo">
              <h3>Delivery Location</h3>
              <div className="orderItem">
                <label htmlFor="name">name</label>
                <input name="name" type="text" autoComplete="name" required></input>
              </div>
              <div className="orderItem">
                <label htmlFor="number">phone number</label>
                <input name="number" type="tel" autoComplete="tel" required></input>
              </div>
              <div className="orderItem">
                {/* put a small note here stating 'sales to US only currently' */}
                <label htmlFor="state">state</label>
                <input name="state" required></input>
              </div>
              <div className="orderItem">
                <label htmlFor="city">city</label>
                <input name="city" type="text" required></input>
              </div>
              <div className="orderItem">
                <label htmlFor="number">address</label>
                <input name="address" placeholder="Street, P.O. Box, Company Name, c/o" autoComplete="address-line1" required></input>
              </div>
              <div className="orderItem">
                <input name="address2" type="text" placeholder="Apartment, suite, unit, building, floor, etc." autoComplete="address-line2"></input>
              </div>
              <div className="orderItem">
                <label htmlFor="postal">postal code</label>
                <input name="postal" type="text" autoComplete="postal-code" maxLength="5" required></input>
              </div>
            </div>
            <hr />
            <div className="orderInfo">
              <h3>Order Timing</h3>
              <div>
                <input type="radio" name="timing" onInput={() => this.setState({ orderTiming: 'now' })} value="now" required></input>
                <label htmlFor="delivery">Order instant delivery</label>
              </div>
              <div>
                {/* if the state they select isn't georgia, disable the instant order button */}
                <input type="radio" name="timing" value="later" onInput={() => this.setState({ orderTiming: 'later' })}></input>
                <label htmlFor="catering">Schedule an order</label>
              </div>
              <div>
                {
                  orderTiming === 'later' ?
                    <div className="cateringSelect">
                      <label>Event Date</label>
                      <input type="date" name="eventDate" required />
                      <label>Event Time</label>
                      <input type="time" name="eventTime" required />
                    </div>
                    :
                    ''
                }
              </div>
              <hr />
              <div className="foodSelection">
                <h3>Order Details</h3>
                <div>
                  <label htmlFor="amount">Amount of boxes / people attending</label>
                  <input type="number" min="1" name="amount" />
                </div>
                <div>
                  <input type="checkbox" name="lobster" />
                  <label htmlFor="lobster">check to include lobster</label>
                </div>
                <div>
                  <label>special requests (food alergies, vegetarian options, etc.)</label>
                  <textarea rows="5" name="special"></textarea>
                </div>
              </div>
            </div>
            <input type="submit" value="Request order" />
          </form>
        </div>
      </div>
    )
  }
}