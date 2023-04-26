import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function Categories() {
  const [name, setName] = useState("");

  function saveCategory(ev) {
    ev.preventDefault();
    axios.post("/api/categories", { name });
    setName("");
  }

  return (
    <Layout>
      <h1>Categorias</h1>
      <label>Categoria</label>
      <form onSubmit={saveCategory} className="flex gap-1">
        <input
          type="text"
          placeholder="Nome da categoria"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          className="mb-0"
        />
        <button type="submit" className="btn-primary">
          Salvar
        </button>
      </form>
    </Layout>
  );
}
