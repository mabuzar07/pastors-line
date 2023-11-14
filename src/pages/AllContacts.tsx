import React, { Fragment, useEffect, useState } from "react";
import CustomModal from "../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { closeModal, openModal } from "../store/actions/modalActions";
import { Modal, ListGroup } from "react-bootstrap";
import Axios from "../utils/Axios";

const AllContacts = () => {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [modalC, setModalC] = useState(false);
  useEffect(() => {
    dispatch(openModal("modalA"));
    (async () => {
      setLoading(true);
      Axios.get("/contacts.json?companyId=560")
        .then((response: any) => {
          setContacts(response?.data);
          setLoading(false);
        })
        .catch((err: any) => {
          setLoading(false);
          console.log(err);
        });
    })();
  }, []);
  const isOpen = useSelector((state: RootState) => state.modals["modalA"]);
  const even = useSelector((state: RootState) => state.modals.even);
  return (
    <CustomModal
      CloseBtnVariant="primary"
      show={isOpen}
      onHide={() => dispatch(closeModal("modalA"))}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          All Contacts
        </Modal.Title>
      </Modal.Header>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Modal.Body>
          <h4>Contacts</h4>
          {modalC ? (
            <div>Contact info</div>
          ) : (
            <ListGroup>
              {contacts?.contacts_ids
                ?.filter((filteredContact: any, index: number) => {
                  if (!even) {
                    return true;
                  } else if (even && index % 2 === 1) {
                    return true;
                  }
                })
                .map((contactId: any, index: number) => (
                  <div
                    key={contactId}
                    style={{ cursor: "pointer" }}
                    onClick={() => setModalC(true)}
                  >
                    <ListGroup.Item>
                      {contacts?.contacts[contactId]?.first_name}{" "}
                      {contacts?.contacts[contactId]?.last_name}
                    </ListGroup.Item>
                    <ListGroup.Item key={contactId}>
                      {contacts?.contacts[contactId]?.full_phone_number}
                    </ListGroup.Item>
                  </div>
                ))}
            </ListGroup>
          )}
        </Modal.Body>
      )}
    </CustomModal>
  );
};

export default AllContacts;
