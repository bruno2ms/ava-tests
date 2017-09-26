import test from 'ava';
import { bar } from './bar';


// This runs before all tests
test.before(t => {});
// This runs after all tests
test.after('cleanup', t => {});
// This will always run, regardless of earlier failures
test.after.always('guaranteed cleanup', t => {});
// This runs before each test
test.beforeEach(t => {});
// This runs after each test
test.afterEach(t => {});
// This runs after each test and other test hooks, even if they failed
test.afterEach.always(t => {});

test('My first test', t => {
  t.deepEqual(bar(), 'bar');
});