import { useEffect, useState } from 'react';
import { ShoppingButtons } from '../../hooks/useButtons';
import { updateLoginUserData } from '../../services/userServices';
import { formField } from '../../UI/helpers';
import classes from './ActionProfile.module.css';

const ActionProfile = (props) => {
  const [userData, setUserData] = useState({
    ...props.userData,
    address: {
      phoneNumber: '',
      firstLine: '',
      secondLine: '',
      city: '',
      county: '',
      postcode: '',
      ...props.userData.address,
    },
    shippingAddress: {
      phoneNumber: '',
      firstLine: '',
      secondLine: '',
      city: '',
      county: '',
      postcode: '',
      ...props.userData.shippingAddress,
    },
  });

  const [checked, setChecked] = useState(false);

  const [disable, setDisable] = useState(true);

  const changeUserDataHandler = (e) => {
    let targetName = e.target.name;
    const value = e.target.value;
    if (targetName === 'name' || targetName === 'email') {
      setUserData((state) => ({ ...state, [targetName]: value }));
    }
    //billing address
    else if (targetName === 'phone number') {
      targetName = 'phoneNumber';
      setUserData((state) => ({
        ...state,
        address: { ...state.address, [targetName]: value },
      }));
    } else if (targetName === 'first line') {
      targetName = 'firstLine';
      setUserData((state) => ({
        ...state,
        address: { ...state.address, [targetName]: value },
      }));
    } else if (targetName === 'second line') {
      targetName = 'secondLine';
      setUserData((state) => ({
        ...state,
        address: { ...state.address, [targetName]: value },
      }));
    } else if (
      targetName === 'city' ||
      targetName === 'county' ||
      targetName === 'postcode'
    ) {
      setUserData((state) => ({
        ...state,
        address: { ...state.address, [targetName]: value },
      }));
    }
    //shipping address
    else if (targetName === 'shipping phone number') {
      targetName = 'phoneNumber';
      setUserData((state) => ({
        ...state,
        shippingAddress: { ...state.shippingAddress, [targetName]: value },
      }));
    } else if (targetName === 'shipping first line') {
      targetName = 'firstLine';
      setUserData((state) => ({
        ...state,
        shippingAddress: { ...state.shippingAddress, [targetName]: value },
      }));
    } else if (targetName === 'shipping second line') {
      targetName = 'secondLine';
      setUserData((state) => ({
        ...state,
        shippingAddress: { ...state.shippingAddress, [targetName]: value },
      }));
    } else if (
      targetName === 'shipping city' ||
      targetName === 'shipping county' ||
      targetName === 'shipping postcode'
    ) {
      targetName = targetName.split(' ');
      console.log(targetName[1]);
      setUserData((state) => ({
        ...state,
        shippingAddress: { ...state.shippingAddress, [targetName[1]]: value },
      }));
    }
  };

  const checkedHandler = () => {
    setChecked((state) => !state);
  };

  const editHandler = () => {
    setDisable(false);
  };

  const sendUpdateData = () => {
    setDisable(true);

    updateLoginUserData(userData, checked);
  };

  return (
    <>
      <form className={classes['form-container']}>
        {formField('name', 'text', userData.name, changeUserDataHandler, true)}
        {formField(
          'email',
          'email',
          userData.email,
          changeUserDataHandler,
          true
        )}
        <h1>Billing Address</h1>
        {formField(
          'phone number',
          'text',
          userData.address.phoneNumber,
          changeUserDataHandler,
          disable
        )}
        {formField(
          'first line',
          'text',
          userData.address.firstLine,
          changeUserDataHandler,
          disable
        )}
        {formField(
          'second line',
          'text',
          userData.address.secondLine,
          changeUserDataHandler,
          disable
        )}
        {formField(
          'city',
          'text',
          userData.address.city,
          changeUserDataHandler,
          disable
        )}
        {formField(
          'county',
          'text',
          userData.address.county,
          changeUserDataHandler,
          disable
        )}
        {formField(
          'postcode',
          'text',
          userData.address.postcode,
          changeUserDataHandler,
          disable
        )}
        <div className={classes['check-box']}>
          <input
            type="checkbox"
            id="shipping"
            name="shipping"
            value={checked}
            onClick={checkedHandler}
          />
          <label htmlFor="shipping" type="checkbox">
            The billing address is the same as the shipping?
          </label>
        </div>

        {!checked && (
          <>
            <h1>Shipping Address</h1>
            {formField(
              'shipping phone number',
              'text',
              userData.shippingAddress.phoneNumber,
              changeUserDataHandler,
              disable
            )}
            {formField(
              'shipping first line',
              'text',
              userData.shippingAddress.firstLine,
              changeUserDataHandler,
              disable
            )}
            {formField(
              'shipping second line',
              'text',
              userData.shippingAddress.secondLine,
              changeUserDataHandler,
              disable
            )}
            {formField(
              'shipping city',
              'text',
              userData.shippingAddress.city,
              changeUserDataHandler,
              disable
            )}
            {formField(
              'shipping county',
              'text',
              userData.shippingAddress.county,
              changeUserDataHandler,
              disable
            )}
            {formField(
              'shipping postcode',
              'text',
              userData.shippingAddress.postcode,
              changeUserDataHandler,
              disable
            )}
          </>
        )}
      </form>
      <br />
      <ShoppingButtons
        content={disable ? 'edit' : 'confirm edit'}
        action={disable ? editHandler : sendUpdateData}
      />
    </>
  );
};

export default ActionProfile;
