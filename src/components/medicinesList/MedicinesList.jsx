import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { firestoreConnect } from 'react-redux-firebase';

import { locale } from '../../locales';
import { COLLECTION_KEY } from '../../constants/projectConstants';
import { deleteMedicine } from '../../store/medicines/actions';
import { MedicinesItem } from '../medicinesItem';

import css from './style.module.css';

const MedicinesList = ({ medicines = [], deleteMedicine, onEdit }) => (
  <>
    {medicines.length ? (
      <div className={css.medicinesList}>
        {medicines.map(({ id, code, name, price }) => (
          <MedicinesItem
            id={id}
            key={id}
            medicineInfo={{ code, name, price }}
            onDelete={deleteMedicine}
            onEdit={onEdit}
          />
        ))}
      </div>
    ) : (
      <span className={css.medicinesEmptyList}>{locale.emptyListMessage}</span>
    )}
  </>
);

MedicinesList.propTypes = {
  medicines: PropTypes.array,
  deleteMedicine: PropTypes.func,
  onEdit: PropTypes.func,
};

export default compose(
  firestoreConnect([{ collection: COLLECTION_KEY }]),
  connect(({ firestore: { ordered } }) => ({ medicines: ordered[COLLECTION_KEY] }), {
    deleteMedicine,
  }),
)(MedicinesList);
