import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { locale } from '../../locales';
import { validate } from '../../configs/fieldValidation';
import { MODAL_KEY } from '../../constants/projectConstants';
import { Button } from '../common/button';
import { TextArea } from '../common/inputs';

import css from './style.module.css';

const ModalSecondTab = ({ editId, handleSubmit, prevTab, handleCloseModal }) => (
  <form onSubmit={handleSubmit} className={css.modalForm}>
    <div>
      <Field
        type="textarea"
        name="compositionAndFormOfRelease"
        component={TextArea}
        label={locale.formFields.composition}
      />
      <Field
        type="textarea"
        name="indication"
        component={TextArea}
        label={locale.formFields.indication}
      />
      <Field
        type="textarea"
        name="contraindications"
        component={TextArea}
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
        {editId ? locale.projectButtons.edit : locale.projectButtons.create}
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
