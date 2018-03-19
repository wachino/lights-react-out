import React from 'react';
import Game from '../src/js/components/Game';
import renderer from 'react-test-renderer';

test('Game with no winner', () => {
  var boardSize = 5;

  const component = renderer.create(
    <Game
      boardSize={boardSize}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  for (let father of tree.children) {
    for (let son of father.children) {
      for (let grandchild of son.children) {
        for (let greatgrandson of grandchild.children) {
          greatgrandson.props.onClick();
        }
      }
    }
  }

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Game winner', () => {
  var boardSize = 2;

  const component = renderer.create(
    <Game
      boardSize={boardSize}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  for (let father of tree.children) {
    for (let son of father.children) {
      for (let grandchild of son.children) {
        for (let greatgrandson of grandchild.children) {
          greatgrandson.props.onClick();
        }
      }
    }
  }

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Game winner plus one click more', () => {
  var boardSize = 2;

  const component = renderer.create(
    <Game
      boardSize={boardSize}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  var last;
  for (let father of tree.children) {
    for (let son of father.children) {
      for (let grandchild of son.children) {
        for (let greatgrandson of grandchild.children) {
          greatgrandson.props.onClick();
          last = greatgrandson.props;
        }
      }
    }
  }

  last.onClick();

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
