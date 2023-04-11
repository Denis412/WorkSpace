import _ from 'lodash';

const groupByModuleName = (items)=>{
  return _.groupBy(items, function (item){
    return item.name;
  })
}

const groupByStartDate = (items)=>{
  return _.groupBy(items, function (item){
    return item.property5.date;
  })
}

const groupByEndDate = (items)=>{
  return _.groupBy(items, function (item){
    return item.property6.date;
  })
}

const groupByExecutor = (items)=>{
  return _.groupBy(items, function (item){
    return item.property2.fullname.first_name+" "+item.property2.fullname.last_name;
  })
}

const groupByStatus = (items)=>{
  let output = _.groupBy(items, function (item){
    return item.property3;
  });

  return _.mapKeys(output,function(undefined,key){
    if(key=="5008436242887479508")
      return "Назначена"
    else if(key=="876630288677854240")
      return "Выполнена"
    else if(key=="2623801275564549881")
      return "Завершена"
  })
}

const groupApi = { groupByModuleName, groupByStartDate, groupByEndDate, groupByExecutor, groupByStatus };

export default groupApi;
