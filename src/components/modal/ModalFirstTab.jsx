import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { locale } from '../../locales';
import { validate } from '../../configs/fieldValidation';
import { MODAL_KEY, COLLECTION_KEY } from '../../constants/projectConstants';
import { Input } from '../common/inputs';
import { Button } from '../common/button';

import css from './style.module.css';

const ModalFirstTab = ({ handleSubmit, handleCloseModal }) => (
  <form onSubmit={handleSubmit} className={css.modalForm}>
    <div>
      <Field name="code" type="text" component={Input} label={locale.formFields.code} />
      <Field type="text" name="name" component={Input} label={locale.formFields.name} />
      <Field type="text" name="price" component={Input} label={locale.formFields.price} />
      <Field type="text" name="shelfLife" component={Input} label={locale.formFields.expiration} />
    </div>
    <div className={css.modalControl}>
      <Button secondary onClick={handleCloseModal}>
        {locale.projectButtons.cancel}
      </Button>
      <Button primary type="submit">
        {locale.projectButtons.next}
      </Button>
    </div>
  </form>
);

ModalFirstTab.propTypes = {
  handleSubmit: PropTypes.func,
  handleCloseModal: PropTypes.func,
};

export default compose(
  connect(({ firestore: { ordered } }, { editId }) => ({
    initialValues:
      editId && ordered[COLLECTION_KEY].find((medicine) => medicine.id === editId && medicine),
  })),
  reduxForm({
    form: MODAL_KEY,
    destroyOnUnmount: false,
    validate,
  }),
)(ModalFirstTab);
