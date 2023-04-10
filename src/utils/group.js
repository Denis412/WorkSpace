import _ from 'lodash';

const groupByModuleName = (items)=>{
  return Object.values(_.groupBy(items, function (item){
    return item.name;
  }))
}

const groupByStartDate = (items)=>{
  return Object.values(_.groupBy(items, function (item){
    return item.property5.date;
  }))
}

const groupByEndDate = (items)=>{
  return Object.values(_.groupBy(items, function (item){
    return item.property6.date;
  }))
}

const groupByExecutor = (items)=>{
  return Object.values(_.groupBy(items, function (item){
    return item.property2.id;
  }))
}

const groupByStatus = (items)=>{
  return Object.values(_.groupBy(items, function (item){
    return item.property3;
  }))
}

const groupApi = { groupByModuleName, groupByStartDate, groupByEndDate, groupByExecutor, groupByStatus };

export default groupApi;
