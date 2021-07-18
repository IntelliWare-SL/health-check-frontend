import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { getDoctors, setFilter } from '../redux/doctorsActions';

const GreenCheckbox = withStyles({
  root: {
    color: 'gray',
    '&$checked': {
      color: '#00b074',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Filter() {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [jobFields, setJobFields] = React.useState([
    'Cardiologists',
    'Dermatologists',
    'Neurologists',
    'Paediatricians',
    'Psychiatrists',
    'Radiologists',
    'Urologists',
    'Allergists',
  ]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => {
      dispatch(setFilter([]));
    };
  }, []);

  const handleCheckBoxChange = (event) => {
    if (event.target.checked) {
      const newFilter = [...selectedItems, event.target.name];
      setSelectedItems(newFilter);
      dispatch(setFilter(newFilter));
    } else {
      const newFilter = selectedItems.filter((el) => el !== event.target.name);
      setSelectedItems(newFilter);
      dispatch(setFilter(newFilter));
    }
    dispatch(getDoctors());
  };

  return (
    <div style={{ padding: '0px 50px', position: 'fixed', top: 125 }}>
      <div style={{ fontSize: 25, fontWeight: 600, marginBottom: 15 }}>
        Job Field
      </div>
      {jobFields.map((el, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <GreenCheckbox onChange={handleCheckBoxChange} name={el} />
          </div>
          <div>{el}</div>
        </div>
      ))}
    </div>
  );
}

export default Filter;
