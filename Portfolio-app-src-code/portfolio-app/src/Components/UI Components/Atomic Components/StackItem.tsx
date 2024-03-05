interface StackItemProps {
  children: JSX.Element | undefined;
}
const StackItem: React.FC<StackItemProps> = ({ children }) => {
  return <div className="stack-item-wrapper">{children}</div>;
};

export default StackItem;
