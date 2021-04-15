import { Modal } from "antd";

const OrderModal = ({ session, orderedBy, showModal, setShowModal }) => {
  return (
    <Modal
      visible={showModal}
      title="Order payment info"
      onCancel={() => setShowModal(!showModal)}
    >
      <p>Payment status: {session.payment_status}</p>
      <p>
        Amount total: {session.currency.toUpperCase()}{" "}
        {session.amount_total / 100 +" per night"}
      </p>
      <p>Customer id: {session.customer}</p>
      <p>Customer: {orderedBy.name}</p>
    </Modal>
  );
};

export default OrderModal;
