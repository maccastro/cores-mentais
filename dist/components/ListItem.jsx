import React from 'react';
import Link from 'next/link';
var ListItem = function (_a) {
    var data = _a.data;
    return (<Link href="/users/[id]" as={"/users/" + data.id}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>);
};
export default ListItem;
