import { assert, expect, test } from 'vitest'

test('random', () => {
	let a = 1;
	let b = 3;
	let c = a  + b;
	expect(b).toBe(b);
	expect(3).toEqual(3);

	expect(c).toEqual(4);
	expect(c).toMatchSnapshot();
});


test('Math.sqrt()', () => {
	expect(Math.sqrt(4)).toBe(2)
	expect(Math.sqrt(144)).toBe(12)
	expect(Math.sqrt(2)).toBe(Math.SQRT2)
})

test('JSON', () => {
	const input = {
		foo: 'hello',
		bar: 'world',
	}

	const output = JSON.stringify(input)

	expect(output).eq('{"foo":"hello","bar":"world"}')
	assert.deepEqual(JSON.parse(output), input, 'matches original')
})
