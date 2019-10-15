class StudentList2 extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = { data: [] };
  	}

  	componentDidMount() {
  		fetch(offline_data)
  			.then(response  => response.json())
  			.then(data => (this.setState({data})));
  	}

	render() {
		return(
			<div style={{width: '100%'}}>
		      <Paper style={{width: '100%',overflowX: 'auto'}}>
		        <Table style={{minWidth: 650}} size="small">
		          <TableHead>
		            <TableRow>
		              <TableCell>No</TableCell>
		              <TableCell style={{width: '35%'}}>Name</TableCell>
		              <TableCell style={{width: '35%'}}>Address</TableCell>
		              <TableCell style={{width: '20%'}}>Option</TableCell>
		            </TableRow>
		          </TableHead>
		          <TableBody>
		            {rows.map(student => (
		              <TableRow key={student.name}>
		                <TableCell component="th" scope="row">
		                  {student.id}
		                </TableCell>
		                <TableCell>{student.name}</TableCell>
		                <TableCell>{student.address}</TableCell>
		                <TableCell>
		                	{/*<OptionButton />*/}
		                </TableCell>
		              </TableRow>
		            ))}
		          </TableBody>
		        </Table>
		      </Paper>
		    </div>
		)
	}
}