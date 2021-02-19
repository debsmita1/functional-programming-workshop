const getNames = (list) => list.map((d) => d.name);
const getSeniors = (list) => list.filter((d) => d.title.includes('Senior'));
const getRegionCounts = (list) =>
  list.reduce(
    (acc, d) => ({ ...acc, [d.region]: (acc[d.region] || 0) + 1 }),
    {},
  );
const convertDateStamps = (list) => list.map((d) => ({ ...d, hireDate: new Date(d.hire).toDateString() }));

module.exports = {
  convertDateStamps,
  getNames,
  getSeniors,
  getRegionCounts,
};
