import React from "react";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import {
  Check,
  DeleteOutline,
  Edit,
  SaveAlt,
  FilterList,
  FirstPage,
  LastPage,
  ChevronRight,
  ChevronLeft,
  Clear,
  Search,
  ArrowUpward,
  Remove,
  ViewColumn,
} from "@material-ui/icons";

export default function CrudTable(props) {
  return (
    <MaterialTable
      title="Basic Crud"
      columns={props.columns}
      data={props.data}
      icons={{
        Add: () => {
          return (
            <Button variant="contained" color="primary">
              Add Row
            </Button>
          );
        },
        Check: Check,
        ResetSearch: Clear,
        Clear: Clear,
        Delete: DeleteOutline,
        NextPage: ChevronRight,
        DetailPanel: ChevronRight,
        Edit: Edit,
        SaveAlt: SaveAlt,
        FilterList: FilterList,
        FirstPage: FirstPage,
        LastPage: LastPage,
        PreviousPage: ChevronLeft,
        Search: Search,
        ArrowUpward: ArrowUpward,
        Remove: Remove,
        ViewColumn: ViewColumn,
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            props.addRowHandler(newData);
            resolve();
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            newData["editedIndex"] = oldData.tableData.id;
            props.updateRowHandler(newData);
            resolve();
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            props.deleteRowHandler(oldData);
            resolve();
          }),
      }}
    />
  );
}
