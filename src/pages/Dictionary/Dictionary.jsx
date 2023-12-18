import { Dashboard } from "../../components/Dashboard/Dashboard";
import { WordsPagination } from "../../components/WordsPagination/WordsPagination";
import { WordsTable } from "../../components/WordsTable/WordsTable";

import style from "./Dictionary.module.css";

const Dictionary = () => {
  return (
    <div>
      <Dashboard />
      <WordsTable />
      <WordsPagination />
    </div>
  );
};

export default Dictionary;
