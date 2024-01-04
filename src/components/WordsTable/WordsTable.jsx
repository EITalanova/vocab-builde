import { ReactComponent as Ua } from "../../assets/svg/tables/ua.svg";
import { ReactComponent as Eng } from "../../assets/svg/tables/eng.svg";

import style from "./WordsTable.module.css";

const table = [{ word: "Іван", translation: "Петров", category: 25 }];

export const WordsTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            Word
            <Eng />
          </tr>
          <tr>
            Translation
            <Ua />
          </tr>
          <tr>Category</tr>
          <tr>Progress</tr>
          <tr></tr>
        </thead>

        <tbody>
          {table.map((el) => {
            <tr key={el.word + el.translation}>
              <td>{el.word}</td>
              <td>{el.translation}</td>
              <td>{el.category}</td>
            </tr>;
          })}
        </tbody>
      </table>
      WordsTable
    </div>
  );
};
