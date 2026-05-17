import { useLoop } from "@/components/v1/skiper62/useLoop";
import { motion } from "framer-motion";

const Loop = () => {
  const { key } = useLoop(2000); // 2 second delay

  const items = ["Mobile", "Front-End", "Back-End"];
  const currentItem = items[key % items.length];

  return (
    <motion.span
      key={key}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.5 }}
      style={{ display: 'inline-block', verticalAlign: 'middle', paddingLeft: '10px', paddingBottom: '10px'}}
    >
       {currentItem}
    </motion.span>
  );
};

export default Loop;