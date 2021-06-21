import * as React from 'react';
import ListItem from './ListItem';
var List = function (_a) {
    var items = _a.items;
    return (<ul>
    {items.map(function (item) { return (<li key={item.id}>
        <ListItem data={item}/>
      </li>); })}
  </ul>);
};
export default List;
