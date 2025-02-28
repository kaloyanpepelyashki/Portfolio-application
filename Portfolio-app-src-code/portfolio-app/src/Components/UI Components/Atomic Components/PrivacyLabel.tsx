type PrivacyLabelProps = {
  isPrivate: boolean;
};
const PrivacyLabel: React.FC<PrivacyLabelProps> = ({ isPrivate }) => {
  return (
    <span className="private-label">{isPrivate ? "Private" : "Public"}</span>
  );
};

export default PrivacyLabel;
