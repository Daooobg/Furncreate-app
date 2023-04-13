import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RiAccountCircleLine } from 'react-icons/ri';
import { ShoppingButtons } from '../../hooks/useButtons';
import { getAllUsers, updateUserRole } from '../../services/userServices';
import { formField } from '../../UI/helpers';
import classes from './ActionUsers.module.css';

const ActionUsers = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getAllUsers().then((data) => setUserData(data));
  }, []);
  console.log('userData', userData.length);

  if (userData.length > 0) {
    const data = userData.map((user, index) => {
      return <ActionForm key={index} data={user} />;
    });
    return data;
  }

  return;
};

export default ActionUsers;

const ActionForm = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(props.data);
  const [disable, setDisable] = useState(true);
  const editHandler = () => setDisable(false);

  const changeProduct = (e) => {
      let name = e.target.name;
      setData((state) => ({...state, [name]: e.target.value}))
      console.log(name, data)
  };
  const submitHandler = (e) => {
    e.preventDefault();
    updateUserRole({id:data._id, role:data.role})
    setDisable(true);
  };
  // const deleteHandler = () => {
  //   dispatch(deleteProductData(data._id));
  // };

  return (
    <>
      <form className={classes.form}>
        <h5>Name: {data.name}  Email: {data.email}  Id: {data._id}</h5>
        {formField('role', 'text', data.role, changeProduct, disable)}
      </form>
      <div>
        <ShoppingButtons
          content={disable ? 'edit' : 'confirm edit'}
          action={disable ? editHandler : submitHandler}
        />
      </div>
    </>
  );
};
