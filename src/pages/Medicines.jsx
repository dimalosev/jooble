import React, { useState } from 'react';

import { MedicinesList } from '../components/medicinesList';
import { Plus as ButtonPlus } from '../components/common/plus';
import { Modal } from '../components/modal';

import css from './style.module.css';

const Medicines = () => {
  const [isShow, setShow] = useState(false);
  const [editId, setEditId] = useState(null);

  const onOpenForm = () => {
    setShow(true);
  };

  const onEdit = (id) => {
    setEditId(id);
    onOpenForm();
  };

  return (
    <div className={css.medicinesContainer}>
      <MedicinesList onEdit={onEdit} />
      <Modal isShow={isShow} setShow={setShow} setEditId={setEditId} editId={editId} />
      <ButtonPlus onClick={onOpenForm} className={css.medicinesPlus} />
    </div>
  );
};

export { Medicines };
