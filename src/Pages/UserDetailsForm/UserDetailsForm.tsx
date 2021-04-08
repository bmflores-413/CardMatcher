import { Form, Formik, FormikProps } from "formik";
import { Dropdown, Input, DatePicker, Card, Button } from "../../Components";
import { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from "../../Contexts/UserContext";
import { FORM_TITLE, INITIAL_USER, OCCUPATION_DROPDOWN_OPTIONS, TITLE_DROPDOWN_OPTIONS, VALIDATION_SCHEMA } from "./constants";
import { PageLayout } from "../PageLayout";

import styles from './UserDetailsForm.module.scss'


export const UserDetailsForm = () => {
  const { onSetUser } = useContext(UserContext);
  const history = useHistory();
    
  const navigateToMatches = () => {
    history.push('/matches')
  }

  return (
    <PageLayout title={'Welcome!'}>
      <Card title={FORM_TITLE}>
      <Formik
        initialValues={INITIAL_USER}
        onSubmit={async (values) => {
          onSetUser({
            title: values.title!,
            firstName: values.firstName,
            lastName: values.lastName,
            occupation: values.occupation!,
            dateOfBirth: values.dateOfBirth,
            address: values.address,
            annualIncome: values.annualIncome
          });
          navigateToMatches()
        }}
        validationSchema={VALIDATION_SCHEMA}
        >
        {(props: FormikProps<any>) => {
          return(
            <Form>
              <div className={styles.formInputGroup} data-testid={'name-form-group'}>
                <Dropdown items={TITLE_DROPDOWN_OPTIONS} name={'title'} labelText={'Title'} className={styles.formInputGroupItem}/>
                <Input name={'firstName'} labelText={'First Name'} className={styles.formInputGroupItem}/>
                <Input name={'lastName'} labelText={'Last Name'} className={styles.formInputGroupItem}/>
              </div>
              <DatePicker name={'dateOfBirth'} labelText={'Date of Birth'}/>
              <div className={styles.formInputGroup} data-testid={'address-form-group'}>
                <Input name={'address.houseNumber'} labelText={'House Number'} className={styles.formInputGroupItem}/>
                <Input name={'address.postCode'} labelText={'Postcode'} className={styles.formInputGroupItem}/>
              </div>
              <div className={styles.formInputGroup} data-testid={'occupation-form-group'}>
                <Dropdown items={OCCUPATION_DROPDOWN_OPTIONS} name={'occupation'} labelText={'Occupation'} className={styles.formInputGroupItem}/>
                <Input name={'annualIncome'} labelText={'Annual Income'} className={styles.formInputGroupItem}/>
              </div>
              <div className={styles.submitButton}>
                <Button type={'submit'}>Submit</Button>
              </div>
            </Form>
          )
        }}
      </Formik>
      </Card> 
    </PageLayout>
  )
}