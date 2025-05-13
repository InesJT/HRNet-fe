import { useState } from 'react';
import { Link } from "react-router";
import { useDispatch } from 'react-redux';
import { Controller, useForm, useController } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import ItModal from 'it-modal';
import "react-datepicker/dist/react-datepicker.css";

import { add } from '/src/redux/slices/employees';
import { ErrorText, InputText } from '/src/components';

import { states, departments } from '/src/utils';


const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  birthday: z.string().date(),
  startDate: z.string().date(),
  street: z.string().min(2),
  city: z.string().min(2),
  state: z.string().min(2),
  zip: z.string(),
  department: z.string().min(5),
});

const Home = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      birthday: '',
      startDate: '',
      street: '',
      city: '',
      state: '',
      zip: null,
      department: '',
    },
    resolver: zodResolver(schema),
  });

  const { field: stateField } = useController({ name: 'state', control });
  const { value: stateValue, onChange: stateOnChange, ...restStateField } = stateField;

  const { field: departmentField } = useController({ name: 'department', control });
  const { value: departmentValue, onChange: departmentOnChange, ...restDepartmentField } = departmentField;

  const onSubmit = (data) => {
    try {
      setErrorMessage(null);

      try {
        dispatch(add(data));
        setModalVisible(true);
      } catch (error) {
        setErrorMessage(error.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <main>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/current-employees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee" onSubmit={handleSubmit(onSubmit)}>
          <InputText
            name="firstName"
            register={register}
            placeholder="First Name"
            containerStyle="input-wrapper"
            labelTitle="First Name"
          />
          {errors.firstName && <ErrorText styleClass="error-text">{errors.firstName.message}</ErrorText>}
          <InputText
            name="lastName"
            register={register}
            placeholder="Last Name"
            containerStyle="input-wrapper"
            labelTitle="Last Name"
          />
          {errors.lastName && <ErrorText styleClass="error-text">{errors.lastName.message}</ErrorText>}

          <label htmlFor="birthday">Date of Birth</label>
          <Controller
            control={control}
            name='birthday'
            render={({ field }) => (
              <DatePicker
                placeholderText='Date of Birth'
                onChange={(date) => field.onChange(date ? date.toISOString().split('T')[0] : '')}
                selected={field.value ? new Date(field.value) : null}
              />
            )}
          />
          {errors.birthday && <ErrorText styleClass="error-text">{errors.birthday.message}</ErrorText>}
          <label htmlFor="startDate">Start Date</label>
          <Controller
            control={control}
            name='startDate'
            render={({ field }) => (
              <DatePicker
                placeholderText='Start Date'
                onChange={(date) => field.onChange(date ? date.toISOString().split('T')[0] : '')}
                selected={field.value ? new Date(field.value) : null}
              />
            )}
          />
          {errors.startDate && <ErrorText styleClass="error-text">{errors.startDate.message}</ErrorText>}
          <fieldset className="address">
            <legend>Address</legend>
            <InputText
              name="street"
              register={register}
              placeholder="Street"
              containerStyle="input-wrapper"
              labelTitle="Street"
            />
            {errors.street && <ErrorText styleClass="error-text">{errors.street.message}</ErrorText>}
            <InputText
              name="city"
              register={register}
              placeholder="City"
              containerStyle="input-wrapper"
              labelTitle="City"
            />
            {errors.city && <ErrorText styleClass="error-text">{errors.city.message}</ErrorText>}

            <label htmlFor="state-select">State</label>
            <Select
              id="state-select"
              className='select-input'
              placeholder="Select State"
              options={states}
              value={stateValue ? states.find(x => x.value === stateValue) : stateValue}
              onChange={option => stateOnChange(option ? option.value : option)}
              {...restStateField}
            />
            {errors.state && <ErrorText styleClass="error-text">{errors.state.message}</ErrorText>}

            <InputText
              name="zip"
              register={register}
              placeholder="Zip Code"
              containerStyle="input-wrapper"
              labelTitle="Zip Code"
            />
            {errors.zip && <ErrorText styleClass="error-text">{errors.zip.message}</ErrorText>}
          </fieldset>

          <label htmlFor="department-select">Department</label>
          <Select
            id="department-select"
            className='select-input'
            placeholder="Select Department"
            options={departments}
            value={departmentValue ? departments.find(x => x.value === departmentValue) : departmentValue}
            onChange={option => departmentOnChange(option ? option.value : option)}
            {...restDepartmentField}
          />
          {errors.department && <ErrorText styleClass="error-text">{errors.department.message}</ErrorText>}
          {errorMessage && <ErrorText styleClass="error-text">{errorMessage}</ErrorText>}
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
      <ItModal
        isVisible={modalVisible}
        setIsVisible={setModalVisible}
        body="Employee Created!"
      />
    </main>
  );
};

export default Home;
