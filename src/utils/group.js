import _ from "lodash";

const groupByModuleName = (items) => {
  return _.groupBy(items, function (item) {
    return item.name;
  });
};

const groupByStartDate = (items) => {
  return _.groupBy(items, function (item) {
    return item.startdate.date;
  });
};

const groupByEndDate = (items) => {
  return _.groupBy(items, function (item) {
    return item.expirationdate.date;
  });
};

const groupByExecutor = (items) => {
  return _.groupBy(items, function (item) {
    return (
      item.executor.fullname.first_name + " " + item.executor.fullname.last_name
    );
  });
};

const groupByStatus = (items) => {
  let output = _.groupBy(items, function (item) {
    return item.status;
  });

  return _.mapKeys(output, function (undefined, key) {
    if (key === process.env.APPOINTED_ID) return "Назначена";
    else if (key === process.env.COMPLETED_ID) return "Выполнена";
    else if (key === process.env.FINISHED_ID) return "Завершена";
  });
};

const groupApi = {
  groupByModuleName,
  groupByStartDate,
  groupByEndDate,
  groupByExecutor,
  groupByStatus,
};

export default groupApi;
