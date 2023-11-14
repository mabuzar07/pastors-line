import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../store/actions/modalActions";
import CustomModal from "../components/Modal";
import { RootState } from "../store";
import { ListGroup, Modal } from "react-bootstrap";
import Axios from "../utils/Axios";

const USContacts = () => {
  const [contacts, setContacts] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [modalC, setModalC] = useState(false);
  useEffect(() => {
    dispatch(openModal("modalB"));
    (async () => {
      setLoading(true);
      Axios.get("/contacts.json?companyId=560&countryId=226")
        .then((response: any) => {
          setContacts(response?.data);
          setLoading(false);
        })
        .catch((err: any) => {
          console.log(err);
          setLoading(false);
        });
    })();
  }, []);
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modals["modalB"]);
  const even = useSelector((state: RootState) => state.modals.even);
  return (
    <CustomModal
      CloseBtnVariant="primary"
      show={isOpen}
      onHide={() => dispatch(closeModal("modalB"))}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          US Contacts
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Contacts</h4>
        {loading ? (
          <div>Loading...</div>
        ) : modalC ? (
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
    </CustomModal>
  );
};

export default USContacts;
