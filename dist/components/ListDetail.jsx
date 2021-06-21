import * as React from 'react';
var ListDetail = function (_a) {
    var user = _a.item;
    return (<div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>);
};
export default ListDetail;
