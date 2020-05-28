import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import * as crudActions from "../../store/actions/crud";
import CrudTable from "../../components/CrudTable/CrudTable";

class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "column1", field: "column1" },
        { title: "column2", field: "column2" },
        {
          title: "column3",
          field: "column3",
          lookup: { option1: "option1", option2: "option2" },
        },
        {
          title: "column3",
          field: "column3",
        },
        {
          field: "more",
          title: "More",
          render: (rowData) => (
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.moreDetailsHandler(rowData)}
            >
              More Details
            </Button>
          ),
        },
      ],
    };
  }
  moreDetailsHandler = (Row) => {};

  componentDidMount() {
    this.props.getRows();
  }

  componentDidUpdate() {}

  addRowHandler = (Row) => {
    this.props.addRow(Row);
  };
  updateRowHandler = (Row) => {
    this.props.updateRow(Row);
  };
  deleteRowHandler = (Row) => {
    this.props.deleteRow(Row);
  };

  render() {
    return (
      <>
        <CrudTable
          data={this.props.Rows}
          columns={this.state.columns}
          addRowHandler={this.addRowHandler}
          updateRowHandler={this.updateRowHandler}
          deleteRowHandler={this.deleteRowHandler}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  rows: state.crud.rows,
});

const mapDispatchToProps = (dispatch) => ({
  getRows: () => dispatch(crudActions.getRows()),
  addRow: (Row) => dispatch(crudActions.addRow(Row)),
  updateRow: (Row) => dispatch(crudActions.updateRow(Row)),
  deleteRow: (Row) => dispatch(crudActions.deleteRow(Row)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Crud);
