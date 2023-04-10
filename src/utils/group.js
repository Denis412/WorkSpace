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

const groupApi = { groupByModuleName, groupByStartDate };

export default groupApi;
