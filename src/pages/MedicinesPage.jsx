import React, { useState } from 'react';

import { MedicinesList } from '../components/medicinesList';
import { Plus as ButtonPlus } from '../components/common/plus';

import css from './style.module.css';

const MedicinesPage = () => {
  const [isShow, setShow] = useState(false);

  const onOpenForm = () => {
    setShow(true);
  };

  const onEdit = (id) => {
    onOpenForm();
  };

  return (
    <div className={css.medicinesContainer}>
      <MedicinesList onEdit={onEdit} />
      {isShow && <div>Modal</div>}
      <ButtonPlus onClick={onOpenForm} className={css.medicinesPlus} />
    </div>
  );
};

export { MedicinesPage };
