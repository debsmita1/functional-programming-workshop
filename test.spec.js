const data = require('./data');
const { convertDateStamps, getNames, getRegionCounts, getSeniors } = require('./utils');

const dateRegExp = /^(\w{3}\s){2}\d{2}\s\d{4}/;

describe('Functional Programming Utils', () => {
  it('should get the correct count of seniors', () => {
    const results = getSeniors(data);
    expect(results).toHaveLength(5);
  });

  it('should get only usernames', () => {
    const results = getNames(data);
    expect(results.length).toBe(13);
    results.forEach((result) => {
      expect(typeof result).toBe('string');
    });
  });

  it('should get the proper region counts', () => {
    const results = getRegionCounts(data);
    expect(results.APAC).toBe(10);
    expect(results.NA).toBe(2);
    expect(results.EMEA).toBe(1);
  });

  it('should convert timestamps to readable dates', () => {
    const results = convertDateStamps(data);
    results.forEach((result) => {
      expect(dateRegExp.test(result.hireDate)).toBe(true);
    });
  });
});
