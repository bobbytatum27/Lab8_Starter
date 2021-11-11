// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');


// Phone number testing
test('phone num with parenthesis', () => {
    const num = '(805)303-4567';
    expect(functions.isPhoneNumber(num)).toBe(true);
});

test('phone number with dashes', () => {
    const num = '805-303-4567';
    expect(functions.isPhoneNumber(num)).toBe(true);
});

test('phone number with no dashes and yes characters', () => {
    const num = '+f80529308030345672';
    expect(functions.isPhoneNumber(num)).toBe(false);
});

test('phone number with letters', () => {
    const num = '805-303-4fjs672';
    expect(functions.isPhoneNumber(num)).toBe(false);
});

// Email testing
test('valid email with only letters', () => {
    const email = 'abc@abc.com';
    expect(functions.isEmail(email)).toBe(true);
});

test('valid email with letters and numbers', () => {
    const email = 'abc1@abc.com';
    expect(functions.isEmail(email)).toBe(true);
});

test('invalid email with invalid symbols', () => {
    const email = 'abc@#%^#&1@@^^Y@abc.com';
    expect(functions.isEmail(email)).toBe(false);
});

test('invalid email with no @ symbol', () => {
    const email = 'abc1abc.com';
    expect(functions.isEmail(email)).toBe(false);
});

// strong password testing
test('valid strong password', () => {
    const pw = 'w2509u';
    expect(functions.isStrongPassword(pw)).toBe(true);
});

test('valid strong password with underscore', () => {
    const pw = 'w25_09u';
    expect(functions.isStrongPassword(pw)).toBe(true);
});

test('invalid password with invalid characters', () => {
    const pw = 'w25_09u!@#%!!';
    expect(functions.isStrongPassword(pw)).toBe(false);
});

test('invalid password with too short a length', () => {
    const pw = 'w';
    expect(functions.isStrongPassword(pw)).toBe(false);
});

// test is date
test('valid simple date', () => {
    const d = '01/01/1990';
    expect(functions.isDate(d)).toBe(true);
});

test('another valid date', () => {
    const d = '1/2/1390';
    expect(functions.isDate(d)).toBe(true);
});

test('invalid date with letters', () => {
    const d = 'a/b/c';
    expect(functions.isDate(d)).toBe(false);
});

test('invalid date with symbols', () => {
    const d = '@#@^@@^a/b/c';
    expect(functions.isDate(d)).toBe(false);
});

// test hex color
test('valid hex color with 6 hex vals', () => {
    const c = '#AA59F0';
    expect(functions.isHexColor(c)).toBe(true);
});

test('valid hex color with 3 hex vals', () => {
    const c = '#FFF';
    expect(functions.isHexColor(c)).toBe(true);
});

test('invalid hex color with wrong length', () => {
    const c = '#FFsj23jkljljdsF';
    expect(functions.isHexColor(c)).toBe(false);
});

test('invalid hex color with wrong characters', () => {
    const c = '##@#^@^';
    expect(functions.isHexColor(c)).toBe(false);
});
// TODO - Part 2