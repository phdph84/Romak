import React, { useState, useMemo, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function AGGrid({ pro }) {
  const gridRef = useRef();
  const [columnDefs] = useState([
    { field: "id", filter: "agNumberColumnFilter", maxWidth: 120 },
    { field: "title", filter: "agTextColumnFilter" },
    { field: "price", filter: "agNumberColumnFilter", maxWidth: 120 },
  ]);
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      floatingFilter: true,
      flex: 1,
      //   filterParams: {
      //     debounceMs: 0,
      //   },
    }),
    []
  );
  const cellClickedListener = useCallback((e) => {
    console.log("cellclicked", e);
  });

  return (
    <div style={{ marginBottom: "50px" }}>
      <h4 style={{ color: "#0651b9" }}>لیست محصولات - استفاده از AG-Grid</h4>
      <div
        className="ag-theme-alpine"
        style={{ width: 700, height: 510, margin: "auto" }}
      >
        <AgGridReact
          ref={gridRef}
          onCellClicked={cellClickedListener}
          loadingOverlayComponent={"لطفا منتظر بمانید."}
          loadingOverlayComponentParams={{ name: "لطفا منتظر بمانید." }}
          popupParent={document.body}
          rowData={pro}
          columnDefs={columnDefs}
          animateRows={true}
          rowSelection="multiple"
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
}

export default AGGrid;
