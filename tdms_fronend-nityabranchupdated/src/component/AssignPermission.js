import React, { Component } from 'react';
import { connect } from "react-redux";
import { getPermissions } from "../actions/permissionActions";
import { PropTypes } from "prop-types";

class AssignPermission extends Component {
  componentDidMount() {
    this.props.getPermissions();
  }
  render() {
    const { permissions } = this.props.permissions;
    return (

      <table className="table table-striped table-bordered" id="assign_table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Permissions</th>
            <th scope="col" className="text-center">Roles</th>
          </tr>
        </thead>

        <tbody>
        {permissions.map(permission => (
          <tr>
            <th scope="row">{permission.id}</th>
            <td>{permission.permissionName}</td>
            <td>
              <div>

                <div className="input-group mb-3 float-left" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Trainee</label>
                </div>

                <div className="input-group mb-3 float-left ml-4" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Trainer</label>
                </div>


                <div className="input-group mb-3 float-right" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Manager</label>
                </div>


              </div>

            </td>

          </tr>


))}
          

          {/* <tr>
            <th scope="row">2</th>
            <td>Add Trainer</td>
            <td>
              <div>

                <div className="input-group mb-3 float-left" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Trainee</label>
                </div>

                <div className="input-group mb-3 float-left ml-4" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Trainer</label>
                </div>


                <div className="input-group mb-3 float-right" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Manager</label>
                </div>


              </div>

            </td>

          </tr>

          <tr>
            <th scope="row">3</th>
            <td>Add Trainee</td>
            <td>
              <div>

                <div className="input-group mb-3 float-left" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Trainee</label>
                </div>

                <div className="input-group mb-3 float-left ml-4" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Trainer</label>
                </div>


                <div className="input-group mb-3 float-right" id="roles_checkbox">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <label className="form-control" aria-label="Text input with checkbox">Manager</label>
                </div>


              </div>

            </td>

          </tr> */}

        </tbody>
      </table>
    )
  }


}
AssignPermission.propTypes = {
  permission: PropTypes.object.isRequired,
  getPermissions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  permissions: state.permissions
});

export default connect(
  mapStateToProps,
  { getPermissions }
)(AssignPermission);

