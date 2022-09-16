import React from 'react'
import { Modal } from 'react-bootstrap'
import AddSessionByClassroomCmp from './AddSessionByClassroomCmp'

export default function AddSessionByClassroomModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Ajouter Session
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <AddSessionByClassroomCmp toadd={props.toadd}/>
        </Modal.Body>
      </Modal>
      )
}
