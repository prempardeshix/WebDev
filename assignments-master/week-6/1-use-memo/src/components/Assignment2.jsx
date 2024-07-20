import { useMemo, useState } from "react";

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const sentences = [];
const count = 1000;
for (let i = 0; i < count; i++) {
  let sentence = "";
  for (let i = 0; i < words.length; i++) {
    sentence = sentence + words[Math.floor(Math.random() * words.length)] + " ";
  }
  sentences.push(sentence);
}

export function Assignment2() {
  const [filter, setFilter] = useState("");
  const [all, setAll] = useState(sentences);

  const filteredSentences = useMemo(() => {
    // console.log("hi");
    return all.filter(
      (item) => {
        return item.includes(filter);
      },
      [all, filter]
    );
  });
  // const filteredSentences = sentences;
  // console.log(filteredSentences);

  return (
    <>
      <input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      ></input>

      {filteredSentences.map((item) => {
        return (
          <>
            <br></br>
            {item}
          </>
        );
      })}
    </>
  );
}
