import React from 'react';
import TweenMax from 'gsap';


class Wheel extends React.Component{
    constructor(props){
        super(props);
        this.state = {spin: 0}
        this.handleSpin = this.handleSpin.bind(this);
    }

    componentDidMount(){

    }

    handleSpin(){
        let that = this;
        var wheel = that.refs.wheel;
        var spin = (Math.floor(Math.random() * 360) + 1) + (360 * 7) + this.state.spin;
        this.setState({spin: spin})
        console.log(spin);

        TweenMax.to(wheel, 2, {rotation: spin,  transformOrigin:"50% 50%" , onUpdateParams:[wheel],
        onComplete: function(){
            //
        },
        onUpdate: function(){
          //
        }
      });
    }

    render(){
        return(
            <div id="wrapper" className="wrapper" ref="wrapper">
              <div id="wheel" className="wheel" ref="wheel">
                   <div id="inner-wheel" className="innerwheel">
                      <div ref="sec" className="sec"><span className="fa">50</span></div>
                      <div ref="sec" className="sec"><span className="fa">40</span></div>
                      <div ref="sec" className="sec"><span className="fa">30</span></div>
                      <div ref="sec" className="sec"><span className="fa">20</span></div>
                      <div ref="sec" className="sec"><span className="fa">10</span></div>
                      <div ref="sec" className="sec"><span className="fa">60</span></div>
                  </div>
              </div>
              <div id="spin" className="spin" ref="indicator" onClick={this.handleSpin}>
                <div id="inner-spin" className="innerspin"></div>
              </div>
              <div id="shine"className="shine"></div>
              <div id="txt"></div>
          </div>
        );
    }
}

export default (Wheel)

