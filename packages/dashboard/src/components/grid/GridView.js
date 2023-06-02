import React from "react";
import { DataGrid } from "@material-ui/data-grid";

export default function GridView({ columns, rows, pageSize }) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
