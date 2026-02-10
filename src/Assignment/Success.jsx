import './Screens.css';

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-icon">🎉</div>
      <h2 className="success-title">Booking Confirmed!</h2>
      <p className="success-message">
        Your ticket has been successfully booked.
        <br />
        Check your email for confirmation details.
      </p>
      <div className="success-details">
        <div className="success-detail-item">
          <span className="success-detail-label">📧 Status:</span>
          <span className="success-detail-value">Confirmed</span>
        </div>
        <div className="success-detail-item">
          <span className="success-detail-label">🎫 Booking ID:</span>
          <span className="success-detail-value">#{Math.floor(Math.random() * 100000)}</span>
        </div>
      </div>
    </div>
  );
};

export default Success;
