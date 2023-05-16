import { FontAwesome5 } from '@expo/vector-icons';

const renderIcons = (name, count = 1) => {
  const icons = [];
  for (let i = 0; i < count; i++) {
    icons.push(<FontAwesome5 key={i} name={name} size={24} color="black" />);
  }
  return icons;
};

export default renderIcons;
