import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => (
  <div className="container loading">
    <div className="row">
      <div className="col-md-12 text-center">
        <CircularProgress />
      </div>
    </div>
  </div>
);

export default Loading;
