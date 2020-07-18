import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { locale } from '../../locales';
import { Button } from '../common/button';

import css from './style.module.css';

const MedicinesItem = ({ id, medicineInfo, onEdit, onDelete }) => {
  const onDeleteDrugItem = useCallback(() => onDelete(id), [id]);
  const onEditDrugItem = useCallback(() => onEdit(id), [id]);

  return (
    <div className={css.medicineItem} onDoubleClick={onEdit}>
      <div className={css.medicineItemInfo}>
        {Object.keys(medicineInfo).map((info) => (
          <span className={css.medicineItemText}>{medicineInfo[info]}</span>
        ))}
      </div>
      <div className={css.medicineItemButtons}>
        <Button primary onClick={onEditDrugItem}>
          {locale.projectButtons.edit}
        </Button>
        <Button secondary onClick={onDeleteDrugItem}>
          {locale.projectButtons.delete}
        </Button>
      </div>
    </div>
  );
};

MedicinesItem.propTypes = {
  id: PropTypes.string,
  medicineInfo: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export { MedicinesItem };
