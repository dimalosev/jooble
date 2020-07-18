import React from 'react';
import PropTypes from 'prop-types';

import { MedicinesItem } from '../medicinesItem';

import css from './style.module.css';

const MedicinesList = (medicinesItems, onDelete, onEdit) => (
  <div className={css.medicinesList}>
    {medicinesItems.map(({ id, code, name, price }) => (
      <MedicinesItem
        id={id}
        key={id}
        medicineInfo={{ code, name, price }}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    ))}
  </div>
);

MedicinesList.propTypes = {
  medicinesItems: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export { MedicinesList };
