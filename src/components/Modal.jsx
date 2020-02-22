import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal modal-size-regular modal-animated modal-animation-fade-in">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-title">Modal title</div>
                  <button
                    type="button"
                    className="modal-close-button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-body-text">
                    This is the modal body. You can write whatever you want, or
                    even pass in your own React component.
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="modal-button modal-button-cancel"
                    onClick={hide}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired
};

export default Modal;
