import React, {useState} from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import {HeroForm} from '../../components';

interface gridData{
  data:{
    id?:string;
  }
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1, width: 90 },
  {
    field: 'name',
    headerName: 'name',
    width: 150,
    editable: true,
  },
  {
    field: 'backstory',
    headerName: 'Backstory',
    width: 150,
    editable: true,
  },
  {
    field: 'first_name',
    headerName: 'First Name',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'last_name',
    headerName: 'Last Name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 90,
  },
  {
    field: 'powers',
    headerName: 'Powers',
    width: 150,

  },
  {
    field: 'weaknesses',
    headerName: 'Weaknesses',
    width: 150,
  },
  {
    field: 'foes',
    headerName: 'Foes',
    width: 150,
  },
  {
    field: 'lives_saved',
    headerName: 'Lives Saved',
    width: 100,
  },
  {
    field: 'spouse',
    headerName: 'Spouse',
    width: 150,
  },

];

export const DataTable =  () => {
  let { heroData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    serverCalls.delete(`${gridData[0]}`)
    getData()
  }
  console.log(gridData)

    return (
      <div style={{ height: 400, width: '100%' }}>
          <h2>Heroes in League</h2>
          <DataGrid 
						rows={heroData} 
						columns={columns} 
						pageSize={5} 
						checkboxSelection 
						onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
						{...heroData}
        />
        <Button onClick={handleOpen} color='primary'>Update</Button>
        <Button onClick={deleteData} color='warning'>Delete</Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update A Hero</DialogTitle>
          <DialogContent>
            <DialogContentText>Hero id: {gridData[0]}</DialogContentText>
              <HeroForm id={`${gridData[0]}`}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
      </div>
    );
  }
