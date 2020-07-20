import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { locale } from '../../locales';
import { validate } from '../../configs/fieldValidation';
import { MODAL_KEY } from '../../constants/projectConstants';
import { Button } from '../common/button';
import { Input } from '../common/inputs';

import css from './style.module.css';

const ModalSecondTab = ({ handleSubmit, prevTab, handleCloseModal }) => (
  <form onSubmit={handleSubmit}>
    <div className={css.modalFields}>
      <Field
        type="textarea"
        name="compositionAndFormOfRelease"
        component={Input}
        label={locale.formFields.composition}
      />
      <Field
        type="textarea"
        name="indication"
        component={Input}
        label={locale.formFields.indication}
      />
      <Field
        type="textarea"
        name="contraindications"
        component={Input}
        label={locale.formFields.contraindication}
      />
    </div>
    <div className={css.modalControl}>
      <Button secondary onClick={handleCloseModal}>
        {locale.projectButtons.cancel}
      </Button>
      <Button secondary onClick={prevTab}>
        {locale.projectButtons.prev}
      </Button>
      <Button primary type="submit">
        {locale.projectButtons.create}
      </Button>
    </div>
  </form>
);

ModalSecondTab.propTypes = {
  handleSubmit: PropTypes.func,
  handleCloseModal: PropTypes.func,
  prevTab: PropTypes.func,
};

export default reduxForm({ form: MODAL_KEY, destroyOnUnmount: false, validate })(ModalSecondTab);
