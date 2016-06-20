var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should set state to started and begin counting up', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    expect(timer.state.count).toBe(0);
    expect(timer.state.countdownStatus).toBe('stopped');

    timer.handleStatusChange('started');

    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('should set state to paused and stop counting up', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');

    setTimeout(() => {
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(2);
        done();
      }, 1000);
    }, 2001)
  });

  it('should set state to stopped and clear counter', () => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');

    setTimeout(() => {
      timer.handleStatusChange('stopped');
      expect(timer.state.count).toBe(0);
      done();
    }, 1001);
  });
});
