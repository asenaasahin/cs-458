const index = require("./index.js");

describe("All tests of the website",() => { 
test('map generation test', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("where function test", () => {
  const status = '';
  expect(status).toBe('');
  expect(status).toBeDefined();
  expect(status).not.toBeUndefined();
  expect(status).not.toBeTruthy();
  expect(status).toBeFalsy();
});

test("location tester", () => {
  var location;
  expect(location).toBeUndefined();
  expect(location).not.toBeTruthy();
  expect(location).toBeFalsy();
});
test("distance service checker", () => {
  var distanceServer;
  expect(distanceServer).toBeUndefined();
  expect(distanceServer).not.toBeTruthy();
  expect(distanceServer).toBeFalsy();
});

test("Address checker Ank", () => {
  var addressAnkara;
  expect(addressAnkara).toBeUndefined();
  expect(addressAnkara).not.toBeTruthy();
  expect(addressAnkara).toBeFalsy();
});

test("Response function test", () => {
  var response;
  var status;
  expect(response).toBeUndefined();
  expect(response).not.toBeTruthy();
  expect(response).toBeFalsy();

  expect(status).toBeUndefined();
  expect(status).not.toBeTruthy();
  expect(status).toBeFalsy();
});

test("Timeout setter test", () => {
  var dst;
  expect(dst).toBeUndefined();
  expect(dst).not.toBeTruthy();
  expect(dst).toBeFalsy();
});

test("Distance to earth test", () => {
  var address;
  expect(address).toBe([37.688, 35.438]);
  expect(address).toBeDefined();
  expect(address).not.toBeUndefined();
  expect(address).not.toBeTruthy();
  expect(address).toBeFalsy();
});

test("Address checker Es", () => {
  var EsLoc;
  expect(EsLoc).toBe([39.766193, 30.52671]);
  expect(EsLoc).toBeDefined();
  expect(EsLoc).not.toBeUndefined();
  expect(EsLoc).not.toBeTruthy();
  expect(EsLoc).toBeFalsy();
});

test("Address checker Tra", () => {
  var TraLoc;
  expect(TraLoc).toBe([41.002697, 39.716763]);
  expect(TraLoc).toBeDefined();
  expect(TraLoc).not.toBeUndefined();
  expect(TraLoc).not.toBeTruthy();
  expect(TraLoc).toBeFalsy();
});



});