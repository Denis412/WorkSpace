const sortASCByCreate = (item) => {
  const sortItem = [];
  Object.assign(sortItem, item);
  return sortItem.sort(function (a, b) {
    const d1 = new Date(a.created_at);
    const d2 = new Date(b.created_at);
    return d1 - d2;
  });
};

const sortDESCByCreate = (item) => {
  const sortItem = [];
  Object.assign(sortItem, item);
  return sortItem.sort(function (a, b) {
    const d1 = new Date(a.created_at);
    const d2 = new Date(b.created_at);
    return d2 - d1;
  });
};

const sortByModuleName = (item) => {
  const sortItem = [];
  Object.assign(sortItem, item);
  return sortItem.sort((a, b) => a.name.localeCompare(b.name));
};

const sortApi = { sortASCByCreate, sortDESCByCreate, sortByModuleName };

export default sortApi;
