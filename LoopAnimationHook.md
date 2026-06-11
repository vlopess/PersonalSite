Preciso que mude isso:

                            <div className={"wrapper"}>
                                <span> Mobile </span>
                                <span> Front-End </span>
                                <span> Back-End </span>
                            </div>
                            <br/>
                            <Translator path="home.dev"/>


Pra isso:





import { useLoop } from "@/components/v1/skiper62";

const CustomLoopExample = () => {
const { key } = useLoop(2000); // 2 second delay

const items = ["Item 1", "Item 2", "Item 3"];
const currentItem = items[key % items.length];

return (
<div className="flex h-screen items-center justify-center">
<motion.div
key={key}
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 1.2 }}
transition={{ duration: 0.5 }}
>
{currentItem}
</motion.div>
</div>
);
};


Adapte
