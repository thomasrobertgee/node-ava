import test from 'ava';
import fibonacciSequence from '../lib/fibonacciSequence';

test('first 0', (t) => {
  t.deepEqual(
    fibonacciSequence(0),
    []
  );
});

test('first 1', t => {
  t.deepEqual(
    fibonacciSequence(1),
    [1]
  );
});

test('first 2', function(t) {
  t.deepEqual(
    fibonacciSequence(2),
    [1, 1]
  );
});

test('first 3', function(t) {
  t.deepEqual(
    fibonacciSequence(3),
    [1, 1, 2]
  );
});

test('first 4', function(t) {
  t.deepEqual(
    fibonacciSequence(4),
    [1, 1, 2, 3]
  );
});

test('first 5', function(t) {
  t.deepEqual(
    fibonacciSequence(5),
    [1, 1, 2, 3, 5]
  );
});
