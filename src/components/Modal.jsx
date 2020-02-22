import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';

// Portals allow React components to render in another part of the DOM that is outside of their parent component.
// Therefore, we can use a Portal to mount our Modal component to the end of the document.body element,
// rather than as a child of another component.
const Modal = ({ isShowing, hide, onOverlayClick }) =>
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
            onClick={event => {
              onOverlayClick(event);
            }}
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
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
  hide: PropTypes.func.isRequired,
  onOverlayClick: PropTypes.func.isRequired
};

export default Modal;
