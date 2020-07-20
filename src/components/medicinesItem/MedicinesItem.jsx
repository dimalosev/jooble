import React from 'react';
import PropTypes from 'prop-types';

import { locale } from '../../locales';
import { Button } from '../common/button';

import css from './style.module.css';

const MedicinesItem = ({ id, medicineInfo, onEdit, onDelete }) => (
  <div className={css.medicineItem} onDoubleClick={() => onEdit(id)}>
    <div className={css.medicineItemInfo}>
      {Object.keys(medicineInfo).map((info) => (
        <span key={info} className={css.medicineItemText}>
          {medicineInfo[info]}
        </span>
      ))}
    </div>
    <div className={css.medicineItemButtons}>
      <Button primary onClick={() => onEdit(id)}>
        {locale.projectButtons.edit}
      </Button>
      <Button secondary onClick={() => onDelete(id)}>
        {locale.projectButtons.delete}
      </Button>
    </div>
  </div>
);

MedicinesItem.propTypes = {
  id: PropTypes.string,
  medicineInfo: PropTypes.object,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export { MedicinesItem };
