const getNames = (list) => list.map((emp) => emp.userId);
const getSeniors = (list) => list.filter((emp) => emp.title.includes("Senior"));
const getRegionCounts = (list) =>
  list.reduce(
    (acc, emp) => ({
      ...acc,
      [emp.region]: (acc[emp.region] || 0) + 1,
    }),
    {}
  );
const convertDateStamps = (list) =>
  list.map((emp) => ({ ...emp, hireDate: new Date(emp.hire).toString() }));

module.exports = {
  convertDateStamps,
  getNames,
  getSeniors,
  getRegionCounts,
};
