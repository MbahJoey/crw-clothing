import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";
import { withRouter} from 'react-router-dom';

const CollectionPreview = ({ title, items, history, match }) => (
  <div className="collection-preview">
        <div className="title"
     onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}> {title.toUpperCase()}</div>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(( item ) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
