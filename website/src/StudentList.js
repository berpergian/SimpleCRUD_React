import React from 'react';
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const online_data = "https://api.jsonbin.io/b/5d9c2479ee799949207cb48f"
const offline_data = "http://localhost:4000/student"

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

class StudentList extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = { 
    		columns: [
    			{ title: 'No', field: 'id', editable: 'never'},
    			{ title: 'Name', field: 'name'},
    			{ title: 'Address', field: 'address'},
    		],
    		data: [
    			/*{ id: 1, name: 'Mehmet', address: 'Baran'},
        		{ id: 2, name: 'Zerya Betül', address: 'dasdsadsa'},*/
    		],
        name: '',
        address: '',
    	};
  	}

  	componentDidMount() {
  		fetch(offline_data)
  			.then(response  => response.json())
  			.then(data => (this.setState({data})));
  	}

    addStudent(inputData) {
      var data = {
        name: inputData.name,
        address: inputData.address
      }

      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }

      fetch("http://localhost:4000/addstudent", options).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      }).then(function(data) {
        console.log(data);
      }).catch(function(err){
        console.log(err);
      })
    }

  	render() {
  		return(
  			<MaterialTable
  				icons={tableIcons}
  				title="Student List"
  				columns={this.state.columns}
  				data={this.state.data}
  				editable={{
  					onRowAdd: newData =>
  						new Promise((resolve, reject) => {
  							setTimeout(() => {
  								{
  									const data = this.state.data;
  									data.push(newData);
                    console.log(newData);
                    this.addStudent(newData);
  									this.setState({ data }, () => resolve());
  								}
  								resolve()
  							}, 1000)
  						}),
  					onRowUpdate: (newData, oldData) =>
  						new Promise((resolve, reject) => {
  							setTimeout(() => {
  								{
  									const data = this.state.data;
  									const index = data.indexOf(oldData);
  									data[index] = newData;
  									this.setState({ data }, () => resolve());
  								}
  								resolve()
  							}, 1000)
  						}),
  					onRowDelete: oldData =>
  						new Promise((resolve, reject) => {
  							setTimeout(() => {
  								{
  									let data = this.state.data;
  									const index = data.indexOf(oldData);
  									data.splice(index, 1);
  									this.setState({ data }, () => resolve());
  								}
  								resolve()
  							}, 1000)
  						}),
  				}}
  				options={{
  					paging: true
  				}}
  			/>
  		)
  	}
}

export default StudentList