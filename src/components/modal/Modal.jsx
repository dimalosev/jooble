import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { destroy } from 'redux-form';
import { connect } from 'react-redux';

import { locale } from '../../locales';
import { createMedicine, updateMedicine } from '../../store/medicines/actions';
import { MODAL_KEY, MODAL_TAB } from '../../constants/projectConstants';
import { Portal } from '../common/portal/Portal';
import ModalFirstTab from './ModalFirstTab';
import ModalSecondTab from './ModalSecondTab';

import css from './style.module.css';

const Modal = ({ isShow, setShow, createMedicine, updateMedicine, editId, setEditId, destroy }) => {
  const [modalTab, setModalTab] = useState(MODAL_TAB.FIRST);

  const nextTab = () => {
    setModalTab(MODAL_TAB.SECOND);
  };

  const prevTab = () => {
    setModalTab(MODAL_TAB.FIRST);
  };

  const handleCloseModal = () => {
    setShow(false);
    setEditId(null);
    setModalTab(MODAL_TAB.FIRST);
    destroy(MODAL_KEY);
  };

  const onSubmit = (medicine) => {
    editId ? updateMedicine(medicine, editId) : createMedicine(medicine);
    handleCloseModal();
  };

  const renderModalContent = (modalTab) => {
    switch (modalTab) {
      case MODAL_TAB.FIRST:
        return (
          <ModalFirstTab editId={editId} handleCloseModal={handleCloseModal} onSubmit={nextTab} />
        );
      case MODAL_TAB.SECOND:
        return (
          <ModalSecondTab
            editId={editId}
            prevTab={prevTab}
            handleCloseModal={handleCloseModal}
            onSubmit={onSubmit}
          />
        );
      default:
        return null;
    }
  };

  return isShow ? (
    <Portal>
      <div className={css.modalOverlay}>
        <div className={css.modalContent}>
          <h3 className={css.modalTitle}>
            {editId ? locale.formFields.formTitleEdit : locale.formFields.formTitleCreate}
            {` ${modalTab} / 2`}
          </h3>
          {renderModalContent(modalTab)}
        </div>
      </div>
    </Portal>
  ) : null;
};

Modal.propTypes = {
  isShow: PropTypes.bool,
  setShow: PropTypes.func,
  createMedicine: PropTypes.func,
  updateMedicine: PropTypes.func,
  setEditId: PropTypes.func,
  editId: PropTypes.string,
  destroy: PropTypes.func,
};

export default connect(null, { createMedicine, updateMedicine, destroy })(Modal);
