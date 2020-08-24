import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import GameOverScreen from "./game-over-screen.jsx";
import history from "../../history.js";


const noop = () => {};

it(`Should GameOverScreen render correctly`, () => {
  const tree = renderer.create((
    <Router
      history={history}
    >
      <GameOverScreen
        onReplayButtonClick={noop}
      />
    </Router>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
