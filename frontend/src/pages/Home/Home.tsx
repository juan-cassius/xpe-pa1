import {
  // Pagination,
  Typography
} from '@mui/material';
import Main from '../../components/Main';
import './Home.css';

export default function Home() {

  return (
    <div className='home-div'>
      <div className='home-body'>
        <Typography
          variant='h4'
          className='title-element'
        >Pacientes</Typography>
        <Main />
      </div>
    </div>
  )
}
